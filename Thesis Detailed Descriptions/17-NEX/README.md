# 17. NEX — Πλατφόρμα Πληροφοριών Έκθεσης στον Κυβερνοχώρο
### NEX: A Cyber Exposure Intelligence Dashboard Integrating OSINT Providers and Risk Estimation

## Στοιχεία Έργου
- **Πηγαίοι φάκελοι:** `NEX/`, `deploy-nex-repository/` (ενσωματωμένη ανάπτυξη Next.js + PostgreSQL + FastAPI backend + paper)
- **Θεματική περιοχή:** Ασφάλεια δικτύων, OSINT, διαχείριση έκθεσης, εκτίμηση κινδύνου, μηχανική μάθηση
- **Τεχνολογίες:** Next.js, PostgreSQL, Drizzle, OSINT APIs (Shodan/ZoomEye/FOFA), κανόνες κινδύνου στην ενσωματωμένη στοίβα, προαιρετικό FastAPI/Random Forest
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Η εικόνα έκθεσης ενός οργανισμού στο διαδίκτυο συχνά προέρχεται από διάσπαρτες ανοικτές πηγές, χωρίς ενιαία εκτίμηση κινδύνου. Αναπτύσσεται πλατφόρμα πληροφοριών έκθεσης στον κυβερνοχώρο (cyber exposure intelligence) που συγκεντρώνει δεδομένα OSINT και τα συνθέτει σε εύληπτη εικόνα. Μελετώνται οι πηγές έκθεσης — υπηρεσίες σε ανοιχτά δίκτυα, εκτεθειμένα συστήματα —, οι μέθοδοι συλλογής και εμπλουτισμού, καθώς και οι προκλήσεις αξιοπιστίας τους.

Η πλήρης στοίβα (Next.js, PostgreSQL) ενσωματώνει δεδομένα από πολλαπλούς παρόχους, συσχετίζει ευρήματα με γνωστές ευπάθειες και παρακολουθεί ιστορικό σαρώσεων. Στην ενσωματωμένη λειτουργία η εκτίμηση κινδύνου είναι **κανόνες**, όχι εκπαιδευμένο μοντέλο. Το προαιρετικό μονοπάτι FastAPI (Random Forest / LLM agent) αξιολογείται χωριστά και δεν παρουσιάζεται ως ήδη ενεργό στον προεπιλεγμένο πίνακα. Η μετατροπή φυσικής γλώσσας σε ερωτήματα, τα διαπιστευτήρια παρόχων, η απόδοση και η ορθή διαχείριση δεδομένων κρίνουν αν η λύση στέκεται.

Η αξιολόγηση ελέγχει ορθότητα συσχετίσεων, βαθμονόμηση όποιας βαθμολογίας κινδύνου χρησιμοποιείται (κανόνες έναντι ML), απόδοση και ευχρηστία. Συζητούνται ψευδώς θετικά και τα όρια OSINT. Η συλλογή γίνεται μόνο νόμιμα, με GDPR και υπεύθυνη αποκάλυψη. Δεν γίνεται σάρωση τρίτων χωρίς εξουσιοδότηση.

## Αξιολόγηση και σημαντικά αποτελέσματα

**Πώς διεξάγεται.** Οι συσχετίσεις OSINT συγκρίνονται με γνωστά εργαστηριακά ευρήματα, δεν γίνεται σάρωση τρίτων χωρίς εξουσιοδότηση. Αξιολογούνται η βαθμονόμηση του μοντέλου κινδύνου, οι χρόνοι απόκρισης των παρόχων και η ευχρηστία του πίνακα, με καταγραφή των ψευδώς θετικών.

**Αποτελέσματα που μετράνε.** Ακρίβεια εμπλουτισμού, σταθερότητα βαθμολογίας κινδύνου, κάλυψη παρόχων και νομική/δεοντολογική οριοθέτηση της συλλογής.

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)
1. Durumeric, Z., et al. "ZMap: Fast Internet-wide Scanning and Its Security Applications." *USENIX Security*, 2013.
2. Durumeric, Z., et al. "The Matter of Heartbleed." *ACM Internet Measurement Conference (IMC)*, 2014.
3. Pastor-Galindo, J., et al. "The Not Yet Exploited Goldmine of OSINT: Opportunities, Open Challenges and Future Trends." *IEEE Access*, 2020.
4. Tabatabaei, F., Wells, D. "OSINT in the Context of Cyber-Security." In *Open Source Intelligence Investigation*, Springer, 2016.
5. Mavroeidis, V., Bromander, S. "Cyber Threat Intelligence Model: An Evaluation of Taxonomies, Sharing Standards, and Ontologies." *IEEE EISIC*, 2017.
6. Kanakaris, N., et al. "Making Sense of Phishing Attacks with AI." *IEEE International Conference on Cyber Security and Resilience*, 2022.
