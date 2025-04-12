'use client';

// @next

// @mui
import Stack from '@mui/material/Stack';

// @third-party
import {motion} from 'framer-motion';

// @project
import branding from '@/branding.json';
import {GraphicsCard} from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import {Copyright, FollowUS} from '@/components/footer';
import SvgIcon from '@/components/SvgIcon';

import {CopyrightType} from '@/enum';
import {DOCS_URL, FREEBIES_URL} from '@/path';
import {SECTION_COMMON_PY} from '@/utils/constant';

// @types

/***************************  FOOTER - 7 DATA  ***************************/

const linkProps = {target: '_blank', rel: 'noopener noreferrer'};
const data = [
    {
        id: 'company',
        grid: {size: {xs: 6, sm: 'auto'}},
        title: 'Company',
        menu: [
            {
                label: 'Why Phoenixcoded?',
                link: {
                    href: 'https://blog.saasable.io/a-decade-of-expertise-the-phoenixcoded-story-and-why-you-should-trust-us',
                    ...linkProps
                }
            },
            {
                label: 'About',
                link: {href: 'https://stage.saasable.io/about', ...linkProps}
            },
            {
                label: 'Contact Us',
                link: {href: '/contact', ...linkProps}
            }
        ]
    },
    {
        id: 'support',
        grid: {size: {xs: 6, sm: 'auto'}},
        title: 'Support',
        menu: [
            {
                label: 'Pricing',
                link: {href: '#'}
            },
            {
                label: 'FAQ',
                link: {href: '#'}
            },
            {
                label: 'Support',
                link: {href: branding.company.socialLink.support, ...linkProps}
            },
            {
                label: 'License Terms',
                link: {href: 'https://mui.com/store/license/', ...linkProps}
            }
        ]
    },
    {
        id: 'resources',
        grid: {size: {xs: 12, sm: 'auto'}},
        title: 'Resources',
        menu: [
            {
                label: 'Freebies',
                link: {href: FREEBIES_URL, ...linkProps}
            },
            {
                label: 'Documentation',
                link: {href: DOCS_URL, ...linkProps}
            },
            {
                label: 'Blog',
                link: {href: 'https://blog.saasable.io/', ...linkProps}
            },
            {
                label: 'Privacy Policy',
                link: {href: '/privacy-policy', ...linkProps}
            },
            {
                label: 'Refund Policy',
                link: {href: 'https://mui.com/store/customer-refund-policy/', ...linkProps}
            }
        ]
    }
];

const iconProps = {color: 'text.secondary'};

const usefullLinks = [
    {
        icon: <SvgIcon name="tabler-brand-figma" {...iconProps} />,
        title: 'Figma Version 1.0.0',
        href: 'https://www.figma.com/community/file/1425095061180549847'
    },
    {
        icon: <SvgIcon name="tabler-route" {...iconProps} />,
        title: 'React Material UI v6.1.4',
        href: 'https://mui.com/material-ui/getting-started'
    },
    {
        icon: <SvgIcon name="tabler-sparkles" {...iconProps} />,
        title: 'Documentation',
        href: DOCS_URL
    }
];

/***************************  FOOTER - 7  ***************************/

export default function Footer7() {
    return (
        <ContainerWrapper sx={{py: SECTION_COMMON_PY}}>
            <Stack id="footer-7" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 7"
                   sx={{gap: {xs: 3, sm: 4, md: 5}}}>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{
                        duration: 0.5,
                        delay: 0.4
                    }}
                >
                    <GraphicsCard sx={{borderRadius: {xs: 6, sm: 8}}}>
                        <Stack
                            direction={{sm: 'row'}}
                            sx={{
                                alignItems: 'center',
                                justifyContent: {xs: 'center', sm: 'space-between'},
                                gap: 1.5,
                                py: {xs: 2, sm: 1.5},
                                px: {xs: 2, sm: 3}
                            }}
                        >
                            <Copyright type={CopyrightType.TYPE3}/>
                            {/*<FollowUS heading={false} color="grey.100"/>*/}
                        </Stack>
                    </GraphicsCard>
                </motion.div>
            </Stack>
        </ContainerWrapper>
    );
}
