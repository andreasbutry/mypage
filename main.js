/* ===== i18n translations + language switching + menu ===== */
const translations = {"en": {"menuAria": "Open menu", "backToTopAria": "Back to top", "navAbout": "About me", "navExpertise": "Expertise", "navExperience": "Experience", "navSkills": "Skills & Stack", "navEducation": "Education", "navContact": "Contact", "navTestimonials": "Testimonials", "aboutTitle": "About me", "aboutLead": "Technical background, engineering scope and positioning in a concise form.", "aboutCardTitle": "Profile", "aboutText": "Systems & Software Engineer with expertise in safety-critical automotive systems, software quality and software development processes. Broad experience across the full system and software lifecycle, from requirements management and system/software architecture to implementation, verification and release in line with ISO 26262 and ASPICE. Strong focus on the continuous improvement of development processes, especially through AI-supported methods and tools. Bringing this together with my safety-critical background, I explore how AI-generated software can be made dependable and largely error-free through verification, traceability and human-in-the-loop review, and where the boundaries of AI-supported development become critical.", "pillar5Title": "AI-Consulting", "pillar5Text": "Exploring AI use cases, AI integration and process automation across different levels of data sensitivity.", "expertiseTitle": "Expertise", "expertiseLead": "Core technical focus combined with engineering approach and working principles.", "pillar1Title": "Safe & Reliable Software", "pillar1Text": "Functional safety, software quality, robust behavior, verification mindset.", "pillar2Title": "Systems & Software Engineering", "pillar2Text": "End-to-end thinking from requirements and architecture to implementation and validation.", "pillar3Title": "Engineering Processes", "pillar3Text": "Structured development, traceability, documentation, and continuous improvement.", "pillar4Title": "AI-Driven Development", "pillar4Text": "Practical use of AI to support software development, engineering workflows, and productivity.", "principlesKicker": "Working principles", "principlesTitle": "Engineering approach", "principlesIntro": "A systems-oriented way of working that combines technical clarity, quality focus and constructive collaboration.", "principle1": "Breaking down complexity", "principle2": "Seeing the bigger picture", "principle3": "Clear communication", "principle4": "Quality focus", "principle5": "Continuous learning", "experienceTitle": "Experience", "experienceLead": "Selected roles and projects with focus on technical scope, responsibility and engineering depth.", "experience1Label": "Senior Design Engineer", "experience1Meta": "Offenbach / remote · Since 05/2025", "experience1Title": "Embedded & IoT Software Design", "experience1Text": "System and software development across embedded devices, connected products and cloud services.", "experience1Bullet1": "Design and development of APIs for cloud-based services and connected home automation solutions.", "experience1Bullet2": "Build-up and optimization of development processes for AI-generated software with agentic design workflows.", "experience1Bullet3": "Responsibility for project planning, technical alignment and coordination of development projects.", "experience2Label": "Functional software development and product management", "experience2Meta": "Frankfurt / remote · 09/2016 – 05/2025", "experience2Title": "Embedded software function development for safety-critical brake control units", "experience2Text": "Function development for safety-critical brake control units in vehicles.", "experience2Bullet1": "Product development and management for EU7-compliant brake systems, including risk assessment, definition and selection of software compensation algorithms, technical support for developers, test planning, cross-functional coordination and customer communication with OEMs such as BMW and VW.", "experience2Bullet2": "New development of a model-based tire tolerance compensation algorithm in Simulink using multidimensional linear regression and a recursive least-squares estimator.", "experience2Bullet3": "System development for redundant brake control in highly automated driving with two-ECU architecture, including wheel-speed signal communication via CAN bus, fault detection and degradation strategies for functional safety and system reliability.", "experience2Bullet4": "Software quality and process responsibility in development aligned with ASPICE and ISO 26262.", "experience2Bullet5": "Software responsibility for tire tolerance compensation, wheel signal chain and road slope estimation.", "experience3Label": "Academic and early industry experience", "experience3Meta": "Simulation, testing and vehicle integration", "experience3Title": "Technical foundation in simulation, validation and integration work", "experience3Text": "Early work in academia and industry built a strong systems foundation through simulation, test benches, real-time systems and vehicle integration.", "experience3Bullet1": "Setup and commissioning of an omnidirectional driving simulator platform and development of the related real-time computing system using IPG HIL, MATLAB/Simulink and C/C++.", "experience3Bullet2": "Setup of test systems, data acquisition and analysis work including dSPACE ControlDesk-based control and evaluation workflows.", "experience3Bullet3": "Integration of steer-by-wire systems, planning and evaluation of test bench experiments and validation of vehicle dynamics models in MATLAB/Simulink.", "skillsTitle": "Skills & Stack", "skillsLead": "A broader view of languages, systems, methods, tools and AI-driven development topics.", "stack1Title": "Programming & Scripting", "stack1Tag1": "C", "stack1Tag2": "C++", "stack1Tag3": "C#", "stack1Tag4": "Java", "stack1Tag5": "Python", "stack1Tag6": "SQL", "stack1Tag7": "JSON", "stack1Tag8": "HTML", "stack1Tag9": "CSS", "stack1Tag10": "LaTeX", "stack1Tag11": "UML", "stack2Title": "Systems & Embedded Engineering", "stack2Tag1": "Embedded Systems", "stack2Tag2": "RTOS", "stack2Tag3": "Windows", "stack2Tag4": "Linux", "stack2Tag5": "UART", "stack2Tag6": "CAN", "stack2Tag7": "AUTOSAR", "stack2Tag8": "APIs", "stack3Title": "Modeling & Simulation", "stack3Tag1": "MATLAB/Simulink", "stack3Tag2": "IBM Rhapsody", "stack3Tag3": "Enterprise Architect", "stack3Tag4": "IPG HIL", "stack3Tag5": "IPG CarMaker", "stack3Tag6": "dSPACE ControlDesk", "stack3Tag7": "Vehicle Dynamics Simulation", "stack4Title": "Quality, Safety & Processes", "stack4Tag1": "Software Quality", "stack4Tag2": "ISO 26262", "stack4Tag3": "ASPICE", "stack4Tag4": "MISRA-C", "stack4Tag5": "Polyspace", "stack4Tag6": "TDD", "stack4Tag7": "Traceability", "stack5Title": "Project Delivery & Collaboration", "stack5Tag1": "Project Management", "stack5Tag2": "Agile", "stack5Tag3": "SAFe", "stack5Tag4": "Scrum", "stack5Tag5": "Git", "stack5Tag6": "GitHub", "stack5Tag6b": "GitLab", "stack5Tag7": "Jira", "stack5Tag8": "DOORS", "stack5Tag9": "Eclipse", "stack5Tag10": "Visual Studio", "stack5Tag11": "Docker", "stack5Tag12": "Jenkins", "stack5Tag13": "Kubernetes", "stack6Title": "AI & Modern Development", "stack6Tag1": "Generative AI", "stack6Tag2": "LLM-based Applications", "stack6Tag3": "Prompt Engineering", "stack6Tag4": "Context Engineering", "stack6Tag5": "AI-Driven SDLC", "stack6Tag6": "Agentic Workflows", "stack6Tag7": "Multi-Agent Systems", "stack6Tag8": "LangChain", "stack6Tag9": "RAG", "stack6Tag10": "MCP", "stack6Tag11": "Claude Code", "educationTitle": "Education", "educationLead": "Academic background and project work that support the engineering profile.", "contactTitle": "Contact", "contactLead": "A simple contact section for roles, collaborations and selected consulting topics.", "testimonialsTitle": "Testimonials", "testimonialsLead": "Reference placeholders remain here until curated recommendations are added.", "navKnowledge": "AI Engineering Concepts", "knowledgeTitle": "AI Engineering Concepts", "heroEyebrow": "Andreas Butry", "heroTitle": "Systems & Software Engineer | AI-Assisted Development", "heroIntro": "Working on safety-critical systems, embedded software, and AI-assisted engineering concepts.", "heroCtaPrimary": "LinkedIn", "heroCtaSecondary": "GitHub", "heroMeta1": "Systems & Software Engineering", "heroMeta2": "Functional Safety", "heroMeta3": "Embedded Systems", "heroMeta4": "AI-Assisted Development", "contactBullet2": "GitHub and LinkedIn are linked for direct contact and profile access.", "knowledgeTocTitle": "Topics", "knowledgeCardTitle": "Human-in-the-Loop AI Engineering", "knowledgeCardTeaser": "Mapping the V-model's phases to specialized AI agents, with humans as the final gate.", "knowledgeCardText": "The V-model maps development phases to their corresponding verification and validation steps. In an AI-driven SDLC, specialized agents can be assigned to each phase.", "knowledgeBullet1": "Requirements Agent: extracts, refines, and structures stakeholder needs.", "knowledgeBullet2": "Design Agent: translates requirements into system and software architecture.", "knowledgeBullet3": "Implementation Agents: generate and review code.", "knowledgeBullet4": "Test Agent: defines and executes verification and validation activities.", "knowledgePrinciplesTitle": "Key Principles", "knowledgeBullet5": "Test-driven development (TDD): tests are defined early and guide implementation throughout the lifecycle.", "knowledgeBullet6": "Agent independence: reduces shared context to avoid correlated or common-mode errors.", "knowledgeBullet7": "Small context scope: keeps each agent focused and improves reliability and consistency.", "knowledgeBullet8": "Cost and token optimization: limiting context per agent reduces token usage and improves scalability, runtime efficiency, and compute cost.", "knowledgeBullet9": "Clear separation of concerns: aligns with the structured verification logic of the V-model.", "knowledgeBullet10": "HUMIL (Human-in-the-Loop): humans remain the final safety and quality gate, ensuring oversight, domain judgment, and accountability across the lifecycle.", "knowledgeBullet11": "Capability-based tailoring: skills and roles can be used to adapt content and outputs to the task.", "knowledgeConclusion": "Overall, this enables a modular, traceable, cost-efficient, and more robust AI-supported SDLC.", "knowledgeCard2Title": "Code Documentation Matters", "knowledgeCard2Teaser": "AI output is only as good as the context it gets — and documentation is that context.", "knowledgeCard2Text": "AI coding assistants such as Claude Code and Copilot are becoming part of daily software engineering, but their output is only as good as the context they receive. In practice, prompt engineering increasingly becomes context engineering.", "knowledgeCard2Text2": "Well-documented projects help both humans and AI understand not only the code itself, but also the reasoning behind it.", "knowledge2Bullet1": "Clean code and clear naming make software easier to understand for humans and AI.", "knowledge2Bullet2": "Useful comments should explain why, not only what.", "knowledge2Bullet3": "Architecture documentation clarifies system structure, interfaces, and dependencies.", "knowledge2Bullet4": "Architecture Decision Records (ADRs) capture why important technical decisions were made.", "knowledge2Bullet5": "Good code documentation is one of the quickest and easiest wins when working with AI tools.", "knowledge2PrinciplesTitle": "What Better Documentation Enables", "knowledgeCard2Text3": "Without documentation, AI mainly sees implementation details. With documentation, AI can also understand design constraints, trade-offs, architecture decisions, business logic, and domain-specific topics.", "knowledge2Bullet6": "This improves code suggestions, refactoring quality, onboarding speed, and the reliability of AI responses.", "knowledge2Bullet7": "Better documentation can also reduce token usage and therefore lower cost, because concise documentation often provides context more efficiently than large amounts of raw source code.", "knowledge2Bullet8": "From personal experience, this is one of the easiest practical wins because AI is very fast at routine documentation tasks.", "knowledge2Bullet9": "In fast-growing code bases, software quality matters for humans and AI alike.", "knowledge2Bullet10": "A practical approach is to keep a Markdown file that defines how and what should be documented, and update it after every AI-assisted code change together with the production code documentation.", "knowledge2Bullet11": "For human understanding, block diagrams are especially useful; Mermaid is a practical tool for creating them.", "educationSectionTitle": "Education", "educationDegreeMeta": "10/2008 – 08/2016", "educationDegreeTitle": "M.Sc. Electrical Engineering and Information Technology (Automation and Control Design)", "educationDegreeSchool": "TU Darmstadt", "thesisProjectsTitle": "Thesis / Projects", "cvItem1Label": "Master Thesis", "cvItem1Text": "“Analysis and further development of control algorithms for a driving simulator”, Mercedes-Benz, Stuttgart (Daimler)", "cvItem2Label": "Project Seminar", "cvItem2Text": "“Modeling and simulation of braking processes in a hydraulic brake system”", "cvItem3Label": "Project Seminar", "cvItem3Text": "“Design and implementation of a concept for processing sensor data from a Correvit sensor and compensating measurement errors using sensor fusion in a vehicle”", "cvItem4Label": "Bachelor Thesis", "cvItem4Text": "“Implementation of a controller into an existing vehicle dynamics model for the omnidirectional base platform of a self-driving driving simulator”, Mercedes-Benz, Stuttgart (Daimler)"}, "de": {"menuAria": "Menü öffnen", "backToTopAria": "Nach oben", "navAbout": "Über mich", "navExpertise": "Expertise", "navExperience": "Erfahrung", "navSkills": "Kompetenzen & Stack", "navEducation": "Studium", "navContact": "Kontakt", "navTestimonials": "Referenzen", "aboutTitle": "Über mich", "aboutLead": "Technischer Hintergrund, Engineering-Umfang und Positionierung in kompakter Form.", "aboutCardTitle": "Profil", "aboutText": "Systems & Software Engineer mit Expertise in sicherheitskritischen Automotive-Systemen, Softwarequalität und Softwareentwicklungsprozessen. Umfassende Erfahrung über den gesamten System- und Software-Lebenszyklus hinweg: Vom Anforderungsmanagement und der System-/Softwarearchitektur bis zu Implementierung, Verifikation und Freigabe nach ISO 26262 und ASPICE. Fokus auf die kontinuierliche Verbesserung von Entwicklungsprozessen, speziell durch den Einsatz von KI-gestützten Methoden und Werkzeugen. In Verbindung mit meinem sicherheitskritischen Hintergrund untersuche ich, wie KI-generierte Software verlässlich und weitgehend fehlerfrei werden kann, etwa durch Verifikation, Traceability und Human-in-the-Loop-Review, und wo die Grenzen der KI-gestützten Entwicklung kritisch werden.", "pillar5Title": "KI-Beratung", "pillar5Text": "Erkundung von KI-Anwendungsfällen, KI-Integration und Prozessautomatisierung über verschiedene Stufen der Datensensibilität hinweg.", "expertiseTitle": "Expertise", "expertiseLead": "Fachlicher Schwerpunkt kombiniert mit Engineering-Ansatz und Arbeitsprinzipien.", "pillar1Title": "Safe & Reliable Software", "pillar1Text": "Funktionale Sicherheit, Softwarequalität, robustes Systemverhalten und ein Verifikations-Mindset.", "pillar2Title": "Systems & Software Engineering", "pillar2Text": "End-to-End-Denken von Anforderungen und Architektur bis zu Implementierung und Validierung.", "pillar3Title": "Engineering Processes", "pillar3Text": "Strukturierte Entwicklung, Traceability, Dokumentation und kontinuierliche Verbesserung.", "pillar4Title": "AI-Driven Development", "pillar4Text": "Pragmatischer Einsatz von KI zur Unterstützung von Softwareentwicklung, Engineering-Workflows und Produktivität.", "principlesKicker": "Arbeitsprinzipien", "principlesTitle": "Engineering-Ansatz", "principlesIntro": "Eine systemorientierte Arbeitsweise, die technische Klarheit, Qualitätsfokus und konstruktive Zusammenarbeit verbindet.", "principle1": "Komplexität herunterbrechen", "principle2": "Das große Ganze sehen", "principle3": "Klare Kommunikation", "principle4": "Qualitätsfokus", "principle5": "Kontinuierliches Lernen", "experienceTitle": "Erfahrung", "experienceLead": "Ausgewählte Rollen und Projekte mit Fokus auf technischem Umfang, Verantwortung und Engineering-Tiefe.", "experience1Label": "Senior Design Engineer", "experience1Meta": "Offenbach / remote · Seit 05/2025", "experience1Title": "Embedded- & IoT-Softwaredesign", "experience1Text": "System- und Softwareentwicklung für eingebettete Geräte, vernetzte Produkte und Cloud-Services.", "experience1Bullet1": "Konzeption und Entwicklung von APIs für cloudbasierte Services und vernetzte Home-Automation-Lösungen.", "experience1Bullet2": "Aufbau und Optimierung von Entwicklungsprozessen für KI-generierte Software mit Agentic Design.", "experience1Bullet3": "Verantwortung für Projektplanung, technische Abstimmung und Koordination von Entwicklungsprojekten.", "experience2Label": "Funktionssoftwareentwicklung und Produktmanagement", "experience2Meta": "Frankfurt / remote · 09/2016 – 05/2025", "experience2Title": "Funktionsentwicklung im Bereich Embedded Software für sicherheitskritische Bremssteuergeräte", "experience2Text": "Funktionsentwicklung für sicherheitskritische Bremssteuergeräte für Fahrzeuge.", "experience2Bullet1": "Produktentwicklung und -management für EU7-konforme Bremssysteme, inklusive Risikobewertung, Definition und Auswahl verschiedener Software-Kompensationsalgorithmen, technischer Unterstützung für Entwickler, Testplanung, bereichsübergreifender Koordination und Kundenkommunikation mit OEMs wie BMW und VW.", "experience2Bullet2": "Neuentwicklung eines modellbasierten Reifentoleranzausgleichs-Algorithmus in Simulink unter Verwendung einer multidimensionalen linearen Regression und eines rekursiven Least-Squares-Schätzers.", "experience2Bullet3": "Systementwicklung für redundante Bremssteuerung im hochautomatisierten Fahren mit Zwei-ECU-Architektur, inklusive Entwicklung der Raddrehzahlsignal-Kommunikation zwischen ECUs über CAN-Bus, Fehlererkennung und Degradationsstrategien zur Sicherstellung von funktionaler Sicherheit und Systemzuverlässigkeit.", "experience2Bullet4": "Softwarequalität und Prozessverantwortung in einer Entwicklung nach ASPICE- und ISO-26262-Standards.", "experience2Bullet5": "Softwareverantwortung für Reifentoleranzausgleich, Radsignalkette und Streckenneigungsschätzung.", "experience3Label": "Akademische und frühe Industrieerfahrung", "experience3Meta": "Simulation, Tests und Fahrzeugintegration", "experience3Title": "Technische Grundlage in Simulation, Validierung und Integrationsarbeit", "experience3Text": "Frühe Arbeit in Hochschule und Industrie schuf eine starke Systembasis durch Simulation, Prüfstände, Echtzeitsysteme und Fahrzeugintegration.", "experience3Bullet1": "Aufbau und Inbetriebnahme einer omnidirektionalen Fahrsimulatorplattform sowie Entwicklung des zugehörigen Echtzeit-Rechnersystems mit IPG HIL, MATLAB/Simulink und C/C++.", "experience3Bullet2": "Aufbau von Testsystemen sowie Datenerfassung und Analyse inklusive dSPACE-ControlDesk-basierter Steuer- und Auswerte-Workflows.", "experience3Bullet3": "Integration von Steer-by-Wire-Systemen, Planung und Auswertung von Prüfstandsversuchen sowie Validierung von Fahrdynamikmodellen in MATLAB/Simulink.", "skillsTitle": "Kompetenzen & Stack", "skillsLead": "Ein breiterer Überblick über Sprachen, Systeme, Methoden, Tools und KI-gestützte Entwicklungsthemen.", "stack1Title": "Programmierung & Scripting", "stack1Tag1": "C", "stack1Tag2": "C++", "stack1Tag3": "C#", "stack1Tag4": "Java", "stack1Tag5": "Python", "stack1Tag6": "SQL", "stack1Tag7": "JSON", "stack1Tag8": "HTML", "stack1Tag9": "CSS", "stack1Tag10": "LaTeX", "stack1Tag11": "UML", "stack2Title": "Systeme & Embedded Engineering", "stack2Tag1": "Eingebettete Systeme", "stack2Tag2": "RTOS", "stack2Tag3": "Windows", "stack2Tag4": "Linux", "stack2Tag5": "UART", "stack2Tag6": "CAN", "stack2Tag7": "AUTOSAR", "stack2Tag8": "APIs", "stack3Title": "Modellierung & Simulation", "stack3Tag1": "MATLAB/Simulink", "stack3Tag2": "IBM Rhapsody", "stack3Tag3": "Enterprise Architect", "stack3Tag4": "IPG HIL", "stack3Tag5": "IPG CarMaker", "stack3Tag6": "dSPACE ControlDesk", "stack3Tag7": "Fahrdynamik-Simulation", "stack4Title": "Qualität, Safety & Prozesse", "stack4Tag1": "Softwarequalität", "stack4Tag2": "ISO 26262", "stack4Tag3": "ASPICE", "stack4Tag4": "MISRA-C", "stack4Tag5": "Polyspace", "stack4Tag6": "TDD", "stack4Tag7": "Traceability", "stack5Title": "Projektsteuerung & Zusammenarbeit", "stack5Tag1": "Projektmanagement", "stack5Tag2": "Agile", "stack5Tag3": "SAFe", "stack5Tag4": "Scrum", "stack5Tag5": "Git", "stack5Tag6": "GitHub", "stack5Tag6b": "GitLab", "stack5Tag7": "Jira", "stack5Tag8": "DOORS", "stack5Tag9": "Eclipse", "stack5Tag10": "Visual Studio", "stack5Tag11": "Docker", "stack5Tag12": "Jenkins", "stack5Tag13": "Kubernetes", "stack6Title": "KI & Moderne Entwicklung", "stack6Tag1": "Generative KI", "stack6Tag2": "LLM-basierte Anwendungen", "stack6Tag3": "Prompt Engineering", "stack6Tag4": "Context Engineering", "stack6Tag5": "KI-gestützter SDLC", "stack6Tag6": "Agentic Workflows", "stack6Tag7": "Multi-Agenten-Systeme", "stack6Tag8": "LangChain", "stack6Tag9": "RAG", "stack6Tag10": "MCP", "stack6Tag11": "Claude Code", "educationTitle": "Studium", "educationLead": "Akademischer Hintergrund und Projektarbeit als Unterstützung des Engineering-Profils.", "contactTitle": "Kontakt", "contactLead": "Ein kompakter Kontaktbereich für Rollen, Zusammenarbeit und ausgewählte Themen.", "testimonialsTitle": "Referenzen", "testimonialsLead": "Referenz-Platzhalter bleiben hier sichtbar, bis kuratierte Empfehlungen ergänzt werden.", "navKnowledge": "AI Engineering Concepts", "knowledgeTitle": "AI Engineering Concepts", "heroEyebrow": "Andreas Butry", "heroTitle": "System- & Softwareentwickler | KI-gestützte Entwicklung", "heroIntro": "Arbeit an sicherheitskritischen Systemen, Embedded Software und KI-gestützten Engineering-Konzepten.", "heroCtaPrimary": "LinkedIn", "heroCtaSecondary": "GitHub", "heroMeta1": "System- & Softwareentwicklung", "heroMeta2": "Funktionale Sicherheit", "heroMeta3": "Eingebettete Systeme", "heroMeta4": "KI-gestützte Entwicklung", "contactBullet2": "GitHub und LinkedIn sind für direkten Kontakt und Profilzugriff verlinkt.", "knowledgeTocTitle": "Themen", "knowledgeCardTitle": "Human-in-the-Loop AI Engineering", "knowledgeCardTeaser": "Die Phasen des V-Modells auf spezialisierte KI-Agenten abbilden – mit dem Menschen als letzter Instanz.", "knowledgeCardText": "Das V-Modell ordnet Entwicklungsphasen den entsprechenden Verifikations- und Validierungsschritten zu. In einem KI-gesteuerten SDLC können spezialisierte Agenten jeder Phase zugewiesen werden.", "knowledgeBullet1": "Requirements Agent: extrahiert, verfeinert und strukturiert die Bedürfnisse der Stakeholder.", "knowledgeBullet2": "Design Agent: übersetzt Anforderungen in System- und Softwarearchitektur.", "knowledgeBullet3": "Implementierungsagenten: generieren und überprüfen Code.", "knowledgeBullet4": "Test Agent: definiert und führt Verifikations- und Validierungsaktivitäten aus.", "knowledgePrinciplesTitle": "Schlüsselprinzipien", "knowledgeBullet5": "Testgetriebene Entwicklung (TDD): Tests werden früh definiert und leiten die Implementierung über den gesamten Lebenszyklus hinweg.", "knowledgeBullet6": "Agentenunabhängigkeit: reduziert den geteilten Kontext, um korrelierte oder Common-Mode-Fehler zu vermeiden.", "knowledgeBullet7": "Kleiner Kontextumfang: hält jeden Agenten fokussiert und verbessert Zuverlässigkeit und Konsistenz.", "knowledgeBullet8": "Kosten- und Token-Optimierung: begrenzter Kontext pro Agent reduziert die Tokennutzung und verbessert Skalierbarkeit, Laufzeiteffizienz und Rechenkosten.", "knowledgeBullet9": "Klare Trennung der Anliegen: entspricht der strukturierten Verifikationslogik des V-Modells.", "knowledgeBullet10": "HUMIL (Human-in-the-Loop): Menschen bleiben das letzte Sicherheits- und Qualitätstor und gewährleisten Aufsicht, Domänenurteil und Verantwortung über den gesamten Lebenszyklus hinweg.", "knowledgeBullet11": "Fähigkeitsbasierte Anpassung: Skills und Rollen können genutzt werden, um Inhalte und Ergebnisse auf die Aufgabe zuzuschneiden.", "knowledgeConclusion": "Insgesamt ermöglicht dies ein modulares, nachverfolgbares, kosteneffizientes und robusteres KI-gestütztes SDLC.", "knowledgeCard2Title": "Code Documentation Matters", "knowledgeCard2Teaser": "KI-Ergebnisse sind nur so gut wie ihr Kontext – und Dokumentation liefert diesen Kontext.", "knowledgeCard2Text": "KI-Coding-Assistenten wie Claude Code und Copilot werden zunehmend Teil des täglichen Software Engineerings, aber ihre Ergebnisse sind nur so gut wie der Kontext, den sie erhalten. In der Praxis wird Prompt Engineering immer mehr zu Kontext-Engineering.", "knowledgeCard2Text2": "Gut dokumentierte Projekte helfen sowohl Menschen als auch KI, nicht nur den Code selbst, sondern auch die Begründung dahinter zu verstehen.", "knowledge2Bullet1": "Sauberer Code und klare Benennung machen Software für Menschen und KI leichter verständlich.", "knowledge2Bullet2": "Nützliche Kommentare sollten das Warum erklären, nicht nur das Was.", "knowledge2Bullet3": "Architekturdokumentation verdeutlicht Systemstruktur, Schnittstellen und Abhängigkeiten.", "knowledge2Bullet4": "Architecture Decision Records (ADRs) halten fest, warum wichtige technische Entscheidungen getroffen wurden.", "knowledge2Bullet5": "Gute Code-Dokumentation ist einer der schnellsten und einfachsten Hebel beim Arbeiten mit KI-Tools.", "knowledge2PrinciplesTitle": "Was bessere Dokumentation ermöglicht", "knowledgeCard2Text3": "Ohne Dokumentation sieht KI hauptsächlich Implementierungsdetails. Mit Dokumentation kann KI zusätzlich Designrestriktionen, Trade-offs, Architekturentscheidungen, Geschäftslogik und domänenspezifische Themen verstehen.", "knowledge2Bullet6": "Das verbessert Code-Vorschläge, Refactoring-Qualität, Onboarding-Geschwindigkeit und die Zuverlässigkeit von KI-Antworten.", "knowledge2Bullet7": "Bessere Dokumentation kann auch den Tokenverbrauch und damit die Kosten senken, weil prägnante Dokumentation Kontext oft effizienter liefert als große Mengen an Quellcode.", "knowledge2Bullet8": "Aus persönlicher Erfahrung ist das einer der einfachsten praktischen Hebel, weil KI bei routinemäßigen Dokumentationsaufgaben sehr schnell ist.", "knowledge2Bullet9": "In schnell wachsenden Codebasen ist Softwarequalität für Menschen und KI gleichermaßen wichtig.", "knowledge2Bullet10": "Ein praktischer Ansatz ist eine Markdown-Datei, die festlegt, wie und was dokumentiert werden soll, und die nach jeder KI-gestützten Codeänderung zusammen mit der produktiven Code-Dokumentation aktualisiert wird.", "knowledge2Bullet11": "Für das menschliche Verständnis sind Blockdiagramme besonders hilfreich; Mermaid ist dafür ein praktisches Werkzeug.", "educationSectionTitle": "Ausbildung", "educationDegreeMeta": "10/2008 – 08/2016", "educationDegreeTitle": "M.Sc. Elektrotechnik und Informationstechnik (Automatisierung und Regelungstechnik)", "educationDegreeSchool": "TU Darmstadt", "thesisProjectsTitle": "Abschlussarbeiten / Projekte", "cvItem1Label": "Masterarbeit", "cvItem1Text": "„Analyse und Weiterentwicklung von Regelungsalgorithmen für einen Fahrsimulator“, Mercedes-Benz, Stuttgart (Daimler)", "cvItem2Label": "Projektseminar", "cvItem2Text": "„Modellierung und Simulation von Bremsvorgängen in einem hydraulischen Bremssystem“", "cvItem3Label": "Projektseminar", "cvItem3Text": "„Konzeption und Umsetzung eines Konzepts zur Verarbeitung von Sensordaten eines Correvit-Sensors und Kompensation von Messfehlern mittels Sensorfusion im Fahrzeug“", "cvItem4Label": "Bachelorarbeit", "cvItem4Text": "„Implementierung eines Reglers in ein bestehendes Fahrdynamikmodell für die omnidirektionale Basisplattform eines selbstfahrenden Fahrsimulators“, Mercedes-Benz, Stuttgart (Daimler)"}};

