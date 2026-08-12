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
      main: 'Joun Lawyers',
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
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
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
      sub: 'JOUN LAWYERS',
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
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
    },
    floating: {
      callAria: '전화 걸기',
      smsAria: '문자 보내기',
    },
  },
}
