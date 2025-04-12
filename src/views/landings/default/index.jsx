'use client';

// @project
import {Feature20} from '@/blocks/feature';
import {Hero17} from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import {cta4, faq, feature20, hero, integration, testimonial} from './data';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {
    useDataThemeMode();

    return (
        <>
            <Hero17 {...hero} />
            <Feature20 {...feature20} />

            <LazySection
                sections={[
                    {
                        importFunc: () => import('@/blocks/integration').then((module) => ({default: module.Integration2})),
                        props: integration
                    },
                ]}
                offset="200px"
            />

            <LazySection
                sections={[
                    {importFunc: () => import('@/blocks/cta').then((module) => ({default: module.Cta4})), props: cta4}
                ]}
                offset="200px"
            />

            <LazySection
                sections={[
                    {
                        importFunc: () => import('@/blocks/testimonial').then((module) => ({default: module.Testimonial10})),
                        props: testimonial
                    },
                ]}
                offset="200px"
            />

            <LazySection
                sections={[
                    {importFunc: () => import('@/blocks/faq').then((module) => ({default: module.Faq6})), props: faq}
                ]}
                offset="200px"
            />
        </>
    );
}