document.addEventListener('DOMContentLoaded', function () {
  const menuTrigger = document.querySelector('.floating-menu-trigger');
  const menuPanel = document.getElementById('floating-menu-panel');
  const langButtons = Array.from(document.querySelectorAll('[data-lang-switch]'));
  const htmlEl = document.documentElement;

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    htmlEl.setAttribute('lang', lang);
    langButtons.forEach((btn) => btn.classList.toggle('is-active', btn.getAttribute('data-lang-switch') === lang));
  }

  function setLanguage(lang) {
    const safeLang = translations[lang] ? lang : 'en';
    localStorage.setItem('site-language', safeLang);
    applyTranslations(safeLang);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang-switch'));
    });
  });

  const initialLang = localStorage.getItem('site-language') || 'en';
  applyTranslations(initialLang);

  if (menuTrigger && menuPanel) {
    function closeMenu() {
      menuPanel.hidden = true;
      menuTrigger.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
      menuPanel.hidden = false;
      menuTrigger.setAttribute('aria-expanded', 'true');
    }

    menuTrigger.addEventListener('click', function (event) {
      event.stopPropagation();
      if (menuPanel.hidden) openMenu();
      else closeMenu();
    });

    menuPanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (event) {
      if (!menuPanel.hidden && !menuPanel.contains(event.target) && !menuTrigger.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !menuPanel.hidden) closeMenu();
    });
  }

  const triggers = Array.from(document.querySelectorAll('.knowledge-visual-button[data-lightbox-src]'));
  const lightbox = document.getElementById('imageLightbox');
  const closeButton = document.getElementById('imageLightboxClose');
  const backdrop = document.getElementById('imageLightboxBackdrop');
  const lightboxImage = document.getElementById('imageLightboxImage');
  const lightboxTitle = document.getElementById('imageLightboxTitle');
  if (triggers.length && lightbox && closeButton && backdrop && lightboxImage && lightboxTitle) {
    function openLightbox(trigger) {
      const src = trigger.getAttribute('data-lightbox-src');
      const alt = trigger.getAttribute('data-lightbox-alt') || '';
      const title = trigger.getAttribute('data-lightbox-title') || '';
      lightboxImage.src = src;
      lightboxImage.alt = alt;
      lightboxTitle.textContent = title;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', function () {
        openLightbox(trigger);
      });
    });

    closeButton.addEventListener('click', closeLightbox);
    backdrop.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
  }
});

