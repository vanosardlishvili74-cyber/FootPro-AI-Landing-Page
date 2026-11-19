export type Language = 'en' | 'ka';

export type FeatureCategory = 'all' | 'training' | 'intelligence' | 'planning';

export interface FeatureItem {
  id: string;
  index: string;
  category: Exclude<FeatureCategory, 'all'>;
  title: string;
  summary: string;
  detailDescription: string;
  highlights: string[];
  featured?: boolean;
}

export type GalleryScreenId =
  | 'home-dashboard'
  | 'match-history'
  | 'player-profile'
  | 'training-timer'
  | 'ai-coach';

export interface GallerySlot {
  id: GalleryScreenId;
  index: string;
  title: string;
  shortLabel: string;
  caption: string;
  alt: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    canonicalUrl: string;
    ogLocale: string;
    ogAlternateLocale: string;
  };
  nav: {
    overview: string;
    features: string;
    gallery: string;
    download: string;
    openWebApp: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    availabilityNote: string;
    backgroundAlt: string;
  };
  intro: {
    kicker: string;
    heading: string;
    lead: string;
    body: string;
    pillars: Array<{
      index: string;
      title: string;
      description: string;
    }>;
    imageAlt: string;
  };
  features: {
    kicker: string;
    heading: string;
    subtitle: string;
    filters: Array<{
      id: FeatureCategory;
      label: string;
    }>;
    inspectLabel: string;
    modalClose: string;
    modalHighlightsTitle: string;
    modalCta: string;
    items: FeatureItem[];
  };
  gallery: {
    kicker: string;
    heading: string;
    subtitle: string;
    inspectSlot: string;
    previousLabel: string;
    nextLabel: string;
    modalClose: string;
    slots: GallerySlot[];
  };
  download: {
    kicker: string;
    heading: string;
    subtitle: string;
    webCard: {
      status: string;
      title: string;
      description: string;
      bullets: string[];
      cta: string;
      urlNote: string;
    };
    androidCard: {
      status: string;
      title: string;
      badgeText: string;
      description: string;
      bullets: string[];
      cta: string;
      modalTitle: string;
      modalBody: string;
      modalSteps: string[];
      modalPrimaryCta: string;
      modalClose: string;
    };
  };
  footer: {
    description: string;
    navigationTitle: string;
    accessTitle: string;
    webAppLink: string;
    androidNote: string;
    languageTitle: string;
    copyright: string;
  };
}

export const WEB_APP_URL = 'https://footpro-ai-app.onrender.com';

