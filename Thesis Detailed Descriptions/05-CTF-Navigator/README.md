# 5. CTF-NAVIGATOR — Πλοήγηση & Προσαρμοστική Διαδρομή Μάθησης για CTF σε Κυβερνοασφάλεια

### CTF-NAVIGATOR: Guided Pathfinding and Adaptive Learning for Cybersecurity Capture-the-Flag

## Στοιχεία Έργου

- **Πηγαίος φάκελος:** CTF-NAVIGATOR-MAIN/ (ή CTF-Navigator/ ανά έκδοση)
- **Θεματική περιοχή:** CTF education, adaptive learning, learning path recommendation, skill graph, learner modeling, cybersecurity pedagogy
- **Τεχνολογίες:** TypeScript/React, Node.js/Express ή Python/FastAPI, skill graph, recommendation engine, progress tracking, learning analytics
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Τα Capture-the-Flag (CTF) challenges είναι από τα πιο αποδοτικά μέσα για πρακτική εξάσκηση σε έννοιες κυβερνοασφάλειας. Ωστόσο, για αρχάριους, η πληθώρα challenges χωρίς καθοδήγηση οδηγεί σε υπερφόρτωση επιλογών (choice overload), αποπροσανατολισμό και υψηλά ποσοστά εγκατάλειψης. Η εργασία στοχεύει στη σχεδίαση, υλοποίηση και αξιολόγηση του **CTF-NAVIGATOR**, ενός συστήματος που προσφέρει **καθοδηγούμενη, προσαρμοστική διαδρομή μάθησης** για CTF.

Το σύστημα μοντελοποιεί τις δεξιότητες που απαιτούνται για κάθε challenge (web, crypto, pwn/rev, forensics, OSINT, misc) και οργανώνει τις έννοιες σε **skill graph**: κόμβοι = έννοιες/δεξιότητες, ακμές = προαπαιτούμενες σχέσεις (prerequisites). Για κάθε εκπαιδευόμενο διατηρείται **learner model** με ιστορικό: ολοκληρωμένα, αποτυχημένα, προσπάθειες, χρόνο, χρήση hints, επίπεδο mastery ανά skill.

Βάσει αυτού, ο μηχανισμός συστάσεων υπολογίζει το **next-best challenge** — δηλαδή την πιο κατάλληλη επόμενη πρόκληση που βρίσκεται στη «ζώνη εγγύτερης ανάπτυξης» (Zone of Proximal Development), ώστε να διατηρείται ισορροπία μεταξύ πρόκλησης και επιτυχίας. Το σύστημα υποστηρίζει **mastery-based progression**, δυναμική αναπροσαρμογή όταν ο χρήστης δυσκολεύεται ή προχωρά γρήγορα, καθώς και αιτιολόγηση κάθε σύστασης («Γιατί σου προτείνω αυτό;») με αναφορά στις προαπαιτούμενες έννοιες.

Η διεπαφή παρέχει **interactive roadmap**, οπτικοποίηση προόδου ανά skill, ενδείξεις αδύναμων περιοχών και λεπτομερή στατιστικά. Δίνεται έμφαση στην **εξηγησιμότητα** (explainability) του συστήματος, ώστε ο εκπαιδευόμενος να κατανοεί όχι μόνο τι να κάνει, αλλά και γιατί.

Η αξιολόγηση συγκρίνει το CTF-NAVIGATOR με ελεύθερη πλοήγηση σε υπάρχον σύνολο challenges, χρησιμοποιώντας αρχάριους φοιτητές κυβερνοασφάλειας.

## Αξιολόγηση και Σημαντικά Αποτελέσματα

**Μεθοδολογία.** Controlled experiment (guided vs unguided), pre/post γνώσεων, καταγραφή completion rate, time-to-mastery ανά skill, drop-off, sequence analysis. Ποιοτικά: SUS, NASA-TLX, think-aloud.

**Μετρήσιμα αποτελέσματα.** Αναμένονται: υψηλότερο completion rate, ταχύτερη κατάκτηση βασικών skills, χαμηλότερο drop-off, καλύτερο momentum, μικρότερη αντιληπτή υπερφόρτωση, βελτίωση pre/post σκορ. Επίσης τεκμηρίωση συνέπειας συστάσεων με skill graph (δεν παρακάμπτονται κρίσιμα prerequisites).

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)

1. Švábenský, V., Čeleda, P., Vykopal, J., Brišáková, S. "Cybersecurity knowledge and skills taught in Capture the Flag challenges." *Computers & Security* (Elsevier), 2021.
2. Vykopal, J., Švábenský, V., Chang, E. C. "Benefits and Pitfalls of Using Capture the Flag Games in University Courses." *SIGCSE*, ACM, 2020.
3. Brusilovsky, P., Millán, E. "User models for adaptive hypermedia and adaptive educational systems." *The Adaptive Web*, Springer, 2007.
4. Hattie, J., Timperley, H. "The Power of Feedback." *Review of Educational Research*, 2007.
5. Anderson, J. R. et al. "Cognitive Tutors: Lessons Learned." *Journal of the Learning Sciences*, 1995.
6. Graf, S., Kinshuk. "An approach for detecting learning styles in learning management systems." *ICALT*, IEEE, 2006.