/* ===== knowledge accordion (AI concepts) ===== */
const detailsLabel = (open) => {
  const lang = localStorage.getItem('site-language') || 'en';
  const map = {
    en: { more: 'More details', less: 'Less details' },
    de: { more: 'Mehr Details', less: 'Weniger Details' }
  };
  const m = map[lang] || map.en;
  return open ? m.less : m.more;
};

const syncToggle = (card, selector) => {
  const t = card.querySelector(selector);
  if (t) t.textContent = detailsLabel(card.classList.contains('is-open'));
};

const syncAllToggles = () => {
  document.querySelectorAll('.experience-card').forEach((c) => syncToggle(c, '.experience-toggle'));
  document.querySelectorAll('.knowledge-accordion').forEach((c) => syncToggle(c, '.detail-toggle'));
};

document.querySelectorAll('.experience-card').forEach((card) => {
  card.setAttribute('tabindex', '0');
  const toggle = () => {
    card.classList.toggle('is-open');
    syncToggle(card, '.experience-toggle');
  };
  card.addEventListener('click', toggle);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  });
});

document.querySelectorAll('.principles-list li, .expertise-pillar').forEach((item) => {
  item.addEventListener('click', () => item.classList.toggle('is-open'));
  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      item.classList.toggle('is-open');
    }
  });
});

