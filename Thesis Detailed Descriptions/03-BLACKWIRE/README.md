# 3. BLACKWIRE — Διαδραστικό Terminal Escape Room για Εκπαίδευση στην Κυβερνοασφάλεια με Προσαρμοστικό Αντίπαλο-Πράκτορα

### BLACKWIRE: A Narrative Terminal Escape Room for Cybersecurity Education with an Adaptive Adversarial Agent

## Στοιχεία Έργου

- **Πηγαίος φάκελος:** cyberpunk-cybersecurity-terminal-game/
- **Θεματική περιοχή:** Παιχνιδοποίηση (gamification) στην εκπαίδευση, κυβερνοασφάλεια, hands-on εκπαίδευση με CLI, προσαρμοστικός αντίπαλος (adaptive adversary), narrative-driven learning
- **Τεχνολογίες:** React, TypeScript, Vite (single-file HTML export), pure reducer architecture, προσαρμοστικός NPC/agent, text-based UI σε μορφή τερματικού
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Η διπλωματική εργασία εστιάζει στη σχεδίαση, υλοποίηση και αξιολόγηση του **BLACKWIRE**, ενός διαδραστικού terminal escape room με αφηγηματικό υπόβαθρο (cyberpunk noir). Στόχος είναι η παροχή πρακτικής, ασφαλούς και ελκυστικής εκπαίδευσης σε θεμελιώδεις έννοιες κυβερνοασφάλειας, χωρίς την ανάγκη πρόσβασης σε πραγματικά ευάλωτα περιβάλλοντα.

Το παιχνίδι διαδραματίζεται στον φανταστικό οργανισμό «Project Latchkey» και ακολουθεί γραμμική-διακλαδούμενη αφήγηση (narrative beats) με αυξανόμενο επίπεδο δυσκολίας. Οι παίκτες καλούνται να επιλύσουν μια σειρά από μικρές προκλήσεις που προσομοιώνουν ρεαλιστικές εργασίες ασφάλειας: αναγνώριση/διερεύνηση συμβάντων, ανάλυση αρχείων καταγραφής (log analysis), βασικές εντολές Linux CLI, ασφαλείς πρακτικές και στοιχειώδεις τεχνικές αντιμετώπισης. Κάθε πίστα (level/mission) ενσωματώνει σαφή μαθησιακά αποτελέσματα (learning outcomes) και ανάδραση (feedback) άμεσα συνδεδεμένα με τις ενέργειες του παίκτη.

Βασικό στοιχείο καινοτομίας είναι ο **προσαρμοστικός αντίπαλος-πράκτορας (adaptive adversarial agent)**. Αντί για στατική σειρά δοκιμασιών, ο πράκτορας παρακολουθεί το στυλ επίλυσης του παίκτη (tempo, λάθη, σειρά ενεργειών, χρήση βοήθειας) και προσαρμόζει την πίεση/δυσκολία ανάλογα: μπορεί να αλλάξει την σειρά ή την έκταση των ενδείξεων (hints), να εισάγει μικρές παρεκκλίσεις ή να ρυθμίσει τον ρυθμό αντίδρασης, διατηρώντας παράλληλα δίκαιη πρόκληση (scaffolding χωρίς αποκάλυψη λύσης). Η συμπεριφορά ελέγχεται από καθαρό reducer (pure reducer) για προβλέψιμη λογική και εύκολη αξιολόγηση.

Το περιεχόμενο ευθυγραμμίζεται με ευρέως αποδεκτά πλαίσια αναφοράς (OWASP, MITRE ATT&CK, NIST CSF) και καλύπτει έννοιες όπως: reconnaissance/footprinting, enumeration, exploitation-awareness, privilege/permissions, logging, incident response mindset, social engineering awareness και secure practices. Σε κάθε βήμα τονίζεται η ηθική χρήση και οι ορθές πρακτικές (responsible disclosure mindset).

Η σχεδίαση δίνει έμφαση στη **βελτιστοποίηση μεταφορτώσεως γνωστικής επιβάρυνσης (cognitive load)**: μικρά βήματα, σαφή στόχος, εστιασμένη ανάδραση και σταδιακή απομάκρυνση υποστηρικτικών ενδείξεων (fading). Παράλληλα, η αφήγηση λειτουργεί ως κινητήρια δύναμη μάθησης (narrative engagement) χωρίς να επισκιάζει τα μαθησιακά αποτελέσματα.

## Αξιολόγηση και Σημαντικά Αποτελέσματα

**Μεθοδολογία αξιολόγησης.** Το σύστημα αξιολογείται με μικτή μεθοδολογία (quantitative + qualitative). Συμμετέχουν φοιτητές/αρχάριοι χωρίς προηγούμενη εξειδίκευση σε penetration testing. Μετρώνται: χρόνος ολοκλήρωσης ανά πίστα, αριθμός προσπαθειών/λάθους, χρήση hints, ποσοστό επιτυχίας, ρυθμός εγκατάλειψης. Για τη μάθηση, εφαρμόζεται pre/post τεστ μικρής κλίμακας με ίδια δομή ερωτήσεων (matched items) για να εκτιμηθεί η απόκτηση γνώσεων. Η ευχρηστία αξιολογείται με System Usability Scale (SUS), ενώ η γνωστική επιβάρυνση με NASA-TLX. Επιπλέον, καταγράφεται η αλληλεπίδραση με τον προσαρμοστικό πράκτορα (agent traces) για να αναλυθεί αν η προσαρμογή οδηγεί σε καλύτερη εμπειρία χωρίς μείωση της δυσκολίας-στόχου.

**Μετρήσιμα αποτελέσματα.** Αναμένονται στατιστικά σημαντική βελτίωση στα pre/post σκορ γνώσεων, αποδεκτή ευχρηστία (SUS ≥ 70), μέτρια/χαμηλή γνωστική επιβάρυνση, καθώς και συσχέτιση μεταξύ στρατηγικής χρήσης hints και επιτυχούς ολοκλήρωσης. Η αξιολόγηση θα τεκμηριώσει επίσης ότι ο προσαρμοστικός παράγοντας δεν απλοποιεί μηχανικά το παιχνίδι, αλλά παρέχει στοχευμένη υποστήριξη (targeted scaffolding), διατηρώντας τα μαθησιακά κριτήρια επιτυχίας.

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)

1. Hendrix, M., Al-Sherbaz, A., Bloom, V. "Game Based Cyber Security Training: Are Serious Games Suitable for Cyber Security Training?" *International Journal of Serious Games*, 2016.
2. Nagarajan, A., et al. "Exploring Game-Based Learning for Cybersecurity Education: A Systematic Literature Review." *ACM Transactions on Computing Education*, 2023.
3. Švábenský, V., Čeleda, P., Vykopal, J., Brišáková, S. "Cybersecurity knowledge and skills taught in Capture the Flag challenges." *Computers & Security* (Elsevier), 2021.
4. Calvo-Morata, A., et al. "Validation of a Cyberbullying Serious Game Using Game Analytics." *IEEE Transactions on Learning Technologies*, 2018.
5. Karagiannis, S., Papaioannou, T., Magkos, E., Tsohou, A. "Game-Based Information Security/Privacy Education and Awareness: Theory and Practice." *EMCIS*, Springer, 2020.
6. Kang, R., Dabbish, L., Fruchter, N., Kiesler, S. "'My Data Just Goes Everywhere:' User Mental Models of the Internet and Implications for Privacy and Security." *USENIX SOUPS*, 2015.
