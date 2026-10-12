# 5. CTF-NAVIGATOR — Πλοήγηση & Προσαρμοστική Διαδρομή Μάθησης για CTF σε Κυβερνοασφάλεια

### CTF-NAVIGATOR: Guided Pathfinding and Adaptive Learning for Cybersecurity Capture-the-Flag

## Στοιχεία Έργου

- **Πηγαίος φάκελος:** CTF-NAVIGATOR-MAIN/
- **Θεματική περιοχή:** CTF education, adaptive learning, learning path recommendation, cybersecurity pedagogy, learner modeling
- **Τεχνολογίες:** TypeScript/React (frontend), Node.js/Express ή Python/FastAPI (backend), learner model (skill graph), recommendation engine, progress tracking, analytics
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Τα Capture-the-Flag (CTF) challenges αποτελούν ένα από τα πιο αποτελεσματικά μέσα πρακτικής εκπαίδευσης στην κυβερνοασφάλεια. Ωστόσο, για αρχάριους, το «μεγάλο» σύνολο διαθέσιμων challenges συχνά προκαλεί υπερφόρτωση (choice overload), αποπροσανατολισμό και υψηλά ποσοστά εγκατάλειψης. Η παρούσα εργασία αφορά το **CTF-NAVIGATOR**, ένα σύστημα που καθοδηγεί τον εκπαιδευόμενο σε μια **προσαρμοστική διαδρομή μάθησης** (adaptive learning path), αντί να τον αφήνει στην τυχαία εξερεύνηση.

Στόχος είναι ο σχεδιασμός, η υλοποίηση και η αξιολόγηση ενός συστήματος πλοήγησης για CTF: συνδυάζει μοντελοποίηση δεξιοτήτων (skill modeling), ιεραρχία εννοιών, ιστορικό επίλυσης και προσαρμοστικές συστάσεις. Κάθε challenge αντιστοιχίζεται σε ένα σύνολο δεξιοτήτων (π.χ. web, crypto, pwn/rev, forensics, OSINT) και σε επίπεδο δυσκολίας, με σαφή dependencies μεταξύ εννοιών.

Ο πυρήνας του συστήματος είναι ένα **skill graph**: κόμβοι = έννοιες/δεξιοτήτες, ακμές = προαπαιτούμενες σχέσεις. Με βάση το learner model (ολοκληρωμένα challenges, προσπάθειες, χρόνο, αποτυχίες, hints), ο μηχανισμός συστάσεων παράγει μια **βέλτιστη επόμενη ενέργεια** (next best challenge) που μεγιστοποιεί την πιθανότητα επιτυχίας διατηρώντας την πρόκληση εντός ζώνης ανάπτυξης (zone of proximal development). Επιπλέον, υποστηρίζεται **mastery-based progression** (πέρασμα μόνο όταν επιδεικνύεται επάρκεια) και δυναμική αναπροσαρμογή της διαδρομής όταν ο χρήστης κολλάει ή προχωρά γρήγορα.

Η πλατφόρμα παρέχει οπτικοποίηση διαδρομής (roadmap), στατιστικά προόδου, ενδείξεις επανάληψης αδύναμων τομέων και αιτιολόγηση κάθε σύστασης («γιατί σου προτείνω αυτό;»). Ιδιαίτερη έμφαση δίνεται στην **εξηγησιμότητα** (explainability) των συστάσεων και στη διαφάνεια του learner model.

Η αξιολόγηση γίνεται με πραγματικά ή ελεγχόμενα σύνολα CTF challenges (αποταυτοποιημένα metadata), εστιάζοντας σε αρχάριους φοιτητές. Συγκρίνεται με μη-καθοδηγούμενη προσέγγιση (ελεύθερη επιλογή) ως baseline.

## Αξιολόγηση και Σημαντικά Αποτελέσματα

**Μεθοδολογία.** Controlled study: δύο ομάδες (guided path vs free choice) με pre/post knowledge test, παρακολούθηση completion rate, time-to-mastery ανά skill, drop-off rate ανά ενότητα. Καταγράφεται η ακολουθία επιλογών για ανάλυση μονοπατιού μάθησης. Χρησιμοποιείται επίσης think-aloud για ποιοτική αξιολόγηση ευχρηστίας.

**Μετρήσιμα αποτελέσματα.** Αναμένονται: υψηλότερο ποσοστό ολοκλήρωσης ακολουθίας, μικρότερος χρόνος για απόκτηση βασικών δεξιοτήτων, μικρότερο drop-off, καλύτερη διατήρηση κίνησης (momentum), αυξημένη αυτοπεποίθηση (self-efficacy) και σαφής μείωση αίσθησης υπερφόρτωσης. Τεκμηρίωση ότι οι συστάσεις είναι συνεπείς με το skill graph και δεν οδηγούν σε «shortcuts» που παρακάμπτουν προαπαιτούμενα.

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)

1. Švábenský, V., Čeleda, P., Vykopal, J., Brišáková, S. "Cybersecurity knowledge and skills taught in Capture the Flag challenges." *Computers & Security* (Elsevier), 2021.
2. Vykopal, J., Švábenský, V., Chang, E. C. "Benefits and Pitfalls of Using Capture the Flag Games in University Courses." *SIGCSE*, ACM, 2020.
3. Brusilovsky, P., Millán, E. "User models for adaptive hypermedia and adaptive educational systems." *The Adaptive Web*, Springer, 2007.
4. Hattie, J., Timperley, H. "The Power of Feedback." *Review of Educational Research*, 2007.
5. Anderson, J. R., Corbett, A. T., Koedinger, K. R., Pelletier, R. "Cognitive Tutors: Lessons Learned." *Journal of the Learning Sciences*, 1995.
6. Graf, S., Kinshuk. "An approach for detecting learning styles in learning management systems." *ICALT*, IEEE, 2006.