document.querySelectorAll('.knowledge-accordion').forEach((card) => {
  const head = card.querySelector('.knowledge-accordion-head');
  if (!head) return;
  const setOpen = (open) => {
    card.classList.toggle('is-open', open);
    head.setAttribute('aria-expanded', open ? 'true' : 'false');
    syncToggle(card, '.detail-toggle');
  };
  head.addEventListener('click', () => setOpen(!card.classList.contains('is-open')));
  head.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(!card.classList.contains('is-open'));
    }
  });
});

document.querySelectorAll('.knowledge-toc-link').forEach((link) => {
  link.addEventListener('click', () => {
    const id = (link.getAttribute('href') || '').replace('#', '');
    const card = document.getElementById(id);
    if (card && card.classList.contains('knowledge-accordion')) {
      card.classList.add('is-open');
      const head = card.querySelector('.knowledge-accordion-head');
      if (head) head.setAttribute('aria-expanded', 'true');
      syncToggle(card, '.detail-toggle');
    }
  });
});

document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
  btn.addEventListener('click', () => setTimeout(syncAllToggles, 0));
});

syncAllToggles();

/* ===== expertise pillar accordion ===== */
(function () {
  const langMap = {
    en: {
      principlesIntro: 'My Core Values',
      principleToggle: 'More',
      principle1: 'Breaking down complexity',
      principle1Detail: 'Turning complex problems into manageable, structured work packages with clear interfaces, priorities and validation paths.',
      principle2: 'Seeing the bigger picture',
      principle2Detail: 'Connecting requirements, system behavior, implementation, process and stakeholder needs instead of optimizing only one local detail.',
      principle3: 'Clear communication',
      principle3Detail: 'Making technical topics understandable, aligning interfaces early and creating shared clarity across engineering, quality and management.',
      principle4: 'Quality focus',
      principle4Detail: 'Building reliability through traceability, review discipline, robust decision-making and a strong verification mindset.',
      principle5: 'Continuous learning',
      principle5Detail: 'Continuously improving methods, tools and workflows, and deliberately growing from mistakes rather than hiding them.',
      principle6: 'Human and empathetic',
      principle6Detail: 'Human and empathetic, especially in difficult situations; calm, respectful and solution-oriented in working with others.',
      principle7: 'Knowledge sharing',
      principle7Detail: 'Sharing know-how through clear documentation, mentoring and open exchange, so teams stay aligned and grow together.'
    },
    de: {
      principlesIntro: 'Meine Grundwerte',
      principleToggle: 'Mehr',
      principle1: 'Komplexität herunterbrechen',
      principle1Detail: 'Komplexe Probleme in überschaubare, strukturierte Arbeitspakete mit klaren Schnittstellen, Prioritäten und Validierungspfaden überführen.',
      principle2: 'Das große Ganze sehen',
      principle2Detail: 'Anforderungen, Systemverhalten, Implementierung, Prozesse und Stakeholder-Bedürfnisse zusammen denken, statt nur ein lokales Detail zu optimieren.',
      principle3: 'Klare Kommunikation',
      principle3Detail: 'Technische Themen verständlich machen, Schnittstellen früh abstimmen und gemeinsame Klarheit über Engineering, Qualität und Management hinweg schaffen.',
      principle4: 'Qualitätsfokus',
      principle4Detail: 'Zuverlässigkeit durch Traceability, Review-Disziplin, robuste Entscheidungen und ein starkes Verifikationsverständnis absichern.',
      principle5: 'Kontinuierliches Lernen',
      principle5Detail: 'Methoden, Tools und Workflows kontinuierlich verbessern und bewusst an Fehlern wachsen, statt sie zu verbergen.',
      principle6: 'Menschlich und empathisch',
      principle6Detail: 'Menschlich und empathisch – besonders in schwierigen Situationen; ruhig, respektvoll und lösungsorientiert im Umgang mit anderen.',
      principle7: 'Wissen teilen',
      principle7Detail: 'Wissen durch klare Dokumentation, Mentoring und offenen Austausch weitergeben, damit Teams ausgerichtet bleiben und gemeinsam wachsen.'
    }
  };

  function activeLang() {
    const active = document.querySelector('.lang-btn.is-active');
    return active ? active.textContent.trim().toLowerCase() : 'en';
  }

  function applyPrinciplesLang(lang) {
    const pack = langMap[lang] || langMap.en;
    Object.entries(pack).forEach(([key, value]) => {
      document.querySelectorAll(`[data-i18n="${key}"]`).forEach((el) => {
        el.textContent = value;
      });
    });
  }

  applyPrinciplesLang(activeLang());
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setTimeout(() => applyPrinciplesLang(activeLang()), 0);
    });
  });
})();

