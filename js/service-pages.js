(function () {
    'use strict';

    var pages = {
        website: {
            number: '01',
            name: 'Website development',
            eyebrow: 'Build my website',
            title: 'Build a website<br>that works for<br><em>your business.</em>',
            intro: 'A website should do more than look good. It should help people understand what you do, trust your business and know what to do next.',
            visualLabel: 'A business website, from first impression to mobile view',
            visual: '<svg viewBox="0 0 800 540" role="img" aria-labelledby="website-title website-desc"><title id="website-title">A responsive business website taking shape</title><desc id="website-desc">A desktop website layout with a clear headline, services and contact button, alongside its mobile version.</desc><defs><linearGradient id="webGlow" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#b7ee4b" stop-opacity=".22"/><stop offset="1" stop-color="#b7ee4b" stop-opacity="0"/></linearGradient></defs><path d="M68 423H735" stroke="#ffffff" stroke-opacity=".14"/><circle cx="594" cy="178" r="174" fill="url(#webGlow)"/><g transform="rotate(-2 345 255)"><rect x="72" y="72" width="505" height="333" rx="8" fill="#111b2a" stroke="#ffffff" stroke-opacity=".35"/><path d="M72 111h505" stroke="#ffffff" stroke-opacity=".2"/><circle cx="94" cy="92" r="4" fill="#b7ee4b"/><circle cx="109" cy="92" r="4" fill="#ffffff" fill-opacity=".32"/><circle cx="124" cy="92" r="4" fill="#ffffff" fill-opacity=".32"/><rect x="158" y="86" width="284" height="12" rx="6" fill="#ffffff" fill-opacity=".07"/><rect x="457" y="86" width="76" height="12" rx="6" fill="#b7ee4b"/><text x="103" y="149" fill="#b7ee4b" font-size="10" letter-spacing="2">YOUR BUSINESS, CLEARLY</text><text x="103" y="190" fill="#f8f8f5" font-family="Arial,sans-serif" font-size="30" font-weight="700">A better first</text><text x="103" y="225" fill="#f8f8f5" font-family="Arial,sans-serif" font-size="30" font-weight="700">impression.</text><rect x="103" y="243" width="211" height="5" rx="3" fill="#f8f8f5" fill-opacity=".36"/><rect x="103" y="256" width="184" height="5" rx="3" fill="#f8f8f5" fill-opacity=".2"/><rect x="103" y="280" width="102" height="28" rx="14" fill="#b7ee4b"/><text x="117" y="298" fill="#101828" font-size="9" font-weight="700">GET IN TOUCH ↗</text><rect x="350" y="139" width="195" height="167" rx="5" fill="#202c3b"/><rect x="363" y="151" width="169" height="94" rx="3" fill="#d6ddcc"/><path d="M363 220l45-43 34 28 28-34 62 74H363z" fill="#75876c"/><circle cx="497" cy="174" r="11" fill="#b7ee4b"/><rect x="363" y="258" width="103" height="6" rx="3" fill="#ffffff" fill-opacity=".7"/><rect x="363" y="271" width="144" height="5" rx="3" fill="#ffffff" fill-opacity=".2"/><rect x="103" y="331" width="138" height="43" rx="3" fill="#ffffff" fill-opacity=".06"/><rect x="253" y="331" width="138" height="43" rx="3" fill="#ffffff" fill-opacity=".06"/><rect x="403" y="331" width="142" height="43" rx="3" fill="#ffffff" fill-opacity=".06"/><rect x="115" y="343" width="58" height="5" rx="3" fill="#b7ee4b"/><rect x="115" y="355" width="98" height="4" rx="2" fill="#ffffff" fill-opacity=".28"/><rect x="265" y="343" width="58" height="5" rx="3" fill="#b7ee4b"/><rect x="265" y="355" width="98" height="4" rx="2" fill="#ffffff" fill-opacity=".28"/><rect x="415" y="343" width="58" height="5" rx="3" fill="#b7ee4b"/><rect x="415" y="355" width="98" height="4" rx="2" fill="#ffffff" fill-opacity=".28"/></g><g transform="rotate(5 653 316)"><rect x="596" y="190" width="134" height="246" rx="21" fill="#101828" stroke="#f8f8f5" stroke-opacity=".72" stroke-width="2"/><rect x="605" y="213" width="116" height="203" rx="12" fill="#f8f8f5"/><rect x="616" y="230" width="60" height="5" rx="2" fill="#101828"/><rect x="616" y="242" width="48" height="4" rx="2" fill="#101828" fill-opacity=".25"/><rect x="616" y="260" width="94" height="57" rx="4" fill="#d6ddcc"/><path d="M616 301l30-27 18 16 15-18 31 45h-94z" fill="#75876c"/><rect x="616" y="329" width="78" height="5" rx="2" fill="#101828"/><rect x="616" y="341" width="91" height="4" rx="2" fill="#101828" fill-opacity=".2"/><rect x="616" y="363" width="94" height="22" rx="11" fill="#b7ee4b"/><rect x="637" y="200" width="51" height="5" rx="2.5" fill="#ffffff" fill-opacity=".35"/></g><text x="75" y="466" fill="#b7ee4b" font-size="10" letter-spacing="2">DESKTOP</text><text x="602" y="466" fill="#b7ee4b" font-size="10" letter-spacing="2">MOBILE</text></svg>',
            challengeTitle: 'Your website should reflect the quality of your business.',
            challenge: 'If people cannot quickly tell what you do, why you are right for them or how to reach you, they may leave before you get the chance to help.',
            problems: ['Looks out of date', 'Hard to use on a phone', 'Takes too long to load', 'Leaves people unsure what to do', 'Does not feel like your business'],
            capabilitiesTitle: 'A clear, complete website.',
            capabilities: [['Useful design', 'A look and layout that make sense for your business.'], ['Clear structure', 'Pages and messages that help visitors find what they need.'], ['Made for every screen', 'A comfortable experience on phones, tablets and computers.'], ['Built to work well', 'A sound technical base, tested for speed and usability.'], ['Pages that guide action', 'Service and campaign landing pages that make the next step easy to find.'], ['Room to grow', 'A foundation you can build on as your business changes.']],
            approachTitle: 'From first conversation to a live website.',
            steps: ['Understand', 'Plan', 'Design', 'Build', 'Test', 'Launch', 'Improve'],
            closeTitle: 'Make your website a better first impression.',
            related: ['seo', 'brand', 'social', 'growth'],
            relatedTitle: 'The right next pieces for your website.'
        },
        brand: {
            number: '02',
            name: 'Branding and design',
            eyebrow: 'Make my brand look professional',
            title: 'Make your business<br>look as good as<br><em>the work you do.</em>',
            intro: 'People often form an opinion about a business before they speak to it. A clear, consistent look helps make that first impression count.',
            visualLabel: 'A visual identity system, from type and colour to everyday creative',
            visual: '<svg viewBox="0 0 800 540" role="img" aria-labelledby="brand-title brand-desc"><title id="brand-title">Brand identity pieces coming together</title><desc id="brand-desc">A visual identity board showing a wordmark, type styles, a colour palette and a social graphic working as one system.</desc><rect x="67" y="58" width="666" height="408" rx="4" fill="#f0efe8"/><path d="M67 254h666M393 58v408" stroke="#101828" stroke-opacity=".13"/><text x="96" y="94" fill="#667085" font-size="9" letter-spacing="2">01 / WORDMARK</text><text x="96" y="174" fill="#101828" font-family="Arial,sans-serif" font-size="49" font-weight="700" letter-spacing="-4">YOUR</text><text x="96" y="217" fill="#101828" font-family="Arial,sans-serif" font-size="49" font-weight="700" letter-spacing="-4">BRAND.</text><text x="96" y="239" fill="#667085" font-size="9" letter-spacing="2">A CLEAR NAME. A STRONG FIRST IMPRESSION.</text><text x="420" y="94" fill="#667085" font-size="9" letter-spacing="2">02 / TYPE &amp; COLOUR</text><text x="420" y="142" fill="#101828" font-family="Georgia,serif" font-size="29">Say it clearly.</text><text x="420" y="164" fill="#667085" font-size="10">A distinct voice across every touchpoint.</text><rect x="420" y="188" width="61" height="31" rx="2" fill="#101828"/><rect x="489" y="188" width="61" height="31" rx="2" fill="#b7ee4b"/><rect x="558" y="188" width="61" height="31" rx="2" fill="#d8d4c9"/><rect x="627" y="188" width="61" height="31" rx="2" fill="#778697"/><text x="96" y="286" fill="#667085" font-size="9" letter-spacing="2">03 / EVERYDAY CREATIVE</text><rect x="96" y="305" width="260" height="128" rx="2" fill="#b7ee4b"/><path d="M118 405l68-80 50 49 35-35 62 64H118z" fill="#738768"/><circle cx="308" cy="334" r="13" fill="#f0efe8"/><text x="420" y="328" fill="#101828" font-family="Arial,sans-serif" font-size="25" font-weight="700">MADE TO</text><text x="420" y="359" fill="#101828" font-family="Arial,sans-serif" font-size="25" font-weight="700">BE REMEMBERED.</text><rect x="420" y="383" width="175" height="5" rx="2" fill="#101828" fill-opacity=".3"/><rect x="420" y="397" width="132" height="5" rx="2" fill="#101828" fill-opacity=".2"/><rect x="420" y="417" width="89" height="22" rx="11" fill="#101828"/><text x="434" y="432" fill="#f8f8f5" font-size="8" letter-spacing="1">SOCIAL CREATIVE</text><text x="96" y="493" fill="#f8f8f5" font-size="10" letter-spacing="2">ONE IDENTITY · USED WITH CARE</text></svg>',
            challengeTitle: 'Good work deserves a clear, consistent identity.',
            challenge: 'A different look on every page or post can make a capable business harder to recognise and trust. A brand system gives your communications a common thread.',
            problems: ['People do not remember the name', 'Your visuals feel different everywhere', 'The business looks less established than it is', 'Creative is hard to make consistently'],
            capabilitiesTitle: 'A visual identity people can recognise.',
            capabilities: [['Brand identity', 'A clear visual direction for how your business presents itself.'], ['Logo and type', 'A considered name mark and typography used consistently.'], ['Colour and layout', 'A practical visual system for everyday communication.'], ['Graphic and campaign design', 'Clear creative for digital communication and campaigns.'], ['Social creative', 'A consistent look for posts and other social content.'], ['Brand guidance', 'Simple rules that help keep future work on-brand.']],
            approachTitle: 'Make the look consistent, from the start.',
            steps: ['Understand', 'Set direction', 'Build the identity', 'Create assets', 'Apply consistently'],
            closeTitle: 'Help people see the quality behind your business.',
            related: ['website', 'social', 'marketing', 'growth'],
            relatedTitle: 'Let your brand work across more places.'
        },
        seo: {
            number: '03',
            name: 'SEO and search visibility',
            eyebrow: 'Get found online',
            title: 'If people are<br>searching for you,<br>they should be able<br><em>to find you.</em>',
            intro: 'We help businesses become easier to discover on Google and the places their customers search—with a sound website, useful content and clear local information.',
            visualLabel: 'A search query finding a useful, clear business result',
            visual: '<svg viewBox="0 0 800 540" role="img" aria-labelledby="seo-title seo-desc"><title id="seo-title">A customer search leading to a business</title><desc id="seo-desc">A search bar connects a local service query to clearly presented business results and local listing information.</desc><circle cx="474" cy="270" r="218" fill="#b7ee4b" fill-opacity=".06"/><rect x="65" y="81" width="670" height="56" rx="28" fill="#f8f8f5"/><circle cx="95" cy="109" r="8" fill="none" stroke="#667085" stroke-width="2"/><path d="m101 115 7 7" stroke="#667085" stroke-width="2"/><text x="124" y="114" fill="#101828" font-size="14">a service people need near them</text><path d="M400 137v38" stroke="#b7ee4b" stroke-width="2"/><circle cx="400" cy="175" r="4" fill="#b7ee4b"/><rect x="94" y="193" width="424" height="88" rx="5" fill="#f8f8f5"/><text x="116" y="218" fill="#667085" font-size="9" letter-spacing="1">A USEFUL RESULT</text><text x="116" y="243" fill="#355fbd" font-size="18" font-family="Arial,sans-serif">Your business | Service near you</text><text x="116" y="262" fill="#526143" font-size="10">Business profile › Services</text><text x="116" y="276" fill="#667085" font-size="10">A clear explanation of what you do and how to reach you.</text><rect x="94" y="292" width="424" height="63" rx="5" fill="#ffffff" fill-opacity=".05" stroke="#ffffff" stroke-opacity=".13"/><text x="116" y="315" fill="#b7ee4b" font-size="9" letter-spacing="1">LOCAL DETAILS</text><text x="116" y="339" fill="#f8f8f5" font-size="13">Name · Service · Area · Contact</text><rect x="94" y="366" width="424" height="63" rx="5" fill="#ffffff" fill-opacity=".03" stroke="#ffffff" stroke-opacity=".1"/><text x="116" y="389" fill="#aeb3bd" font-size="9" letter-spacing="1">HELPFUL INFORMATION</text><text x="116" y="413" fill="#f8f8f5" font-size="13">Answers that match what people are looking for.</text><g transform="translate(557 196)"><path d="M31 90c-18-25-27-43-27-60a29 29 0 1 1 58 0c0 17-9 35-27 60z" fill="#b7ee4b"/><circle cx="33" cy="29" r="10" fill="#101828"/><path d="M17 125h115" stroke="#ffffff" stroke-opacity=".25"/><path d="m31 90-10 35m41-35 12 35" stroke="#b7ee4b" stroke-opacity=".45"/><circle cx="92" cy="37" r="4" fill="#b7ee4b" fill-opacity=".55"/><circle cx="114" cy="57" r="3" fill="#b7ee4b" fill-opacity=".3"/></g><text x="96" y="481" fill="#b7ee4b" font-size="10" letter-spacing="2">QUERY → USEFUL RESULT → DISCOVERY</text></svg>',
            challengeTitle: 'Being good at what you do is not enough if people cannot find you.',
            challenge: 'Search engines need to understand your site. People need useful answers and clear details. Search work brings those pieces together over time; it cannot promise a particular rank.',
            problems: ['Important pages are hard to find', 'People nearby do not see clear business details', 'The website does not answer common questions', 'Search engines cannot easily understand the site'],
            capabilitiesTitle: 'Make it easier for the right people to find you.',
            capabilities: [['Website foundations', 'Clear pages and structure that people and search engines can use.'], ['Search-friendly content', 'Useful information that answers real customer questions.'], ['Local search', 'Make your business details easier to find in nearby searches and map listings.'], ['Technical checks', 'Work through indexing, speed and other site basics.'], ['Relevant topics', 'Organise services and information around what customers search for.'], ['Progress reviews', 'Review what is being found and improve the next useful step.']],
            approachTitle: 'A strong base. Useful visibility. Steady improvement.',
            steps: ['Check the foundations', 'Understand searches', 'Improve useful pages', 'Strengthen local details', 'Review and improve'],
            closeTitle: 'Help the right people find your business.',
            related: ['website', 'social', 'marketing', 'growth'],
            relatedTitle: 'Search works best with the right support.'
        },
        marketing: {
            number: '04',
            name: 'Performance marketing',
            eyebrow: 'Get more leads & customers',
            title: 'Don’t just get<br>more clicks.<br>Get more <em>real<br>opportunities.</em>',
            intro: 'Reach people who may need what you offer, give them a clear next step and make it easy to enquire. Good marketing connects the whole journey.',
            visualLabel: 'A campaign guiding a potential customer from advert to enquiry',
            visual: '<svg viewBox="0 0 800 540" role="img" aria-labelledby="marketing-title marketing-desc"><title id="marketing-title">The path from an advert to a customer enquiry</title><desc id="marketing-desc">A campaign message connects to a focused landing page, then to a clear enquiry action for a real person to follow up.</desc><path d="M188 252h100m122 0h93m121 0h55" stroke="#b7ee4b" stroke-width="2"/><path d="m278 245 10 7-10 7m85-7 10 7-10 7m83-7 10 7-10 7m88-7 10 7-10 7" fill="none" stroke="#b7ee4b" stroke-width="2"/><g transform="translate(42 151)"><rect width="145" height="199" rx="5" fill="#f0efe8"/><rect x="0" y="0" width="145" height="16" rx="5" fill="#b7ee4b"/><text x="14" y="43" fill="#667085" font-size="8" letter-spacing="1">A USEFUL MESSAGE</text><text x="14" y="80" fill="#101828" font-size="18" font-family="Arial,sans-serif" font-weight="700">Help for the</text><text x="14" y="102" fill="#101828" font-size="18" font-family="Arial,sans-serif" font-weight="700">thing you need.</text><rect x="14" y="119" width="104" height="5" rx="2" fill="#101828" fill-opacity=".3"/><rect x="14" y="132" width="82" height="5" rx="2" fill="#101828" fill-opacity=".2"/><rect x="14" y="154" width="100" height="27" rx="14" fill="#101828"/><text x="28" y="171" fill="#b7ee4b" font-size="8" font-weight="700">LEARN MORE ↗</text></g><g transform="translate(289 133)"><rect width="120" height="239" rx="8" fill="#111b2a" stroke="#ffffff" stroke-opacity=".35"/><rect x="10" y="12" width="100" height="30" rx="3" fill="#b7ee4b"/><text x="19" y="31" fill="#101828" font-size="8" font-weight="700">YOUR BUSINESS</text><text x="12" y="70" fill="#f8f8f5" font-size="13" font-weight="700">A clear next step.</text><rect x="12" y="83" width="91" height="4" rx="2" fill="#ffffff" fill-opacity=".35"/><rect x="12" y="94" width="72" height="4" rx="2" fill="#ffffff" fill-opacity=".22"/><rect x="12" y="113" width="96" height="47" rx="3" fill="#f0efe8" fill-opacity=".1"/><text x="20" y="134" fill="#f8f8f5" font-size="8">What do you need?</text><rect x="20" y="143" width="70" height="4" rx="2" fill="#ffffff" fill-opacity=".25"/><rect x="12" y="176" width="96" height="25" rx="13" fill="#b7ee4b"/><text x="29" y="192" fill="#101828" font-size="8" font-weight="700">GET IN TOUCH</text></g><g transform="translate(507 153)"><rect width="133" height="193" rx="6" fill="#f8f8f5"/><text x="16" y="31" fill="#667085" font-size="8" letter-spacing="1">NEW ENQUIRY</text><circle cx="27" cy="66" r="11" fill="#b7ee4b"/><path d="M22 66h10m-5-5v10" stroke="#101828" stroke-width="1.5"/><text x="45" y="63" fill="#101828" font-size="10" font-weight="700">A person reached out</text><text x="45" y="78" fill="#667085" font-size="8">Ready for a conversation</text><path d="M15 97h103" stroke="#101828" stroke-opacity=".12"/><text x="16" y="121" fill="#667085" font-size="8">The next step is clear:</text><text x="16" y="144" fill="#101828" font-size="11" font-weight="700">Follow up. Help them.</text><rect x="16" y="159" width="102" height="20" rx="10" fill="#101828"/><text x="37" y="173" fill="#f8f8f5" font-size="8">START A CONVERSATION</text></g><circle cx="699" cy="248" r="42" fill="#b7ee4b"/><path d="M682 249l12 12 23-26" fill="none" stroke="#101828" stroke-width="4"/><text x="43" y="412" fill="#aeb3bd" font-size="9" letter-spacing="1">ATTENTION</text><text x="296" y="412" fill="#aeb3bd" font-size="9" letter-spacing="1">LANDING PAGE</text><text x="526" y="412" fill="#aeb3bd" font-size="9" letter-spacing="1">ENQUIRY</text><text x="66" y="466" fill="#b7ee4b" font-size="10" letter-spacing="2">MESSAGE → VISIT → ENQUIRY → FOLLOW-UP</text></svg>',
            challengeTitle: 'Clicks alone do not grow a business.',
            challenge: 'Campaigns lose people when the message is unclear, the audience is a poor fit or the page gives no useful next step. Follow-up matters too.',
            problems: ['The wrong people see the message', 'The offer is hard to understand', 'The landing page loses interest', 'Enquiries are not followed up', 'There is no clear way to learn what worked'],
            capabilitiesTitle: 'Connect the campaign to a real next step.',
            capabilities: [['Campaign direction', 'Start with who you need to reach and what they need to hear.'], ['Useful creative', 'Make the message clear and suited to the audience.'], ['Landing pages', 'Give interested people a focused place to learn and act.'], ['Paid advertising', 'Plan and manage advertising around a clear business goal.'], ['Lead generation', 'Make it straightforward for interested people to enquire.'], ['Review and improve', 'Use available results to make sensible next changes.']],
            approachTitle: 'Make each step lead naturally to the next.',
            steps: ['Reach the right people', 'Share a clear message', 'Bring them to a useful page', 'Make it easy to enquire', 'Follow up and learn'],
            closeTitle: 'Turn attention into real conversations.',
            related: ['website', 'seo', 'social', 'growth'],
            relatedTitle: 'Campaigns work better when the pieces connect.'
        },
        social: {
            number: '05',
            name: 'Social media and content',
            eyebrow: 'Grow my social media',
            title: 'Make your brand<br><em>worth following.</em>',
            intro: 'Consistent content helps people notice your business, recognise what makes it different and remember it when they need you.',
            visualLabel: 'One business idea expressed as social posts, a story and a short video',
            visual: '<svg viewBox="0 0 800 540" role="img" aria-labelledby="social-title social-desc"><title id="social-title">A content idea shaped into social formats</title><desc id="social-desc">A central idea expands into a social graphic, a vertical story, a carousel and a short-video frame, all sharing one visual identity.</desc><path d="M390 258 235 148m175 102 164-92M389 279l-148 117m184-111 147 122" fill="none" stroke="#b7ee4b" stroke-opacity=".48"/><circle cx="401" cy="266" r="72" fill="#b7ee4b"/><text x="361" y="254" fill="#101828" font-size="9" font-weight="700" letter-spacing="1">ONE GOOD</text><text x="362" y="272" fill="#101828" font-size="16" font-weight="700">IDEA</text><text x="360" y="289" fill="#101828" font-size="8">USEFUL TO YOUR CUSTOMER</text><g transform="rotate(-7 190 148)"><rect x="81" y="64" width="153" height="168" rx="4" fill="#f0efe8"/><rect x="81" y="64" width="153" height="12" fill="#b7ee4b"/><circle cx="107" cy="101" r="13" fill="#101828"/><text x="98" y="104" fill="#b7ee4b" font-size="7">W</text><text x="98" y="143" fill="#101828" font-size="19" font-weight="700">MAKE IT</text><text x="98" y="166" fill="#101828" font-size="19" font-weight="700">CLEAR.</text><rect x="98" y="180" width="97" height="4" rx="2" fill="#101828" fill-opacity=".26"/><text x="98" y="211" fill="#667085" font-size="7" letter-spacing="1">SOCIAL POST</text></g><g transform="rotate(5 602 138)"><rect x="543" y="47" width="114" height="200" rx="17" fill="#101828" stroke="#f8f8f5" stroke-opacity=".7" stroke-width="2"/><rect x="551" y="62" width="98" height="171" rx="11" fill="#d4ddc8"/><circle cx="600" cy="112" r="27" fill="#75876c"/><path d="M560 175h78" stroke="#101828" stroke-opacity=".22"/><text x="561" y="195" fill="#101828" font-size="11" font-weight="700">A QUICK TIP</text><rect x="561" y="203" width="69" height="3" rx="1" fill="#101828" fill-opacity=".32"/><rect x="561" y="212" width="53" height="3" rx="1" fill="#101828" fill-opacity=".22"/><text x="563" y="255" fill="#b7ee4b" font-size="8" letter-spacing="1">STORY</text></g><g transform="rotate(5 190 396)"><rect x="100" y="316" width="173" height="151" rx="4" fill="#1b2938" stroke="#ffffff" stroke-opacity=".26"/><rect x="113" y="329" width="66" height="58" fill="#b7ee4b"/><rect x="188" y="329" width="71" height="58" fill="#778697"/><rect x="113" y="394" width="66" height="58" fill="#d8d4c9"/><rect x="188" y="394" width="71" height="58" fill="#859477"/><text x="112" y="487" fill="#aeb3bd" font-size="8" letter-spacing="1">CAROUSEL</text></g><g transform="rotate(-6 600 400)"><rect x="530" y="313" width="152" height="151" rx="4" fill="#b7ee4b"/><circle cx="607" cy="374" r="33" fill="#101828"/><path d="m598 358 25 16-25 16z" fill="#b7ee4b"/><text x="549" y="432" fill="#101828" font-size="11" font-weight="700">SHORT VIDEO</text><text x="549" y="447" fill="#101828" font-size="8">A STORY IN MOTION</text></g><text x="69" y="506" fill="#b7ee4b" font-size="10" letter-spacing="2">ONE IDEA → MANY WAYS TO SHOW UP</text></svg>',
            challengeTitle: 'Posting whenever you have time is hard to keep up.',
            challenge: 'Without a clear idea of what to say and how it should look, social content can feel disconnected. A simple plan makes it easier to show up consistently.',
            problems: ['You run out of useful things to post', 'Every post looks different', 'Content feels rushed or random', 'It is hard to keep a steady rhythm'],
            capabilitiesTitle: 'Content that looks and sounds like your business.',
            capabilities: [['Content direction', 'Decide what is useful to say and who it is for.'], ['Post ideas', 'Build a practical list of topics your business can speak about.'], ['Social graphics', 'Create consistent graphics that fit your brand.'], ['Short-form content', 'Shape useful messages for the social formats you use.'], ['Content planning', 'Organise work into a rhythm that is easier to maintain.'], ['Learn and refine', 'Notice what connects with people and adjust the plan.']],
            approachTitle: 'One useful idea can travel further.',
            steps: ['Find the useful idea', 'Shape the message', 'Design the creative', 'Plan where it goes', 'Learn what connects'],
            closeTitle: 'Make it easier to show up consistently.',
            related: ['brand', 'website', 'seo', 'marketing'],
            relatedTitle: 'Give your content a stronger foundation.'
        },
        growth: {
            number: '06',
            name: 'The WebGrowth System',
            eyebrow: 'Plan my next step',
            title: 'You know you<br>need to grow.<br><em>Let’s find what’s next.</em>',
            intro: 'You do not always need another service. First, understand what is holding the business back and what would make the biggest difference next.',
            visualLabel: 'The WebGrowth System connects foundation, visibility and growth',
            visual: '<svg viewBox="0 0 900 590" role="img" aria-labelledby="growth-title growth-desc"><title id="growth-title">Foundation, visibility and growth working as one system</title><desc id="growth-desc">Three connected stages form a continuous growth path: a clear business foundation, being discovered by the right people and turning interest into meaningful action.</desc><defs><linearGradient id="growthPath" x1="0" x2="1"><stop stop-color="#b7ee4b" stop-opacity=".15"/><stop offset=".5" stop-color="#b7ee4b"/><stop offset="1" stop-color="#b7ee4b" stop-opacity=".15"/></linearGradient></defs><path d="M120 337C218 188 318 187 435 295s206 108 341-42" fill="none" stroke="#ffffff" stroke-opacity=".09" stroke-width="30"/><path d="M120 337C218 188 318 187 435 295s206 108 341-42" fill="none" stroke="url(#growthPath)" stroke-width="2"/><path d="M193 252a111 111 0 0 1 173-6" fill="none" stroke="#b7ee4b" stroke-opacity=".24"/><path d="m354 237 12 9-15 4" fill="none" stroke="#b7ee4b" stroke-width="2"/><path d="M541 336a111 111 0 0 0 169-28" fill="none" stroke="#b7ee4b" stroke-opacity=".24"/><path d="m700 306 10 2-4 10" fill="none" stroke="#b7ee4b" stroke-width="2"/><g><circle cx="142" cy="311" r="67" fill="#101828" stroke="#b7ee4b" stroke-opacity=".8" stroke-width="2"/><circle cx="142" cy="311" r="50" fill="#b7ee4b" fill-opacity=".08"/><path d="M115 315h54m-45-19h36m-30 38h24" stroke="#f8f8f5" stroke-width="2" stroke-linecap="round"/><circle cx="142" cy="296" r="5" fill="#b7ee4b"/><text x="93" y="411" fill="#b7ee4b" font-size="10" letter-spacing="2">01 · FOUNDATION</text><text x="91" y="431" fill="#aeb3bd" font-size="10">Website · Brand · Experience</text></g><g><circle cx="450" cy="292" r="80" fill="#101828" stroke="#b7ee4b" stroke-width="2"/><circle cx="450" cy="292" r="63" fill="#b7ee4b" fill-opacity=".12"/><circle cx="450" cy="278" r="17" fill="none" stroke="#f8f8f5" stroke-width="2"/><path d="M450 267v22m-11-11h22M425 316h50m-40 10h30" stroke="#b7ee4b" stroke-width="2" stroke-linecap="round"/><text x="397" y="405" fill="#b7ee4b" font-size="10" letter-spacing="2">02 · VISIBILITY</text><text x="389" y="425" fill="#aeb3bd" font-size="10">Search · Content · Social</text></g><g><circle cx="746" cy="311" r="67" fill="#101828" stroke="#b7ee4b" stroke-opacity=".8" stroke-width="2"/><circle cx="746" cy="311" r="50" fill="#b7ee4b" fill-opacity=".08"/><path d="M719 330v-21l15-12 13 8 25-24" fill="none" stroke="#b7ee4b" stroke-width="2"/><path d="M762 281h10v10" fill="none" stroke="#b7ee4b" stroke-width="2"/><circle cx="719" cy="330" r="3" fill="#f8f8f5"/><circle cx="734" cy="309" r="3" fill="#f8f8f5"/><circle cx="747" cy="305" r="3" fill="#f8f8f5"/><text x="702" y="411" fill="#b7ee4b" font-size="10" letter-spacing="2">03 · GROWTH</text><text x="692" y="431" fill="#aeb3bd" font-size="10">Ads · Leads · Conversion</text></g><circle cx="142" cy="311" r="76" fill="none" stroke="#b7ee4b" stroke-opacity=".08"/><circle cx="450" cy="292" r="91" fill="none" stroke="#b7ee4b" stroke-opacity=".08"/><circle cx="746" cy="311" r="76" fill="none" stroke="#b7ee4b" stroke-opacity=".08"/><text x="279" y="130" fill="#aeb3bd" font-size="9" letter-spacing="2">MAKE IT CLEAR</text><text x="561" y="173" fill="#aeb3bd" font-size="9" letter-spacing="2">HELP PEOPLE FIND YOU</text><text x="385" y="511" fill="#b7ee4b" font-size="10" letter-spacing="2">CONNECTED WORK. ONE CLEAR DIRECTION.</text></svg>',
            challengeTitle: 'The next step is not always another service.',
            challenge: 'A new website, more visibility or marketing might help—but only if it addresses the real barrier. The WebGrowth System helps put the pieces in a useful order.',
            problems: ['The business has several challenges at once', 'You are unsure where to spend time or money', 'Different marketing efforts are disconnected', 'You need a practical place to start'],
            capabilitiesTitle: 'Three stages. One connected path.',
            system: true,
            closeTitle: 'You do not have to know the answer before we talk.',
            related: ['website', 'brand', 'seo', 'marketing', 'social'],
            relatedTitle: 'Explore the parts of the system.'
        }
    };

    var slugs = {
        website: 'website-development.html',
        brand: 'branding.html',
        seo: 'seo.html',
        marketing: 'performance-marketing.html',
        social: 'social-media.html',
        growth: 'growth-system.html'
    };
    var relatedNames = {
        website: 'Website development',
        brand: 'Branding and design',
        seo: 'SEO and search visibility',
        marketing: 'Performance marketing',
        social: 'Social media and content',
        growth: 'Plan your next step'
    };
    function relatedHref(key) {
        return slugs[key];
    }

    function itemList(items, className) {
        return '<ul class="' + className + '">' + items.map(function (item) {
            return '<li>' + item + '</li>';
        }).join('') + '</ul>';
    }

    function renderCapabilities(page) {
        if (page.system) {
            return '<div class="service-system-detail">' +
                '<article id="foundation-detail"><span>01 · FOUNDATION</span><h3>Build the digital base.</h3><p>A clear website, recognisable brand and a useful experience give the business somewhere solid to stand.</p><a href="' + relatedHref('website') + '">Explore Website Development ↗</a><a href="' + relatedHref('brand') + '">Explore Branding &amp; Design ↗</a></article>' +
                '<article id="visibility-detail"><span>02 · VISIBILITY</span><h3>Help the right people find you.</h3><p>Search, useful content and social communication bring the business into view where customers are looking.</p><a href="' + relatedHref('seo') + '">Explore SEO ↗</a><a href="' + relatedHref('social') + '">Explore Social Media &amp; Content ↗</a></article>' +
                '<article id="growth-detail"><span>03 · GROWTH</span><h3>Turn attention into action.</h3><p>Advertising, lead generation and a clear next step help interested people move towards a conversation.</p><a href="' + relatedHref('marketing') + '">Explore Performance Marketing ↗</a><a href="../index.html#contact">Talk through your next step ↗</a></article>' +
                '</div>';
        }
        return '<div class="service-capability-grid">' + page.capabilities.map(function (capability, index) {
            return '<article><span>0' + (index + 1) + '</span><h3>' + capability[0] + '</h3><p>' + capability[1] + '</p></article>';
        }).join('') + '</div>';
    }

    function renderSteps(page) {
        return '<ol class="service-steps">' + page.steps.map(function (step, index) {
            return '<li><span>0' + (index + 1) + '</span><b>' + step + '</b></li>';
        }).join('') + '</ol>';
    }

    function renderServiceExperience(page) {
        var experiences = {
            '01': '<section class="service-experience section-cream"><div class="service-section-heading"><p class="service-eyebrow">A WEBSITE SHOULD MAKE THE NEXT STEP CLEAR</p><h2>From a quick first look to a useful next action.</h2></div><div class="website-experience-track"><article><span>01 / FIRST IMPRESSION</span><b>Show what the business does.</b><i></i></article><article><span>02 / USEFUL PAGES</span><b>Help people find what they need.</b><i></i></article><article><span>03 / NEXT STEP</span><b>Make it easy to get in touch.</b><i></i></article></div><p class="service-experience-note">The right pages and layout depend on the business. We plan the structure around what its customers need to know.</p></section>',
            '02': '<section class="service-experience brand-experience section-cream"><div class="service-section-heading"><p class="service-eyebrow">FROM INCONSISTENT TO RECOGNISABLE</p><h2>A shared visual language makes each touchpoint feel like the same business.</h2></div><div class="brand-change"><article class="brand-before"><span>BEFORE / DIFFERENT IN EVERY PLACE</span><div><b>Business</b><i></i></div><div><b>BUSINESS</b><em></em></div><div><strong>business</strong><i></i></div></article><span class="brand-change-arrow" aria-hidden="true">→</span><article class="brand-after"><span>AFTER / ONE CLEAR IDENTITY</span><div><b>YOUR BUSINESS</b><i></i><em></em><strong>Seen the same way, wherever it appears.</strong></div></article></div></section>',
            '03': '<section class="service-experience search-experience section-cream"><div class="service-section-heading"><p class="service-eyebrow">A SEARCH SHOULD LEAD SOMEWHERE USEFUL</p><h2>Help a person move from a question to your business.</h2></div><ol><li><span>01</span><b>A person needs something</b></li><li><span>02</span><b>They search nearby or online</b></li><li><span>03</span><b>Your useful information appears</b></li><li><span>04</span><b>They choose whether to visit or call</b></li></ol><p class="service-experience-note">Search placement changes over time. The work is to make the site useful, understandable and easier to discover—not to promise a particular ranking.</p></section>',
            '04': '<section class="service-experience campaign-experience section-cream"><div class="service-section-heading"><p class="service-eyebrow">ATTENTION IS ONLY THE FIRST STEP</p><h2>A campaign should connect to a real business action.</h2></div><div class="campaign-path"><article><span>MESSAGE</span><b>Reach the right people.</b></article><i aria-hidden="true">→</i><article><span>VISIT</span><b>Give them a clear page.</b></article><i aria-hidden="true">→</i><article><span>ENQUIRY</span><b>Make contact simple.</b></article><i aria-hidden="true">→</i><article><span>FOLLOW-UP</span><b>Continue the conversation.</b></article></div><p class="service-experience-note">This is an example of a customer journey, not a performance result or campaign case study.</p></section>',
            '05': '<section class="service-experience social-experience section-cream"><div class="service-section-heading"><p class="service-eyebrow">ONE IDEA, MADE FOR DIFFERENT MOMENTS</p><h2>Social content should feel like your business—wherever it appears.</h2></div><div class="social-format-gallery"><article><span>01 / POST</span><b>A clear idea<br>in one frame.</b><i></i></article><article><span>02 / STORY</span><b>A quick<br>useful update.</b><i></i></article><article><span>03 / CAROUSEL</span><b>A thought<br>in steps.</b><i></i></article><article><span>04 / SHORT VIDEO</span><b>A message<br>in motion.</b><i></i></article></div><p class="service-experience-note">The formats are illustrative. We plan content around the platforms, audience and material available to your business.</p></section>'
        };
        return experiences[page.number] || '';
    }

    function renderRelated(page) {
        return '<div class="service-related-list">' + page.related.map(function (key, index) {
            return '<a href="' + relatedHref(key) + '"><span>0' + (index + 1) + '</span><b>' + relatedNames[key] + '</b><i aria-hidden="true">↗</i></a>';
        }).join('') + '</div>';
    }

    function renderGrowthVisual() {
        return '<nav class="growth-map" aria-label="Explore the three parts of the WebGrowth System">' +
            '<a href="#foundation-detail" class="growth-node"><span>01</span><b>Foundation</b><small>Build a clear base</small></a>' +
            '<span class="growth-connector" aria-hidden="true">→</span>' +
            '<a href="#visibility-detail" class="growth-node growth-node-active"><span>02</span><b>Visibility</b><small>Help people find you</small></a>' +
            '<span class="growth-connector" aria-hidden="true">→</span>' +
            '<a href="#growth-detail" class="growth-node"><span>03</span><b>Growth</b><small>Turn interest into action</small></a></nav>';
    }

    function renderPage(page) {
        var workUrl = '../work.html';
        var contactUrl = '../index.html#contact';
        var homeUrl = '../index.html#top';
        var menu = [
            ['01', 'Build my website', 'website'],
            ['02', 'Make my brand look professional', 'brand'],
            ['03', 'Get found online', 'seo'],
            ['04', 'Get more leads & customers', 'marketing'],
            ['05', 'Grow my social media', 'social'],
            ['06', 'Plan my next step', 'growth']
        ];
        var capabilitiesSection = page.system ?
            '<section class="service-system-journey section-dark"><div class="service-section-heading"><p class="service-eyebrow">THE WEBGROWTH SYSTEM</p><h2>Three stages.<br><em>One connected path.</em></h2><p>Explore a stage to see what it can mean for your business.</p></div>' + renderGrowthVisual() + '</section>' +
            '<section class="service-capabilities section-light"><div class="service-section-heading"><p class="service-eyebrow">WHEN DOES EACH STAGE HELP?</p><h2>Start where your business needs it most.</h2><p>The stages work together. The most useful next move depends on what is holding the business back.</p></div>' + renderCapabilities(page) + '</section>' :
            '<section class="service-capabilities section-light"><div class="service-section-heading"><p class="service-eyebrow">WHAT WE DO</p><h2>' + page.capabilitiesTitle + '</h2></div>' + renderCapabilities(page) + '</section>';
        var processSection = page.system ? '' :
            '<section class="service-process section-dark"><div class="service-section-heading"><p class="service-eyebrow">HOW WE WORK</p><h2>' + page.approachTitle + '</h2></div>' + renderSteps(page) + '</section>';
        return '<header class="service-header"><div class="service-header-inner">' +
            '<a class="service-brand" href="' + homeUrl + '" aria-label="WebGrowth home"><span>W</span> WEBGROWTH</a>' +
            '<nav class="service-nav" aria-label="Main navigation"><a href="' + workUrl + '">Work</a><a href="../index.html#services">Services</a><a href="../growth-system.html">Growth Systems</a><a href="../insights.html">Insights</a></nav>' +
            '<a class="service-nav-cta" href="' + contactUrl + '">Start a conversation <span aria-hidden="true">↗</span></a>' +
            '</div></header>' +
            '<main id="service-main" class="service-page service-page-' + page.number + '">' +
            '<section class="service-hero"><div class="service-hero-copy"><p class="service-eyebrow"><span>' + page.number + '</span> ' + page.eyebrow + '</p><h1>' + page.title + '</h1><p class="service-intro">' + page.intro + '</p><div class="service-hero-actions"><a class="service-button-primary" href="' + contactUrl + '">Start a conversation <span aria-hidden="true">↗</span></a><a class="service-button-secondary" href="' + workUrl + '">View related work <span aria-hidden="true">↓</span></a></div></div><figure class="service-hero-visual"><div class="service-visual-frame service-visual-' + page.number + '">' + page.visual + '</div><figcaption>' + page.visualLabel + '</figcaption></figure><a class="service-scroll-cue" href="#service-detail"><span aria-hidden="true">↓</span> Explore the service</a></section>' +
            '<section class="service-detail section-cream" id="service-detail"><div class="service-section-heading"><p class="service-eyebrow">THE CHALLENGE</p><h2>' + page.challengeTitle + '</h2><p>' + page.challenge + '</p></div>' + itemList(page.problems, 'service-problem-list') + '</section>' +
            capabilitiesSection +
            renderServiceExperience(page) +
            processSection +
            (!page.system ? '<section class="service-work section-cream"><div class="service-work-inner"><div><p class="service-eyebrow">VISUAL STUDIES</p><h2>See the idea<br>made visible.</h2><p>Explore original WebGrowth visual studies. These are illustrative demonstrations, not client case studies.</p></div><a class="service-work-link" href="' + workUrl + '">See the visual studies <span aria-hidden="true">↗</span></a></div></section>' : '') +
            '<section class="service-related section-light"><div class="service-section-heading"><p class="service-eyebrow">CONNECTED SERVICES</p><h2>' + page.relatedTitle + '</h2></div>' + renderRelated(page) + '</section>' +
            '<section class="service-final-cta section-accent"><div><p class="service-eyebrow">YOUR NEXT STEP</p><h2>' + page.closeTitle + '</h2><p>Tell us what you want to change. We’ll talk through a useful next step together.</p><a class="service-button-primary" href="' + contactUrl + '">Start a conversation <span aria-hidden="true">↗</span></a></div></section>' +
            '</main>' +
            '<footer class="service-footer"><a class="service-brand" href="' + homeUrl + '"><span>W</span> WEBGROWTH</a><p>Build a presence. Get seen. Grow.</p><nav aria-label="Service pages">' + menu.map(function (item) {
                return '<a href="' + relatedHref(item[2]) + '">' + item[1] + '</a>';
            }).join('') + '</nav><a class="service-footer-contact" href="' + contactUrl + '">Start a conversation ↗</a></footer>';
    }

    var app = document.getElementById('service-app');
    var key = document.body.getAttribute('data-service');
    var page = pages[key];

    if (!app || !page) {
        throw new Error('Service page configuration is missing for "' + key + '".');
    }

    app.innerHTML = renderPage(page);
}());