export const SITE_CONTENT: Record<Language, SiteContent> = {
  en: {
    meta: {
      title: 'FootPro AI — Your Football Training & Performance Platform',
      description:
        'FootPro AI delivers football training timers, player performance analytics, personal goals, tactical learning, weekly planning, and an AI Coach.',
      canonicalUrl: 'https://footpro-ai-website.onrender.com/',
      ogLocale: 'en_US',
      ogAlternateLocale: 'ka_GE',
    },
    nav: {
      overview: 'Overview',
      features: 'Features',
      gallery: 'Gallery',
      download: 'Download',
      openWebApp: 'Open Web App',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      languageLabel: 'Select language',
    },
    hero: {
      kicker: 'FootPro AI · Football Development Platform',
      headline: 'YOUR GAME. YOUR PROGRESS.',
      subheadline:
        'One dedicated workspace for structured training, tactical clarity, performance tracking, and intelligent football coaching.',
      primaryCta: 'Open Web App',
      secondaryCta: 'Explore Features',
      availabilityNote: 'Available now in any modern browser · Android app coming soon',
      backgroundAlt: 'Floodlit football stadium pitch at night',
    },
    intro: {
      kicker: 'What Is FootPro AI',
      heading: 'Built for players who measure every session on the pitch.',
      lead: 'Serious player development requires more than disconnected notes and guesswork.',
      body: 'FootPro AI brings your personal football identity, match and training numbers, tactical knowledge, timed pitch drills, weekly schedules, and AI-guided coaching together in a single, disciplined system.',
      pillars: [
        {
          index: '01',
          title: 'Structured Daily Execution',
          description:
            'Plan weekly sessions, run timed drills on the pitch, and record completed work without switching tools.',
        },
        {
          index: '02',
          title: 'Tactical & Technical Clarity',
          description:
            'Study football concepts alongside your personal profile and position demands so training connects directly to match decisions.',
        },
        {
          index: '03',
          title: 'Focused AI Guidance',
          description:
            'Use the built-in AI Coach to review priorities, refine weak areas, and keep your goals aligned week after week.',
        },
      ],
      imageAlt: 'Matte black and green match football resting on wet night turf under stadium lighting',
    },
    features: {
      kicker: 'Core Modules',
      heading: 'Seven tools engineered for complete player progression.',
      subtitle:
        'Every module in FootPro AI connects to the same player record. Select any module to review its full workflow.',
      filters: [
        { id: 'all', label: 'All Modules' },
        { id: 'training', label: 'On-Pitch Training' },
        { id: 'intelligence', label: 'Analysis & AI' },
        { id: 'planning', label: 'Goals & Schedule' },
      ],
      inspectLabel: 'Inspect module',
      modalClose: 'Close',
      modalHighlightsTitle: 'Included capabilities',
      modalCta: 'Launch in Web App',
      items: [
        {
          id: 'ai-coach',
          index: '01',
          category: 'intelligence',
          title: 'AI Coach',
          featured: true,
          summary:
            'Context-aware football coaching assistant tailored to your position, training focus, and weekly development priorities.',
          detailDescription:
            'AI Coach helps you turn raw training intent into clear next steps. Ask tactical questions, request drill adjustments, or review how your current focus supports your long-term player profile.',
          highlights: [
            'Position-specific training suggestions and drill ideas',
            'Clear breakdowns of tactical situations and decision-making',
            'Actionable guidance aligned with your personal goals',
          ],
        },
        {
          id: 'performance-analytics',
          index: '02',
          category: 'intelligence',
          title: 'Performance Analytics',
          featured: true,
          summary:
            'Track training consistency, session metrics, and progress across technical, physical, and tactical dimensions over time.',
          detailDescription:
            'Performance Analytics organizes your logged sessions into clear visual trends so you can identify strong habits, spot workload gaps, and review genuine development across weeks.',
          highlights: [
            'Structured tracking across technical, physical, and tactical work',
            'Session-by-session progression visibility',
            'Clear overview of workload balance and training streaks',
          ],
        },
        {
          id: 'player-profile',
          index: '03',
          category: 'planning',
          title: 'Player Profile',
          summary:
            'Centralize your primary position, preferred foot, physical attributes, playing style, and core strengths in one clean record.',
          detailDescription:
            'Your Player Profile establishes the baseline for your entire FootPro AI workspace, keeping your role, key attributes, and development priorities clearly documented.',
          highlights: [
            'Position, role, and preferred foot configuration',
            'Personal attribute overview and playing identity',
            'Connected context across goals and coaching',
          ],
        },
        {
          id: 'personal-goals',
          index: '04',
          category: 'planning',
          title: 'Personal Goals',
          summary:
            'Define measurable short-term and seasonal football targets with clear milestones and progress status.',
          detailDescription:
            'Break broad ambitions into concrete pitch targets—whether improving weak-foot finishing, sprint recovery, or first-touch consistency—and monitor progress step by step.',
          highlights: [
            'Clear target setting with measurable milestones',
            'Active tracking of completed and in-progress objectives',
            'Direct alignment with weekly training blocks',
          ],
        },
        {
          id: 'training-timer',
          index: '05',
          category: 'training',
          title: 'Training Timer',
          summary:
            'Dedicated interval and drill timer built for solo pitch sessions, conditioning blocks, and rest-to-work cycles.',
          detailDescription:
            'Stay locked into the pitch instead of watching a standard clock. Configure work intervals, rest periods, and round counts designed for high-tempo football drills.',
          highlights: [
            'Work and rest interval presets for football drills',
            'High-visibility controls designed for pitchside use',
            'Smooth round progression for solo and group conditioning',
          ],
        },
        {
          id: 'tactical-learning',
          index: '06',
          category: 'intelligence',
          title: 'Tactical Learning',
          summary:
            'Interactive tactical concepts covering formations, spatial awareness, pressing triggers, and role responsibilities.',
          detailDescription:
            'Build game intelligence off the pitch with structured tactical lessons designed to sharpen positioning, off-the-ball movement, and situational awareness.',
          highlights: [
            'Role-by-role responsibilities across match phases',
            'Structured tactical principles and spatial concepts',
            'Practical match scenarios for sharper decision-making',
          ],
        },
        {
          id: 'weekly-planner',
          index: '07',
          category: 'planning',
          title: 'Weekly Planner',
          summary:
            'Map out team training, individual skill work, matchdays, and recovery across a structured seven-day rhythm.',
          detailDescription:
            'Balance intensity and recovery throughout your week. Organize pitch sessions, gym blocks, tactical study, and rest days into a realistic schedule you can sustain.',
          highlights: [
            'Seven-day training and recovery overview',
            'Clear separation of matchdays, team sessions, and solo drills',
            'Flexible adjustments when match schedules shift',
          ],
        },
      ],
    },
    gallery: {
      kicker: 'Inside The App',
      heading: 'Real screens from FootPro AI.',
      subtitle:
        'Explore the live FootPro AI mobile interface across your daily dashboard, match log, player profile, interval timer, and AI Coach.',
      inspectSlot: 'View full screen',
      previousLabel: 'Previous screen',
      nextLabel: 'Next screen',
      modalClose: 'Close',
      slots: [
        {
          id: 'home-dashboard',
          index: '01',
          shortLabel: 'Home',
          title: 'Main Dashboard',
          caption:
            'Daily overview with player rating, training streak, completed sessions, and quick access to timer and AI Coach.',
          alt: 'FootPro AI main dashboard screenshot showing player greeting, 75 OVR rating, streak counter, completed sessions, and quick action buttons',
        },
        {
          id: 'match-history',
          index: '02',
          shortLabel: 'Matches',
          title: 'Match History',
          caption:
            'Log played matches and review goals, assists, minutes played, and match performance records in one place.',
          alt: 'FootPro AI Match History screenshot displaying matches played, goals, assists, minutes played, and add new match button',
        },
        {
          id: 'player-profile',
          index: '03',
          shortLabel: 'Profile',
          title: 'Player Profile',
          caption:
            'Configure your position, targets, weekly schedule, profile wizard, and player card photo.',
          alt: 'FootPro AI Player Profile screenshot showing position and schedule controls, profile wizard, and player photo upload',
        },
        {
          id: 'training-timer',
          index: '04',
          shortLabel: 'Timer',
          title: 'Training Timer',
          caption:
            'Athletic interval timer with configurable work and rest cycles, round tracking, and pitchside audio cues.',
          alt: 'FootPro AI Training Timer screenshot showing athletic interval timer, sound toggle, and active work phase',
        },
        {
          id: 'ai-coach',
          index: '05',
          shortLabel: 'AI Coach',
          title: 'AI Coach',
          caption:
            'Generate personalized training plans and football guidance tailored to your position and logged activity.',
          alt: 'FootPro AI Coach screenshot showing UEFA standards methodology, training plan generator, and saved plans tabs',
        },
      ],
    },
    download: {
      kicker: 'Get Started',
      heading: 'Access FootPro AI today.',
      subtitle:
        'Start directly in your browser through the live FootPro AI Web App while the native Android release is being prepared.',
      webCard: {
        status: 'Live · Browser Platform',
        title: 'FootPro AI Web App',
        description:
          'Full access to Player Profile, Performance Analytics, Personal Goals, Training Timer, Tactical Learning, AI Coach, and Weekly Planner across desktop, tablet, and mobile browsers.',
        bullets: [
          'Instant launch — no installation required',
          'Responsive layout for desktop and mobile screens',
          'Hosted directly at footpro-ai-app.onrender.com',
        ],
        cta: 'Open Web App',
        urlNote: 'Opens https://footpro-ai-app.onrender.com in a new tab',
      },
      androidCard: {
        status: 'In Development · Native Mobile',
        title: 'FootPro AI for Android',
        badgeText: 'Android app coming soon',
        description:
          'A dedicated Android package is currently in preparation. No APK download is available yet—use the Web App on your Android browser in the meantime.',
        bullets: [
          'Android app coming soon — APK not yet published',
          'Use the Web App seamlessly in Chrome on Android today',
          'Direct APK link will appear here once officially released',
        ],
        cta: 'How to use on Android now',
        modalTitle: 'Using FootPro AI on Android Right Now',
        modalBody:
          'The native Android APK is not published yet. While the Android app is coming soon, you can run the full FootPro AI experience directly on your Android phone through the browser.',
        modalSteps: [
          'Open https://footpro-ai-app.onrender.com in Chrome or your preferred Android browser.',
          'Tap the browser menu and select "Add to Home screen" for quick pitchside access.',
          'Launch FootPro AI anytime directly from your home screen while waiting for the official Android release.',
        ],
        modalPrimaryCta: 'Open Web App',
        modalClose: 'Close',
      },
    },
    footer: {
      description:
        'Focused football development technology uniting training execution, tactical understanding, performance tracking, and AI coaching.',
      navigationTitle: 'Navigation',
      accessTitle: 'Platform Access',
      webAppLink: 'Open Web App',
      androidNote: 'Android app coming soon',
      languageTitle: 'Language',
      copyright: 'FootPro AI. All rights reserved.',
    },
  },
  ka: {
    meta: {
      title: 'FootPro AI — საფეხბურთო ვარჯიშისა და პერფორმანსის პლატფორმა',
      description:
        'FootPro AI აერთიანებს საფეხბურთო ვარჯიშის ტაიმერს, მოთამაშის ანალიტიკას, პირად მიზნებს, ტაქტიკურ სწავლებას, კვირის გეგმასა და AI მწვრთნელს.',
      canonicalUrl: 'https://footpro-ai-website.onrender.com/ka/',
      ogLocale: 'ka_GE',
      ogAlternateLocale: 'en_US',
    },
    nav: {
      overview: 'მიმოხილვა',
      features: 'ფუნქციები',
      gallery: 'გალერეა',
      download: 'გადმოწერა',
      openWebApp: 'ვებ-აპლიკაცია',
      openMenu: 'ნავიგაციის მენიუს გახსნა',
      closeMenu: 'ნავიგაციის მენიუს დახურვა',
      languageLabel: 'ენის არჩევა',
    },
    hero: {
      kicker: 'FootPro AI · საფეხბურთო განვითარების პლატფორმა',
      headline: 'შენი თამაში. შენი პროგრესი.',
      subheadline:
        'ერთიანი სივრცე სტრუქტურირებული ვარჯიშებისთვის, ტაქტიკური განვითარებისთვის, პერფორმანსის ანალიზისა და AI მწვრთნელის მხარდაჭერისთვის.',
      primaryCta: 'ვებ-აპლიკაციის გახსნა',
      secondaryCta: 'ფუნქციების ნახვა',
      availabilityNote: 'ხელმისაწვდომია ნებისმიერ ბრაუზერში · Android აპლიკაცია მალე დაემატება',
      backgroundAlt: 'ღამის განათებული საფეხბურთო სტადიონის მოედანი',
    },
    intro: {
      kicker: 'რა არის FootPro AI',
      heading: 'შექმნილია მოთამაშეებისთვის, რომლებიც მოედანზე ყოველ ვარჯიშს მიზანმიმართულად გეგმავენ.',
      lead: 'საფეხბურთო პროგრესი გაფანტულ ჩანაწერებზე მეტს მოითხოვს.',
      body: 'FootPro AI აერთიანებს მოთამაშის პროფილს, ვარჯიშისა და თამაშის მაჩვენებლებს, ტაქტიკურ ცოდნას, ინტერვალურ ტაიმერს, კვირის გეგმასა და AI მწვრთნელს ერთ გამართულ სისტემაში.',
      pillars: [
        {
          index: '01',
          title: 'სტრუქტურირებული ყოველდღიურობა',
          description:
            'დაგეგმე კვირის სესიები, გამოიყენე ვარჯიშის ტაიმერი მოედანზე და აღრიცხე შესრულებული სამუშაო ერთ სივრცეში.',
        },
        {
          index: '02',
          title: 'ტაქტიკური და ტექნიკური სიცხადე',
          description:
            'შეისწავლე სათამაშო პრინციპები შენი პოზიციისა და პროფილის გათვალისწინებით, რათა ვარჯიში პირდაპირ აისახოს მოედანზე.',
        },
        {
          index: '03',
          title: 'AI მწვრთნელის მხარდაჭერა',
          description:
            'გამოიყენე ჩაშენებული AI მწვრთნელი პრიორიტეტების განსაზღვრისთვის, სუსტი მხარეების დასამუშავებლად და მიზნების შესასრულებლად.',
        },
      ],
      imageAlt: 'შავი და მწვანე საფეხბურთო ბურთი სველ ბალახზე ღამის სტადიონის განათებაზე',
    },
    features: {
      kicker: 'ძირითადი მოდულები',
      heading: 'შვიდი ინსტრუმენტი მოთამაშის სრულყოფილი პროგრესისთვის.',
      subtitle:
        'FootPro AI-ის ყველა მოდული დაკავშირებულია ერთიან სისტემაში. დეტალების სანახავად დააჭირეთ სასურველ მოდულს.',
      filters: [
        { id: 'all', label: 'ყველა მოდული' },
        { id: 'training', label: 'მოედანზე ვარჯიში' },
        { id: 'intelligence', label: 'ანალიტიკა და AI' },
        { id: 'planning', label: 'მიზნები და გეგმა' },
      ],
      inspectLabel: 'დეტალების ნახვა',
      modalClose: 'დახურვა',
      modalHighlightsTitle: 'ძირითადი შესაძლებლობები',
      modalCta: 'გახსენი ვებ-აპლიკაციაში',
      items: [
        {
          id: 'ai-coach',
          index: '01',
          category: 'intelligence',
          title: 'AI მწვრთნელი',
          featured: true,
          summary:
            'პერსონალური საფეხბურთო ასისტენტი, რომელიც ითვალისწინებს შენს პოზიციას, სავარჯიშო მიზნებსა და კვირის დატვირთვას.',
          detailDescription:
            'AI მწვრთნელი გეხმარება სავარჯიშო გეგმის დახვეწაში, ტაქტიკური სიტუაციების გააზრებასა და პოზიციური უნარების განვითარებაში კონკრეტული რეკომენდაციებით.',
          highlights: [
            'პოზიციაზე მორგებული სავარჯიშო რჩევები და მიმართულებები',
            'ტაქტიკური ეპიზოდებისა და გადაწყვეტილებების მკაფიო ახსნა',
            'პირად მიზნებთან თანხვედრილი ყოველკვირეული რეკომენდაციები',
          ],
        },
        {
          id: 'performance-analytics',
          index: '02',
          category: 'intelligence',
          title: 'პერფორმანსის ანალიტიკა',
          featured: true,
          summary:
            'დააკვირდი ვარჯიშის სტაბილურობას, სესიების მაჩვენებლებსა და პროგრესს ტექნიკურ, ფიზიკურ და ტაქტიკურ მიმართულებებში.',
          detailDescription:
            'პერფორმანსის ანალიტიკა სტრუქტურირებულად აჯამებს შენს ვარჯიშებს, რათა მარტივად დაინახო ძლიერი მხარეები, დატვირთვის ბალანსი და რეალური დინამიკა.',
          highlights: [
            'ტექნიკური, ფიზიკური და ტაქტიკური დატვირთვის აღრიცხვა',
            'სესიების დინამიკისა და პროგრესის მკაფიო ხედვა',
            'ვარჯიშის რეგულარობისა და ბალანსის კონტროლი',
          ],
        },
        {
          id: 'player-profile',
          index: '03',
          category: 'planning',
          title: 'მოთამაშის პროფილი',
          summary:
            'შეინახე შენი ძირითადი პოზიცია, წამყვანი ფეხი, ფიზიკური მახასიათებლები და სათამაშო სტილი ერთ პროფილში.',
          detailDescription:
            'მოთამაშის პროფილი წარმოადგენს შენს საბაზისო საფეხბურთო პასპორტს აპლიკაციაში, რომელსაც ეყრდნობა მიზნები და სავარჯიშო რეკომენდაციები.',
          highlights: [
            'პოზიციის, როლისა და წამყვანი ფეხის პარამეტრები',
            'სათამაშო თვისებებისა და იდენტობის შეჯამება',
            'ერთიანი კონტექსტი ყველა მოდულისთვის',
          ],
        },
        {
          id: 'personal-goals',
          index: '04',
          category: 'planning',
          title: 'პირადი მიზნები',
          summary:
            'დაისახე გაზომვადი მოკლევადიანი და სეზონური საფეხბურთო მიზნები მკაფიო ეტაპებითა და სტატუსით.',
          detailDescription:
            'დაშალე დიდი მიზნები კონკრეტულ ნაბიჯებად — იქნება ეს სუსტი ფეხით დარტყმა, გამძლეობა თუ პირველი შეხება — და აკონტროლე შესრულება.',
          highlights: [
            'კონკრეტული, გაზომვადი მიზნებისა და ეტაპების დამატება',
            'აქტიური და შესრულებული ამოცანების მკაფიო აღრიცხვა',
            'პირდაპირი კავშირი კვირის სავარჯიშო გეგმასთან',
          ],
        },
        {
          id: 'training-timer',
          index: '05',
          category: 'training',
          title: 'ვარჯიშის ტაიმერი',
          summary:
            'სპეციალიზებული ინტერვალური ტაიმერი ინდივიდუალური ვარჯიშებისთვის, გამძლეობის ბლოკებისა და მუშაობა-დასვენების ციკლებისთვის.',
          detailDescription:
            'იყავი კონცენტრირებული ბურთთან მუშაობაზე. დააყენე სამუშაო ინტერვალები, დასვენების დრო და რაუნდების რაოდენობა მოედანზე გამოსაყენებლად.',
          highlights: [
            'ინტერვალური მუშაობისა და დასვენების მოქნილი რეჟიმები',
            'მკაფიო, ადვილად წასაკითხი ინტერფეისი მოედნისთვის',
            'რაუნდების ავტომატური გადართვა სოლო და ჯგუფურ ვარჯიშებში',
          ],
        },
        {
          id: 'tactical-learning',
          index: '06',
          category: 'intelligence',
          title: 'ტაქტიკური სწავლება',
          summary:
            'ტაქტიკური კონცეფციები სათამაშო სქემების, სივრცის კონტროლის, პრესინგისა და პოზიციური პასუხისმგებლობების შესასწავლად.',
          detailDescription:
            'განავითარე სათამაშო ინტელექტი მოედნის გარეთ სტრუქტურირებული ტაქტიკური მასალებით, რომლებიც აუმჯობესებს პოზიციონირებასა და გადაწყვეტილების სისწრაფეს.',
          highlights: [
            'პოზიციური მოვალეობები თამაშის სხვადასხვა ფაზაში',
            'ტაქტიკური პრინციპებისა და სივრცეების მკაფიო ახსნა',
            'პრაქტიკული სათამაშო სცენარები აზროვნების გასავითარებლად',
          ],
        },
        {
          id: 'weekly-planner',
          index: '07',
          category: 'planning',
          title: 'კვირის გეგმა',
          summary:
            'დაალაგე გუნდური ვარჯიშები, ინდივიდუალური სესიები, მატჩის დღეები და აღდგენა 7-დღიან კალენდარში.',
          detailDescription:
            'დააბალანსე დატვირთვა და აღდგენა მთელი კვირის განმავლობაში. გადაანაწილე მოედნის ვარჯიშები, ფიზმომზადება, ტაქტიკა და დასვენების დღეები.',
          highlights: [
            'შვიდდღიანი სავარჯიშო და აღდგენის გეგმა',
            'მატჩის დღეების, გუნდური და ინდივიდუალური ვარჯიშების გამიჯვნა',
            'გრაფიკის სწრაფი კორექტირება კვირის ცვლილებების მიხედვით',
          ],
        },
      ],
    },
    gallery: {
      kicker: 'აპლიკაციის ეკრანები',
      heading: 'FootPro AI რეალურ მოქმედებაში.',
      subtitle:
        'დაათვალიერე FootPro AI-ის რეალური მობილური ინტერფეისი — მთავარი დაფიდან და მატჩების ისტორიიდან დაწყებული, ტაიმერითა და AI მწვრთნელით დასრულებული.',
      inspectSlot: 'სრულად ნახვა',
      previousLabel: 'წინა ეკრანი',
      nextLabel: 'შემდეგი ეკრანი',
      modalClose: 'დახურვა',
      slots: [
        {
          id: 'home-dashboard',
          index: '01',
          shortLabel: 'მთავარი',
          title: 'მთავარი დაფა',
          caption:
            'ყოველდღიური მიმოხილვა საერთო რეიტინგით, სერიით, დასრულებული სესიებითა და სწრაფი მოქმედებებით.',
          alt: 'FootPro AI მთავარი დაფის ეკრანის სქრინშოტი მოთამაშის მისალმებით, საერთო რეიტინგით, სერიითა და სწრაფი ღილაკებით',
        },
        {
          id: 'match-history',
          index: '02',
          shortLabel: 'მატჩები',
          title: 'მატჩების ისტორია',
          caption:
            'აღრიცხე ჩატარებული მატჩები, გატანილი გოლები, საგოლე გადაცემები და ნათამაშები წუთები ერთ სივრცეში.',
          alt: 'FootPro AI მატჩების ისტორიის სქრინშოტი ჩატარებული თამაშების, გოლების, ასისტებისა და წუთების მონაცემებით',
        },
        {
          id: 'player-profile',
          index: '03',
          shortLabel: 'პროფილი',
          title: 'მოთამაშის პროფილი',
          caption:
            'მართე პოზიცია, პირადი მიზნები, გრაფიკი, პროფილის ოსტატი და მოთამაშის ბარათის ფოტო.',
          alt: 'FootPro AI მოთამაშის პროფილის სქრინშოტი პოზიციის, მიზნების, გრაფიკისა და ფოტოს ატვირთვის პარამეტრებით',
        },
        {
          id: 'training-timer',
          index: '04',
          shortLabel: 'ტაიმერი',
          title: 'ვარჯიშის ტაიმერი',
          caption:
            'ინტერვალური სავარჯიშო ტაიმერი სამუშაო და დასვენების ციკლებით, რაუნდებითა და ხმოვანი სიგნალებით.',
          alt: 'FootPro AI ვარჯიშის ტაიმერის სქრინშოტი ინტერვალური ტაიმერით, ხმოვანი ღილაკითა და სამუშაო ფაზით',
        },
        {
          id: 'ai-coach',
          index: '05',
          shortLabel: 'AI მწვრთნელი',
          title: 'AI მწვრთნელი',
          caption:
            'ინდივიდუალური სავარჯიშო გეგმების გენერატორი და საფეხბურთო რეკომენდაციები თქვენს მონაცემებზე დაყრდნობით.',
          alt: 'FootPro AI მწვრთნელის სქრინშოტი გეგმის გენერატორით, შენახული გეგმებითა და მეთოდოლოგიით',
        },
      ],
    },
    download: {
      kicker: 'დაწყება',
      heading: 'გამოიყენე FootPro AI დღესვე.',
      subtitle:
        'გახსენი FootPro AI-ის მოქმედი ვებ-აპლიკაცია პირდაპირ ბრაუზერიდან, სანამ Android-ის ნატიური ვერსია მზადდება.',
      webCard: {
        status: 'ხელმისაწვდომია · ვებ პლატფორმა',
        title: 'FootPro AI ვებ-აპლიკაცია',
        description:
          'სრული წვდომა მოთამაშის პროფილზე, ანალიტიკაზე, პირად მიზნებზე, ტაიმერზე, ტაქტიკურ სწავლებაზე, AI მწვრთნელსა და კვირის გეგმაზე კომპიუტერსა და ტელეფონში.',
        bullets: [
          'მყისიერი გახსნა ინსტალაციის გარეშე',
          'ადაპტირებულია კომპიუტერის, პლანშეტისა და მობილურის ეკრანებზე',
          'მუშაობს მისამართზე footpro-ai-app.onrender.com',
        ],
        cta: 'ვებ-აპლიკაციის გახსნა',
        urlNote: 'გახსნის https://footpro-ai-app.onrender.com ახალ ფანჯარაში',
      },
      androidCard: {
        status: 'მზადების პროცესში · Android',
        title: 'FootPro AI Android-ისთვის',
        badgeText: 'Android აპლიკაცია მალე დაემატება',
        description:
          'Android-ის აპლიკაცია მუშავდება და APK ფაილი ჯერ არ არის გამოქვეყნებული. მანამდე შეგიძლიათ ისარგებლოთ ვებ-აპლიკაციით Android ბრაუზერში.',
        bullets: [
          'Android აპლიკაცია მალე დაემატება — APK ჯერ ხელმისაწვდომი არ არის',
          'ვებ-აპლიკაცია სრულფასოვნად მუშაობს Android Chrome-ში',
          'ოფიციალური გადმოწერის ბმული გამოქვეყნებისთანავე დაემატება აქ',
        ],
        cta: 'როგორ გამოვიყენო Android-ზე ახლა',
        modalTitle: 'FootPro AI-ის გამოყენება Android-ზე დღესვე',
        modalBody:
          'ოფიციალური Android APK ჯერ არ არის გამოშვებული, თუმცა შეგიძლიათ FootPro AI-ის სრული ფუნქციონალი გახსნათ პირდაპირ Android ტელეფონის ბრაუზერიდან.',
        modalSteps: [
          'გახსენით https://footpro-ai-app.onrender.com Chrome-ში ან სხვა Android ბრაუზერში.',
          'დააჭირეთ ბრაუზერის მენიუს და აირჩიეთ „Add to Home screen“ სწრაფი წვდომისთვის.',
          'გამოიყენეთ FootPro AI ნებისმიერ დროს მთავარი ეკრანიდან, სანამ Android აპლიკაცია გამოვა.',
        ],
        modalPrimaryCta: 'ვებ-აპლიკაციის გახსნა',
        modalClose: 'დახურვა',
      },
    },
    footer: {
      description:
        'თანამედროვე საფეხბურთო განვითარების პლატფორმა, რომელიც აერთიანებს ვარჯიშს, ტაქტიკურ ცოდნას, ანალიტიკასა და AI მწვრთნელს.',
      navigationTitle: 'ნავიგაცია',
      accessTitle: 'პლატფორმაზე წვდომა',
      webAppLink: 'ვებ-აპლიკაციის გახსნა',
      androidNote: 'Android აპლიკაცია მალე დაემატება',
      languageTitle: 'ენა',
      copyright: 'FootPro AI. ყველა უფლება დაცულია.',
    },
  },
};