/* ===== experience timeline accordion ===== */
(function () {
  const stackLangMap = {
    en: {
      stack1Title: 'Programming, Scripting & Protocols',
      stack2Title: 'Systems & Embedded Engineering',
      stack5Title: 'Project Delivery & Collaboration',
      stack2Tag7: 'System Architecture/Design',
      stack3Tag8: 'UML',
      stack5Tag1: 'Project Management',
      stack5Tag2: 'Agile',
      stack5Tag3: 'SAFe',
      stack5Tag4: 'Scrum',
      stack5Tag6b: 'GitLab'
    },
    de: {
      stack1Title: 'Programmierung, Scripting & Protokolle',
      stack2Title: 'System- & Embedded Engineering',
      stack5Title: 'Projektsteuerung & Zusammenarbeit',
      stack2Tag7: 'Systemarchitektur/-design',
      stack3Tag8: 'UML',
      stack5Tag1: 'Projektmanagement',
      stack5Tag2: 'Agile',
      stack5Tag3: 'SAFe',
      stack5Tag4: 'Scrum',
      stack5Tag6b: 'GitLab'
    }
  };

  function activeLang() {
    const active = document.querySelector('.lang-btn.is-active');
    return active ? active.textContent.trim().toLowerCase() : 'en';
  }

  function applyStackLang(lang) {
    const pack = stackLangMap[lang] || stackLangMap.en;
    Object.entries(pack).forEach(([key, value]) => {
      document.querySelectorAll(`[data-i18n="${key}"]`).forEach((el) => {
        el.textContent = value;
      });
    });
  }

  applyStackLang(activeLang());
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setTimeout(() => applyStackLang(activeLang()), 0);
    });
  });
})();

