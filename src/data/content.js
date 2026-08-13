// ============================================================
// 사이트 콘텐츠 데이터 (F-04: 서비스 추가·수정이 쉬운 구조)
// F-08: 다국어(영/한) — CONTENT.en / CONTENT.ko 두 사전으로 관리.
// 기본 언어는 영어(en)이며 헤더 토글로 전환.
// PRD 13장 미확정 사항(주소·연락처·대표 정보 등)은 [확인 필요]
// 플레이스홀더로 표기 — 클라이언트 확정 후 이 파일만 수정하면 됨.
// ============================================================

// 언어와 무관한 연락처·자격 정보
export const SITE = {
  nameKo: '조은법률 조은이민',
  nameEn: 'JOUN LAWYERS',
  location: 'SYDNEY · AUSTRALIA',
  phone: '0432 009 862',
  smsOnly: '0432 009 862',
  email: 'info@jounlawyer.com',
  address: 'Suite 310, 33-43 Rowe St, Eastwood NSW 2122',
  marn: 'MARN 0741800',
  jpNumber: 'JP No. 183656',
  abn: 'ABN 98 716 989 655',
  // 상담 폼 제출 → 관리자 이메일 전송 (FormSubmit AJAX 엔드포인트)
  formEndpoint: 'https://formsubmit.co/ajax/info@jounlawyer.com',
  mapEmbed:
    'https://maps.google.com/maps?q=33-43%20Rowe%20St%2C%20Eastwood%20NSW%202122&z=17&output=embed',
}

