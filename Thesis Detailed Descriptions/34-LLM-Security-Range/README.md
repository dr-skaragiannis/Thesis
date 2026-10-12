# 34. LLM-Security-Range — Κυβερνοπεδίο Επίθεσης και Άμυνας σε Εφαρμογές LLM
### A Gamified Attack–Defense Range for LLM Application Security (Prompt Injection and Guardrails)

## Στοιχεία Έργου
- **Πηγαίος φάκελος:** `gamified-llm-security-platform/`
- **Θεματική περιοχή:** Ασφάλεια μεγάλων γλωσσικών μοντέλων, prompt injection, μηχανισμοί Guardrails, εκπαιδευτικά κυβερνοπεδία
- **Τεχνολογίες:** Next.js, TypeScript, προσομοιωτές σεναρίων, γλώσσα κανόνων Guardrails, προαιρετική δοκιμή σε τοπικό/ιδιόκτητο μοντέλο
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Η ασφάλεια εφαρμογών με μεγάλα γλωσσικά μοντέλα γίνεται κατανοητή όταν ο εκπαιδευόμενος πρώτα παραβιάζει μια **προσομοιωμένη** εφαρμογή και κατόπιν γράφει κανόνες Guardrails που σταματούν τις ίδιες παραλλαγές χωρίς να αποκλείουν νόμιμους χρήστες. Η εργασία συγκροτεί εκπαιδευτικό κυβερνοπεδίο για prompt injection, jailbreak, δηλητηρίαση RAG και κατάχρηση εργαλείων σε ασφαλές εργαστήριο, με αντιστοίχιση αποστολών σε ταξινομήσεις όπως OWASP LLM Top 10 και MITRE ATLAS.

Η πλατφόρμα οργανώνει ενδεικτικά δέκα αποστολές σε βαθμίδες (από αρχάριο έως έμπειρο) και βρόχο τριών φάσεων: παραβίαση προσομοίωσης (BREACH), επιδιόρθωση με Guardrails (PATCH) και δοκιμή σε μοντέλο που ελέγχει ο φοιτητής (LIVE FIRE). Υποδείξεις που δεν αποκαλύπτουν αμέσως τη λύση, αυτόματη βαθμολόγηση επίθεσης και άμυνας. Η γλώσσα κανόνων είναι περιορισμένη —NORMALIZE, BLOCK_INPUT/OUTPUT, DENY_TOOL, απόκρυψη— με έλεγχο ReDoS. LIVE FIRE μόνο έναντι τοπικού ή προσωπικού μοντέλου, ποτέ έναντι υπηρεσιών τρίτων χωρίς εξουσιοδότηση.

Τα σενάρια τεκμηριώνονται μαζί με μετρικές ισορροπίας ασφάλειας–χρηστικότητας των Guardrails και συζήτηση ορίων: κανόνες έναντι στατιστικών αμυνών, παράκαμψη με κωδικοποιήσεις, ψευδώς θετικά. Η αξιολόγηση καλύπτει μάθηση και ανθεκτικότητα των κανόνων σε παραλλαγές που δεν ήταν στη σουίτα εκπαίδευσης.

## Αξιολόγηση και σημαντικά αποτελέσματα

**Πώς διεξάγεται.** Αυτοματοποιημένη σουίτα: ποσοστό επιτυχούς παραβίασης προσομοίωσης, ποσοστό αποκλεισμού επιθέσεων μετά την επιδιόρθωση, ποσοστό αποδοχής καλοήθων εισόδων, αριθμός υποδείξεων και προσπάθειες μέχρι το πρώτο επιτυχές Guardrail. Πιλοτική χρήση εκπαιδευομένων με προ/μετα-έλεγχο εννοιών (όχι απομνημόνευση των σημαιών). Δοκιμή γενίκευσης σε νέες παραλλαγές επίθεσης. Ελέγχεται ότι η γλώσσα κανόνων απορρίπτει επικίνδυνες κανονικές εκφράσεις.

**Αποτελέσματα που μετράνε.** Καμπύλη ασφάλειας–χρηστικότητας ανά αποστολή, μαθησιακό κέρδος χωρίς αποκάλυψη λύσης, αποτυχίες γενίκευσης των Guardrails και τεκμηρίωση ότι η δοκιμή σε πραγματικό μοντέλο παραμένει εντός εξουσιοδοτημένου μοντέλου.

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)
1. Greshake, K., Abdelnabi, S., Mishra, S., Endres, C., Holz, T., Fritz, M. "Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection." *ACM AISec (CCS Workshop)*, 2023.
2. Carlini, N., et al. "Extracting Training Data from Large Language Models." *USENIX Security*, 2021.
3. Wallace, E., Feng, S., Kandpal, N., Gardner, M., Singh, S. "Universal Adversarial Triggers for Attacking and Analyzing NLP." *EMNLP*, 2019.
4. Liu, Y., et al. "Formalizing and Benchmarking Prompt Injection Attacks and Defenses." *USENIX Security*, 2024.
5. Piet, J., Alrashed, M., Sitawarin, C., Chen, S., Wei, Z., Sun, E., Alomair, B., Wagner, D. "Jatmo: Prompt Injection Defense by Task-Specific Finetuning." *IEEE EuroS&P*, 2024.
6. Kang, D., Li, X., Stoica, I., Guestrin, C., Zaharia, M., Hashimoto, T. "Exploiting Programmatic Behavior of LLMs: Dual-Use Through Standard Security Attacks." *IEEE S&P Workshops (SPW)*, 2024.