/* ===== skill hover cards ===== */
document.querySelectorAll('.skill-hover-card').forEach((card) => {
  card.setAttribute('tabindex', '0');
  card.addEventListener('click', () => card.classList.toggle('is-open'));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      card.classList.toggle('is-open');
    }
  });
});

/* ===== stack card / principles accordion ===== */
(function () {
  const skillLangMap = {
    en: {
      stack1Title: 'Programming, Scripting & Protocols',
      stack1Preview: 'Programming languages, data formats and communication or interface protocols.',
      stack2Title: 'Systems & Embedded Engineering',
      stack2Preview: 'Embedded platforms, operating environments and core system design topics.',
      stack2Tag6: 'AUTOSAR',
      stack2Tag7: 'System Architecture/Design',
      stack3Title: 'Modeling & Simulation',
      stack3Preview: 'Model-based engineering, architecture modeling and simulation environments.',
      stack3Tag8: 'UML',
      stack4Preview: 'Standards, process quality and verification-related engineering practices.',
      stack5Title: 'Project Delivery & Collaboration',
      stack5Preview: 'Project leadership, agile collaboration and delivery-oriented engineering tooling.',
      stack5Tag1: 'Project Management',
      stack5Tag2: 'Agile',
      stack5Tag3: 'SAFe',
      stack5Tag4: 'Scrum',
      stack5Tag6b: 'GitLab',
      stack6Preview: 'AI-enabled engineering methods, agentic workflows and modern application patterns.'
    },
    de: {
      stack1Title: 'Programmierung, Scripting & Protokolle',
      stack1Preview: 'Programmiersprachen, Datenformate sowie Kommunikations- und Schnittstellenprotokolle.',
      stack2Title: 'System- & Embedded Engineering',
      stack2Preview: 'Embedded-Plattformen, Laufzeitumgebungen und zentrale Themen des Systemdesigns.',
      stack2Tag6: 'AUTOSAR',
      stack2Tag7: 'Systemarchitektur/-design',
      stack3Title: 'Modellierung & Simulation',
      stack3Preview: 'Modellbasiertes Engineering, Architekturbeschreibung und Simulationsumgebungen.',
      stack3Tag8: 'UML',
      stack4Preview: 'Normen, Prozessqualität und verifikationsnahe Engineering-Praktiken.',
      stack5Title: 'Projektumsetzung & Zusammenarbeit',
      stack5Preview: 'Projektführung, agile Zusammenarbeit und delivery-orientierte Engineering-Tools.',
      stack5Tag1: 'Projektmanagement',
      stack5Tag2: 'Agile',
      stack5Tag3: 'SAFe',
      stack5Tag4: 'Scrum',
      stack5Tag6b: 'GitLab',
      stack6Preview: 'KI-gestützte Engineering-Methoden, agentische Workflows und moderne Anwendungsmuster.'
    }
  };

  function activeLang() {
    const active = document.querySelector('.lang-btn.is-active');
    return active ? active.textContent.trim().toLowerCase() : 'en';
  }

  function applySkillLang(lang) {
    const pack = skillLangMap[lang] || skillLangMap.en;
    Object.entries(pack).forEach(([key, value]) => {
      document.querySelectorAll(`[data-i18n="${key}"]`).forEach((el) => {
        el.textContent = value;
      });
    });
  }

  applySkillLang(activeLang());
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setTimeout(() => applySkillLang(activeLang()), 0);
    });
  });
})();

/* ===== image lightbox + final init ===== */
document.addEventListener('DOMContentLoaded', function () {
  const openButton = document.getElementById('knowledgeVisualButton');
  const lightbox = document.getElementById('imageLightbox');
  const closeButton = document.getElementById('imageLightboxClose');
  const backdrop = document.getElementById('imageLightboxBackdrop');
  if (!openButton || !lightbox || !closeButton || !backdrop) return;

  function openLightbox() {
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openButton.addEventListener('click', openLightbox);
  closeButton.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
});