export const CONTENT = {
  // ----------------------------------------------------------
  // English (default)
  // ----------------------------------------------------------
  en: {
    brand: {
      main: 'Joun Visa',
      sub: '조은법률 조은이민',
    },
    nav: [
      { id: 'about', label: 'About Us' },
      { id: 'services', label: 'Practice Areas' },
      { id: 'why-joun', label: 'Why Joun' },
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'contact', label: 'Contact' },
    ],
    ctaShort: 'Book Now',
    cta: 'Book a Consultation',
    hero: {
      line1: 'Your new chapter in Australia,',
      line2: { pre: '', em: 'Joun', post: ' walks with you' },
      desc: 'Law and migration under one roof — from visa appeals to contracts, property and estates, your one-stop legal partner for the Korean-Australian community.',
      ctaPrimary: 'Book a Consultation',
      ctaSecondary: 'Explore Our Services',
    },
    about: {
      label: 'About Us — Greeting',
      title: 'Your case, handled like our own',
      bio: 'Joun Lawyers is a legal and migration practice that has grown together with the Korean community in Australia. When complex visa issues or legal disputes leave you feeling lost, we provide an accurate diagnosis and a realistic path forward — with courtesy and care.',
      badgeLabel: 'Registered',
      portraitNote: 'Principal Portrait',
      values: [
        {
          title: 'Honest risk assessment',
          desc: 'We are transparent about the prospects and risks of your case from day one.',
        },
        {
          title: 'Your case, like our own',
          desc: 'Every matter is prepared as if it were our own family’s.',
        },
        {
          title: 'Committed to the end',
          desc: 'From lodgement to outcome, we keep you informed at every step.',
        },
      ],
    },
    services: {
      label: 'Practice Areas',
      title: { pre: 'Migration & Law, ', em: 'under one roof' },
      sub: 'Visa problems and legal problems rarely come alone. Joun offers an integrated solution covering both.',
      linkLabel: 'Discuss your case',
      groups: {
        migration: { title: 'Joun Migration', tag: 'Migration' },
        legal: { title: 'Joun Legal', tag: 'Legal' },
      },
      migration: [
        {
          icon: '⚖️',
          title: 'ART Appeals (Refusal · Cancellation)',
          sub: 'ART Appeals',
          desc: 'Received a visa refusal or cancellation? Lodging a review in time can win your chance back.',
        },
        {
          icon: '🏢',
          title: 'Employer Sponsored Visas',
          sub: 'SC 482 · 186',
          desc: 'Tailored strategies for businesses sponsoring staff and for skilled applicants.',
        },
        {
          icon: '💍',
          title: 'Partner Visas',
          sub: 'SC 820 · 801 · 309 · 100',
          desc: 'From evidencing your relationship to preparing documents, we walk with you.',
        },
        {
          icon: '🎓',
          title: 'Student & Graduate Visas',
          sub: 'SC 500 · 485',
          desc: 'A visa roadmap designed around your study plans and post-graduation career.',
        },
      ],
      legal: [
        {
          icon: '📄',
          title: 'Contract Review & Drafting',
          sub: 'Contracts',
          desc: 'We flag risky clauses in business, employment and lease contracts before they become disputes.',
        },
        {
          icon: '🏠',
          title: 'Property & Conveyancing',
          sub: 'Conveyancing',
          desc: 'Navigate Australian property transactions safely, in Korean or English.',
        },
        {
          icon: '📜',
          title: 'Wills & Estates',
          sub: 'Wills & Estates',
          desc: 'Prepare your family’s future through wills and estate administration.',
        },
        {
          icon: '🤝',
          title: 'Dispute Resolution & Litigation',
          sub: 'Dispute Resolution',
          desc: 'From negotiation to litigation, we act with your interests first.',
        },
      ],
    },
    stats: {
      label: 'Why Joun — Our Promise',
      title: { pre: 'Results built on ', em: 'sincerity' },
      items: [
        { value: 15, suffix: '+', label: 'Years of Experience', desc: 'in legal & migration practice' },
        { value: 97, suffix: '%', label: 'Success Rate', desc: 'across major visa categories' },
        { value: 2400, suffix: '+', label: 'Cases Resolved', desc: 'and counting' },
      ],
    },
    testimonials: {
      label: 'Testimonials',
      title: { pre: 'The care our clients ', em: 'remember' },
      prevAria: 'Previous testimonial',
      nextAria: 'Next testimonial',
      dotAria: (n) => `View testimonial ${n}`,
      starsAria: (n) => `${n} star rating`,
      items: [
        {
          stars: 5,
          quote:
            'When the refusal notice arrived it felt like the sky was falling. They managed every detail of the appeal, from preparation to the final outcome — and thanks to them, our whole family could stay in Australia.',
          author: 'Mr. Kim',
          caseType: 'ART Appeal · Visa Refusal',
        },
        {
          stars: 5,
          quote:
            'The employer sponsorship process was so complex I nearly gave up. They told me exactly what was needed at each stage, and we were approved on the first attempt.',
          author: 'Ms. Park',
          caseType: 'Employer Sponsored Visa',
        },
        {
          stars: 5,
          quote:
            'I had no idea how to prepare partner visa documents. They guided me through organising our relationship evidence in detail and kept me updated throughout. I felt safe the whole time.',
          author: 'Ms. Lee',
          caseType: 'Partner Visa',
        },
        {
          stars: 5,
          quote:
            'I asked them to review my commercial lease and they caught a toxic clause I would have missed. Being able to discuss everything comfortably in Korean was a huge plus.',
          author: 'Mr. Choi',
          caseType: 'Contract Review',
        },
        {
          stars: 5,
          quote:
            'For my parents’ estate matter, they explained difficult legal terms in plain language and were transparent about costs from the very first meeting.',
          author: 'Ms. Jung',
          caseType: 'Wills & Estates',
        },
      ],
    },
    ctaBanner: {
      titleLine1: { pre: 'Clear advice, ', em: 'best solutions', post: '.' },
      titleLine2: 'Talk to Joun today.',
      trust: ['Korean & English', 'Strictly Confidential', 'Transparent Fees'],
      button: 'Book a Consultation',
    },
    contact: {
      label: 'Contact',
      title: { pre: 'Visit Us · ', em: 'Book a Consultation' },
      sub: 'Leave the form below and we will get back to you promptly. Phone and SMS enquiries are equally welcome.',
      hours: 'Mon–Fri 9:00 AM – 5:00 PM (by appointment)',
      itemLabels: {
        office: 'Office',
        phone: 'Phone',
        sms: 'SMS Only',
        email: 'Email',
        hours: 'Hours',
      },
      mapTitle: 'Joun Lawyers Office Location',
      form: {
        title: 'Request a Consultation',
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        date: 'Preferred Date & Time',
        field: 'Area of Enquiry',
        fieldPlaceholder: 'Select an area',
        message: 'How Can We Help?',
        messagePlaceholder: 'Briefly describe your situation (e.g. visa type, date of refusal notice).',
        consent: 'I consent to the collection and use of my personal information. It will be used solely for this consultation and destroyed afterwards.',
        submit: 'Submit Request',
        submitting: 'Sending…',
        error: 'Something went wrong while sending your request. Please try again, or contact us by phone or email.',
        successTitle: 'Your request has been received',
        successDesc: 'We will contact you within one business day. Thank you.',
        honeypotLabel: 'Company',
        fields: [
          'Migration — ART Appeal (Refusal · Cancellation)',
          'Migration — Employer Sponsored Visa',
          'Migration — Partner Visa',
          'Migration — Student & Graduate Visa',
          'Legal — Contracts',
          'Legal — Property',
          'Legal — Wills & Estates',
          'Legal — Disputes & Litigation',
          'Other / Not sure',
        ],
      },
    },
    footer: {
      desc: 'Integrated legal and migration services for the Korean community in Australia. Protecting your tomorrow with accurate advice and genuine care.',
      servicesHeading: 'Services',
      serviceLinks: ['ART Appeals', 'Employer Sponsored Visas', 'Partner Visas', 'Contracts · Property · Estates'],
      firmHeading: 'Firm',
      badges: [
        { label: 'Registered Migration Agent', value: SITE.marn, logo: 'mara' },
        { label: `Migration Agents Registration Number ${SITE.marn.replace('MARN ', '')}`, image: 'maraNumber' },
        { label: 'Justice of the Peace', value: SITE.jpNumber, logo: 'jp' },
        { label: 'Legal Practice', value: 'NSW Law Society' },
      ],
      disclaimer:
        'The content of this website is provided for general information only and does not constitute legal advice. Please seek advice on your individual circumstances through a consultation.',
      rights: 'All rights reserved.',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      conduct: 'Code of Conduct',
    },
    legal: {
      closeAria: 'Close',
      updatedLabel: 'Last updated',
      terms: {
        title: 'Terms & Conditions',
        updated: 'August 2026',
        sections: [
          {
            h: '1. About this website',
            ps: [
              `This website is operated by ${'Joun Lawyers (조은법률 조은이민)'} (${'ABN 98 716 989 655'}) ("Joun", "we", "us"). By accessing or using this website you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this website.`,
            ],
          },
          {
            h: '2. General information only — no legal advice',
            ps: [
              'The content of this website is provided for general information purposes only. It does not constitute legal or migration advice and must not be relied upon as such. Australian migration law and legal requirements change frequently, and the application of the law depends on your individual circumstances.',
              'You should obtain advice specific to your situation through a consultation before acting, or refraining from acting, on anything contained on this website.',
            ],
          },
          {
            h: '3. No client relationship',
            ps: [
              'Use of this website, or sending an enquiry through it, does not create a lawyer–client or agent–client relationship between you and Joun. A professional relationship is only established once we have confirmed our engagement in writing (including a costs agreement or service agreement where applicable).',
              'Please do not send us confidential information until an engagement has been confirmed.',
            ],
          },
          {
            h: '4. Accuracy of information',
            ps: [
              'We take reasonable care to keep the information on this website accurate and up to date. However, we make no warranty as to the accuracy, completeness or currency of any content. All information is correct at the time of publication and is subject to change without notice.',
            ],
          },
          {
            h: '5. Limitation of liability',
            ps: [
              'To the maximum extent permitted by law (including the Australian Consumer Law), Joun excludes all liability for any loss or damage, however caused, arising from your use of, or reliance on, this website or its content. Nothing in these terms excludes rights that cannot lawfully be excluded.',
            ],
          },
          {
            h: '6. Intellectual property',
            ps: [
              'All content on this website — including text, logos, graphics and layout — is owned by or licensed to Joun and is protected by copyright. You may view and print content for personal, non-commercial use only. Any other reproduction or distribution requires our prior written consent.',
            ],
          },
          {
            h: '7. Third-party links',
            ps: [
              'This website may contain links to external websites (such as the Department of Home Affairs). These links are provided for convenience only; we do not endorse and are not responsible for the content of external sites.',
            ],
          },
          {
            h: '8. Governing law',
            ps: [
              'These Terms & Conditions are governed by the laws of New South Wales, Australia. Any dispute arising in connection with this website is subject to the exclusive jurisdiction of the courts of New South Wales.',
            ],
          },
        ],
      },
      privacy: {
        title: 'Privacy Policy',
        updated: 'August 2026',
        sections: [
          {
            h: '1. Our commitment',
            ps: [
              `Joun Lawyers (조은법률 조은이민) (${'ABN 98 716 989 655'}) is committed to protecting your personal information. We manage personal information in accordance with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth).`,
            ],
          },
          {
            h: '2. What we collect and why',
            ps: [
              'Personal information is information that identifies you, such as your name, address, email address, phone number, date of birth, visa and immigration history, and employment details.',
              'We collect this information so we can provide legal and migration services, respond to your enquiries, prepare and lodge applications on your behalf, and communicate with you about your matter. Information is collected through consultations, our website enquiry form, email, telephone and correspondence.',
            ],
          },
          {
            h: '3. Sensitive information',
            ps: [
              'In migration and legal matters we may need to collect sensitive information, such as health information, criminal record history, or relationship details. Sensitive information is used only for the purpose for which it was collected, for directly related purposes, or otherwise with your consent or as required or permitted by law.',
            ],
          },
          {
            h: '4. Disclosure of personal information',
            ps: [
              'We may disclose your personal information, where necessary for your matter, to: the Department of Home Affairs and other government agencies; courts and tribunals (including the Administrative Review Tribunal); assessing authorities; interpreters and translators; barristers and other professionals engaged on your behalf; and other parties with your consent or where required by law.',
              'We do not sell your personal information to third parties.',
            ],
          },
          {
            h: '5. Storage and security',
            ps: [
              'Your personal information is stored in a manner that reasonably protects it from misuse, loss, unauthorised access and disclosure. Client files are retained for at least seven (7) years as required by our professional obligations, after which they may be securely destroyed or de-identified.',
            ],
          },
          {
            h: '6. Website data and enquiry form',
            ps: [
              'Information submitted through our consultation form is used solely to respond to your enquiry and arrange a consultation, and is transmitted to our office email. We do not use your enquiry details for marketing without your consent.',
            ],
          },
          {
            h: '7. Access and correction',
            ps: [
              'You may request access to the personal information we hold about you, and ask us to correct information that is inaccurate or out of date. Please contact us in writing at info@jounlawyer.com. We may charge a reasonable administrative fee for providing copies of documents.',
            ],
          },
          {
            h: '8. Complaints',
            ps: [
              'If you have a concern about how we have handled your personal information, please contact us first and we will respond promptly. If you are not satisfied with our response, you may complain to the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.',
            ],
          },
          {
            h: '9. Changes to this policy',
            ps: [
              'We may update this Privacy Policy from time to time. The current version will always be available on this website.',
            ],
          },
        ],
      },
      conduct: {
        title: 'Code of Conduct',
        updated: 'August 2026',
        sections: [
          {
            h: '1. Our professional obligations',
            ps: [
              'Joun Lawyers (조은법률 조은이민) provides migration assistance through a Registered Migration Agent (MARN 0741800) and legal services in accordance with the professional standards applicable in New South Wales.',
            ],
          },
          {
            h: '2. Migration Agents Code of Conduct',
            ps: [
              'As a Registered Migration Agent, we are bound by the Migration (Migration Agents Code of Conduct) Regulations 2021, made under the Migration Act 1958 (Cth). The Code is administered by the Office of the Migration Agents Registration Authority (OMARA).',
              'The Code requires us, among other things, to: act legally, honestly, competently and diligently in your best interests; be transparent about fees and provide a written agreement before charging; give you accurate, timely advice about your prospects and never guarantee an outcome we cannot control; keep your information confidential; keep proper records and hold client money appropriately; and avoid conflicts of interest.',
            ],
          },
          {
            h: '3. Legal practice standards',
            ps: [
              'Legal services are provided in accordance with the Legal Profession Uniform Law (NSW) and the Legal Profession Uniform Australian Solicitors’ Conduct Rules, which impose duties of honesty, competence, confidentiality and loyalty to the client, as well as duties to the court and the administration of justice.',
            ],
          },
          {
            h: '4. Fees and consumer information',
            ps: [
              'Before we commence work, we will explain the scope of the services, provide an estimate of fees and disbursements, and enter into a written costs/service agreement with you. You are entitled to an itemised statement of services.',
              'Consumers of migration assistance can read the official Code of Conduct and consumer guide on the OMARA website at www.mara.gov.au.',
            ],
          },
          {
            h: '5. Complaints',
            ps: [
              'If you are dissatisfied with our services, please raise it with us first — we take every concern seriously and will respond promptly. You may also lodge a complaint about a registered migration agent with OMARA (www.mara.gov.au) or, for legal services, with the NSW Office of the Legal Services Commissioner (www.olsc.nsw.gov.au).',
            ],
          },
        ],
      },
    },
    floating: {
      callAria: 'Call us',
      smsAria: 'Send us an SMS',
    },
  },

  // ----------------------------------------------------------
  // 한국어
  // ----------------------------------------------------------
  ko: {
    brand: {
      main: '조은법률 조은이민',
      sub: 'JOUN VISA',
    },
    nav: [
      { id: 'about', label: '인사말' },
      { id: 'services', label: '서비스 분야' },
      { id: 'why-joun', label: '조은의 약속' },
      { id: 'testimonials', label: '고객 후기' },
      { id: 'contact', label: '오시는 길' },
    ],
    ctaShort: '상담 예약',
    cta: '상담 예약',
    hero: {
      line1: '당신의 호주 정착,',
      line2: { pre: '', em: '조은', post: '이 함께합니다' },
      desc: '법률과 이민을 한 곳에서 — 비자 재심부터 계약·부동산·상속까지, 한인 커뮤니티를 위한 원스톱 법률 파트너입니다.',
      ctaPrimary: '상담 예약하기',
      ctaSecondary: '서비스 살펴보기',
    },
    about: {
      label: '인사말 — Greeting',
      title: '고객의 일을 나의 일처럼',
      bio: '조은법률 조은이민은 호주 한인 커뮤니티와 함께 성장해 온 법률·이민 전문 사무소입니다. 복잡한 비자 문제와 법률 분쟁 앞에서 막막함을 느끼는 분들께, 정확한 진단과 현실적인 해법을 정중하게 제시합니다.',
      badgeLabel: 'Registered',
      portraitNote: 'Principal Portrait',
      values: [
        {
          title: '정확한 리스크 진단',
          desc: '사안의 성공 가능성과 위험 요소를 처음부터 투명하게 안내합니다.',
        },
        {
          title: '고객의 일을 나의 일처럼',
          desc: '한 건 한 건, 내 가족의 일이라는 마음으로 준비합니다.',
        },
        {
          title: '끝까지 책임지는 정성',
          desc: '접수부터 결과 통보까지, 진행 상황을 빠짐없이 공유합니다.',
        },
      ],
    },
    services: {
      label: '서비스 분야 — Practice Areas',
      title: { pre: '이민과 법률, ', em: '한 곳에서' },
      sub: '비자 문제와 법률 문제는 따로 오지 않습니다. 조은은 두 분야를 함께 다루는 통합 솔루션을 제공합니다.',
      linkLabel: '자세히 상담하기',
      groups: {
        migration: { title: '조은이민', tag: 'Migration' },
        legal: { title: '조은법률', tag: 'Legal' },
      },
      migration: [
        {
          icon: '⚖️',
          title: 'ART 재심 (비자 거절·취소)',
          sub: 'ART Appeals',
          desc: '비자 거절·취소 통보를 받으셨나요? 기한 내 재심 청구로 기회를 되찾을 수 있습니다.',
        },
        {
          icon: '🏢',
          title: '고용주 후원 비자',
          sub: 'SC 482 · 186',
          desc: '직원 스폰서십이 필요한 기업과 취업 비자를 준비하는 분을 위한 맞춤 전략.',
        },
        {
          icon: '💍',
          title: '파트너 비자',
          sub: 'SC 820 · 801 · 309 · 100',
          desc: '배우자·사실혼 관계 입증부터 서류 준비까지 꼼꼼하게 동행합니다.',
        },
        {
          icon: '🎓',
          title: '학생·졸업생 비자',
          sub: 'SC 500 · 485',
          desc: '유학 계획과 졸업 후 진로에 맞춘 비자 로드맵을 설계합니다.',
        },
      ],
      legal: [
        {
          icon: '📄',
          title: '계약 검토·작성',
          sub: 'Contracts',
          desc: '사업·고용·임대 계약의 위험 조항을 사전에 점검해 분쟁을 예방합니다.',
        },
        {
          icon: '🏠',
          title: '부동산 거래',
          sub: 'Conveyancing',
          desc: '호주 부동산 매매 절차를 한국어로 안전하게 진행합니다.',
        },
        {
          icon: '📜',
          title: '유언·상속',
          sub: 'Wills & Estates',
          desc: '유언장 작성과 상속 절차를 통해 가족의 미래를 준비합니다.',
        },
        {
          icon: '🤝',
          title: '분쟁 해결·소송',
          sub: 'Dispute Resolution',
          desc: '협상에서 소송까지, 고객의 이익을 최우선으로 대응합니다.',
        },
      ],
    },
    stats: {
      label: '조은의 약속 — Why Joun',
      title: { pre: '숫자로 증명하는 ', em: '조은의 정성' },
      items: [
        { value: 15, suffix: '+', label: 'Years of Experience', desc: '법률·이민 실무 경력' },
        { value: 97, suffix: '%', label: 'Success Rate', desc: '주요 비자 승인율' },
        { value: 2400, suffix: '+', label: 'Cases Resolved', desc: '누적 처리 사례' },
      ],
    },
    testimonials: {
      label: '고객 후기 — Testimonials',
      title: { pre: '고객이 전하는 ', em: '조은의 정성' },
      prevAria: '이전 후기',
      nextAria: '다음 후기',
      dotAria: (n) => `${n}번째 후기 보기`,
      starsAria: (n) => `별점 ${n}점`,
      items: [
        {
          stars: 5,
          quote:
            '비자 거절 통보를 받고 하늘이 무너지는 것 같았는데, 재심 준비부터 결과까지 정말 꼼꼼하게 챙겨주셨습니다. 덕분에 가족 모두 호주에 남을 수 있게 되었어요.',
          author: '김O수 님',
          caseType: 'ART 재심 · 비자 거절',
        },
        {
          stars: 5,
          quote:
            '고용주 스폰서 비자 절차가 너무 복잡해서 포기할 뻔했는데, 단계마다 필요한 것을 미리 알려주셔서 한 번에 승인받았습니다.',
          author: '박O진 님',
          caseType: '고용주 후원 비자',
        },
        {
          stars: 5,
          quote:
            '파트너 비자 서류 준비가 막막했는데 관계 입증 자료를 어떻게 정리해야 하는지 세세하게 안내해 주셨습니다. 진행 상황도 계속 공유해 주셔서 안심됐어요.',
          author: '이O영 님',
          caseType: '파트너 비자',
        },
        {
          stars: 5,
          quote:
            '사업장 임대 계약 검토를 맡겼는데, 놓칠 뻔한 독소 조항을 잡아주셨습니다. 한국어로 편하게 상담할 수 있어서 좋았습니다.',
          author: '최O원 님',
          caseType: '계약 검토',
        },
        {
          stars: 5,
          quote:
            '부모님 상속 문제로 상담드렸는데, 어려운 법률 용어를 쉽게 풀어 설명해 주시고 비용도 처음에 투명하게 안내해 주셨습니다.',
          author: '정O희 님',
          caseType: '유언·상속',
        },
      ],
    },
    ctaBanner: {
      titleLine1: { pre: '명쾌한 상담, ', em: '최선의 솔루션', post: '.' },
      titleLine2: '지금 조은과 상의하세요.',
      trust: ['한국어 상담', '비밀 보장', '투명한 비용 안내'],
      button: '상담 예약하기',
    },
    contact: {
      label: '상담 예약 — Contact',
      title: { pre: '오시는 길 · ', em: '상담 예약' },
      sub: '아래 폼을 남겨주시면 확인 후 빠르게 연락드리겠습니다. 전화·문자로도 편하게 문의하세요.',
      hours: '월–금 9:00 AM – 5:00 PM (예약 상담)',
      itemLabels: {
        office: 'Office',
        phone: 'Phone',
        sms: 'SMS Only',
        email: 'Email',
        hours: 'Hours',
      },
      mapTitle: '조은법률 조은이민 오시는 길',
      form: {
        title: '상담 예약 신청',
        name: '이름',
        phone: '연락처 (전화)',
        email: '이메일',
        date: '희망 상담 일시',
        field: '상담 분야',
        fieldPlaceholder: '분야를 선택해주세요',
        message: '상담 내용',
        messagePlaceholder: '현재 상황을 간단히 알려주세요. (예: 비자 종류, 거절 통보 수령일 등)',
        consent: '개인정보 수집·이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며, 상담 종료 후 파기됩니다.',
        submit: '상담 신청하기',
        submitting: '전송 중…',
        error: '전송 중 문제가 발생했습니다. 잠시 후 다시 시도하시거나 전화·이메일로 문의해 주세요.',
        successTitle: '상담 신청이 접수되었습니다',
        successDesc: '영업일 기준 1일 이내에 연락드리겠습니다. 감사합니다.',
        honeypotLabel: '회사명',
        fields: [
          '이민 — ART 재심 (거절·취소)',
          '이민 — 고용주 후원 비자',
          '이민 — 파트너 비자',
          '이민 — 학생·졸업생 비자',
          '법률 — 계약',
          '법률 — 부동산',
          '법률 — 유언·상속',
          '법률 — 분쟁·소송',
          '기타 / 잘 모르겠어요',
        ],
      },
    },
    footer: {
      desc: '호주 한인 커뮤니티를 위한 법률·이민 통합 서비스. 정확한 진단과 정성 어린 대응으로 고객의 내일을 지킵니다.',
      servicesHeading: 'Services',
      serviceLinks: ['ART 재심', '고용주 후원 비자', '파트너 비자', '계약 · 부동산 · 상속'],
      firmHeading: 'Firm',
      badges: [
        { label: 'Registered Migration Agent', value: SITE.marn, logo: 'mara' },
        { label: `Migration Agents Registration Number ${SITE.marn.replace('MARN ', '')}`, image: 'maraNumber' },
        { label: 'Justice of the Peace', value: SITE.jpNumber, logo: 'jp' },
        { label: 'Legal Practice', value: 'NSW Law Society' },
      ],
      disclaimer:
        '본 웹사이트의 내용은 일반적인 정보 제공을 목적으로 하며, 법률 자문으로 간주되지 않습니다. 개별 사안에 대한 자문은 반드시 상담을 통해 받으시기 바랍니다.',
      rights: 'All rights reserved.',
      terms: '이용약관',
      privacy: '개인정보처리방침',
      conduct: '전문가 행동강령',
    },
    legal: {
      closeAria: '닫기',
      updatedLabel: '최종 수정일',
      terms: {
        title: '이용약관 (Terms & Conditions)',
        updated: '2026년 8월',
        sections: [
          {
            h: '1. 웹사이트 소개',
            ps: [
              '본 웹사이트는 조은법률 조은이민 (Joun Lawyers, ABN 98 716 989 655, 이하 "조은")이 운영합니다. 본 웹사이트에 접속하거나 이용함으로써 귀하는 본 이용약관에 동의하는 것으로 간주됩니다. 동의하지 않으시는 경우 웹사이트 이용을 중단해 주시기 바랍니다.',
            ],
          },
          {
            h: '2. 일반 정보 제공 — 법률 자문 아님',
            ps: [
              '본 웹사이트의 모든 내용은 일반적인 정보 제공만을 목적으로 하며, 법률 자문 또는 이민 자문에 해당하지 않습니다. 호주 이민법과 법률 요건은 수시로 변경되며, 법의 적용은 개별 사안의 구체적인 사정에 따라 달라집니다.',
              '본 웹사이트의 내용에 근거하여 어떠한 행동을 하시기 전에, 반드시 상담을 통해 귀하의 상황에 맞는 자문을 받으시기 바랍니다.',
            ],
          },
          {
            h: '3. 의뢰 관계의 성립',
            ps: [
              '본 웹사이트의 이용 또는 웹사이트를 통한 문의만으로는 조은과 귀하 사이에 변호사–의뢰인 또는 이민법무사–의뢰인 관계가 성립하지 않습니다. 전문 서비스 관계는 비용 약정서(costs agreement) 또는 서비스 계약서 등 서면으로 수임이 확정된 시점에 성립합니다.',
              '수임이 확정되기 전에는 기밀 정보를 보내지 마시기 바랍니다.',
            ],
          },
          {
            h: '4. 정보의 정확성',
            ps: [
              '조은은 웹사이트 정보의 정확성과 최신성을 유지하기 위해 합리적인 주의를 기울입니다. 다만 모든 콘텐츠의 정확성·완전성·최신성에 대해 어떠한 보증도 하지 않으며, 모든 정보는 게시 시점 기준이고 사전 고지 없이 변경될 수 있습니다.',
            ],
          },
          {
            h: '5. 책임의 제한',
            ps: [
              '법률(호주 소비자법 포함)이 허용하는 최대 범위 내에서, 조은은 본 웹사이트 또는 그 콘텐츠의 이용·신뢰로 인해 발생하는 모든 손실이나 손해에 대한 책임을 배제합니다. 다만 법률상 배제할 수 없는 권리는 본 약관의 영향을 받지 않습니다.',
            ],
          },
          {
            h: '6. 지식재산권',
            ps: [
              '본 웹사이트의 모든 콘텐츠(텍스트, 로고, 그래픽, 레이아웃 등)는 조은이 소유하거나 사용을 허가받은 것으로 저작권법의 보호를 받습니다. 개인적·비상업적 용도의 열람과 출력만 허용되며, 그 밖의 복제·배포는 조은의 사전 서면 동의가 필요합니다.',
            ],
          },
          {
            h: '7. 외부 링크',
            ps: [
              '본 웹사이트에는 호주 내무부(Department of Home Affairs) 등 외부 웹사이트로 연결되는 링크가 포함될 수 있습니다. 이러한 링크는 편의를 위해 제공될 뿐이며, 조은은 외부 사이트의 내용을 보증하거나 이에 대해 책임지지 않습니다.',
            ],
          },
          {
            h: '8. 준거법',
            ps: [
              '본 이용약관은 호주 뉴사우스웨일스(NSW)주 법률의 적용을 받으며, 본 웹사이트와 관련하여 발생하는 분쟁은 NSW 법원의 전속 관할에 속합니다.',
            ],
          },
        ],
      },
      privacy: {
        title: '개인정보처리방침 (Privacy Policy)',
        updated: '2026년 8월',
        sections: [
          {
            h: '1. 개인정보 보호 원칙',
            ps: [
              '조은법률 조은이민 (Joun Lawyers, ABN 98 716 989 655)은 고객의 개인정보 보호를 최우선으로 합니다. 조은은 호주 개인정보보호법(Privacy Act 1988 (Cth))의 호주 개인정보보호원칙(Australian Privacy Principles, APPs)에 따라 개인정보를 관리합니다.',
            ],
          },
          {
            h: '2. 수집하는 정보와 수집 목적',
            ps: [
              '개인정보란 이름, 주소, 이메일, 전화번호, 생년월일, 비자·이민 이력, 고용 정보 등 개인을 식별할 수 있는 정보를 말합니다.',
              '조은은 법률·이민 서비스 제공, 문의 응대, 비자 신청서 등 서류의 준비·접수, 사건 진행 상황 안내를 위해 개인정보를 수집합니다. 정보는 상담, 웹사이트 문의 폼, 이메일, 전화, 서신 등을 통해 수집됩니다.',
            ],
          },
          {
            h: '3. 민감정보',
            ps: [
              '이민·법률 사건의 특성상 건강 정보, 범죄 경력, 가족·혼인 관계 등 민감정보의 수집이 필요할 수 있습니다. 민감정보는 수집 목적 및 이와 직접 관련된 목적으로만 사용되며, 그 외의 경우 귀하의 동의가 있거나 법률상 요구·허용되는 경우에만 사용됩니다.',
            ],
          },
          {
            h: '4. 개인정보의 제공',
            ps: [
              '사건 수행에 필요한 범위 내에서 다음의 대상에게 개인정보가 제공될 수 있습니다: 호주 내무부 및 기타 정부 기관, 법원·심판원(행정재심심판원 ART 포함), 기술심사기관, 통·번역사, 사건을 위해 선임된 배리스터 등 전문가, 그리고 귀하가 동의하였거나 법률상 요구되는 기타 대상.',
              '조은은 고객의 개인정보를 제3자에게 판매하지 않습니다.',
            ],
          },
          {
            h: '5. 보관 및 보안',
            ps: [
              '개인정보는 오·남용, 분실, 무단 접근 및 유출로부터 합리적으로 보호되는 방식으로 보관됩니다. 고객 파일은 전문가 의무에 따라 최소 7년간 보관되며, 이후 안전하게 파기되거나 비식별 처리될 수 있습니다.',
            ],
          },
          {
            h: '6. 웹사이트 문의 폼',
            ps: [
              '상담 신청 폼으로 제출된 정보는 문의 응대와 상담 일정 조율 목적으로만 사용되며 사무실 이메일로 전송됩니다. 귀하의 동의 없이 문의 정보를 마케팅에 사용하지 않습니다.',
            ],
          },
          {
            h: '7. 열람 및 정정',
            ps: [
              '귀하는 조은이 보유한 본인의 개인정보에 대한 열람을 요청하거나, 부정확하거나 오래된 정보의 정정을 요청할 수 있습니다. 요청은 info@jounlawyer.com으로 서면으로 해주시기 바랍니다. 사본 제공 시 합리적인 행정 비용이 청구될 수 있습니다.',
            ],
          },
          {
            h: '8. 불만 처리',
            ps: [
              '개인정보 처리에 관한 우려가 있으시면 먼저 조은으로 연락해 주십시오. 신속히 답변드리겠습니다. 답변에 만족하지 못하시는 경우 호주 정보보호위원회(OAIC, www.oaic.gov.au)에 불만을 제기하실 수 있습니다.',
            ],
          },
          {
            h: '9. 방침의 변경',
            ps: [
              '본 개인정보처리방침은 수시로 개정될 수 있으며, 최신 버전은 항상 본 웹사이트에 게시됩니다.',
            ],
          },
        ],
      },
      conduct: {
        title: '전문가 행동강령 (Code of Conduct)',
        updated: '2026년 8월',
        sections: [
          {
            h: '1. 전문가 의무',
            ps: [
              '조은법률 조은이민 (Joun Lawyers)은 공인 이민법무사(Registered Migration Agent, MARN 0741800)를 통해 이민 서비스를, NSW주의 전문가 기준에 따라 법률 서비스를 제공합니다.',
            ],
          },
          {
            h: '2. 이민법무사 행동강령 (Migration Agents Code of Conduct)',
            ps: [
              '공인 이민법무사로서 조은은 호주 이민법(Migration Act 1958 (Cth))에 근거한 Migration (Migration Agents Code of Conduct) Regulations 2021의 적용을 받습니다. 본 행동강령은 이민법무사 등록청(OMARA)이 관리합니다.',
              '행동강령에 따라 조은은 고객의 최선의 이익을 위해 적법·정직·성실하게 업무를 수행하고, 비용을 투명하게 안내하며 업무 착수 전 서면 계약을 체결하고, 승인 가능성에 대해 정확하고 시의적절한 조언을 제공하며 결과를 보장하는 표현을 하지 않고, 고객 정보의 기밀을 유지하며, 기록과 고객 자금을 적절히 관리하고, 이해충돌을 회피할 의무가 있습니다.',
            ],
          },
          {
            h: '3. 법률 서비스 기준',
            ps: [
              '법률 서비스는 Legal Profession Uniform Law (NSW) 및 호주 변호사 행동규칙(Legal Profession Uniform Australian Solicitors’ Conduct Rules)에 따라 제공됩니다. 이는 정직·전문성·기밀 유지·의뢰인에 대한 충실 의무와 함께, 법원과 사법 행정에 대한 의무를 포함합니다.',
            ],
          },
          {
            h: '4. 비용 안내 및 소비자 정보',
            ps: [
              '업무 착수 전에 서비스 범위와 예상 비용(수수료 및 실비)을 안내하고 서면 비용 약정서/서비스 계약서를 체결합니다. 고객은 서비스 내역서를 요청할 권리가 있습니다.',
              '이민 서비스 이용자는 OMARA 웹사이트(www.mara.gov.au)에서 공식 행동강령 및 소비자 가이드를 확인하실 수 있습니다.',
            ],
          },
          {
            h: '5. 불만 처리',
            ps: [
              '서비스에 불만이 있으시면 먼저 조은으로 알려주시기 바랍니다. 모든 의견을 진지하게 검토하고 신속히 답변드리겠습니다. 또한 이민법무사에 대한 불만은 OMARA(www.mara.gov.au)에, 법률 서비스에 대한 불만은 NSW 법률서비스위원회(OLSC, www.olsc.nsw.gov.au)에 제기하실 수 있습니다.',
            ],
          },
        ],
      },
    },
    floating: {
      callAria: '전화 걸기',
      smsAria: '문자 보내기',
    },
  },
}
