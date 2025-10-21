

 const questions = [
      {
        category: "Żegluga śródlądowa",
        question: "2. Jaka jest typowa wielkość barki rzecznej w Polsce",
        answers: [
          "300 ton",
          "500 ton",
          "1500 ton"
        ],
        correct: "500 ton"

      },
      {
        category: "Żegluga śródlądowa",
        question: "4. W Europie największy port rzeczny jako centrum logistyczne znajduje się w",
        answers: [
                    
          "Rotterdamie",
          "Duisburgu",
          "Paryżu"
        ],
        correct: "Duisburgu"
      },
      {
        category: "Żegluga śródlądowa",
        question:"6. W Polsce udział transportu wodnego śródlądowego w obsłudze potrzeb przewozowych waha się w granicach",
        answers:[
        "1%",
        "5%",
        "10%"],
        correct: "1%"
      },
      {
        category: "Żegluga śródlądowa",
        question:"7. Największym armatorem żeglugi śródlądowej w Polsce jest",
        answers:[
        "żegluga Bydgoska SA",
        "P.P. Żegluga Szczecińska",
        "Odratrans"],
        correct: "Odratrans"
      },
      {
        category: "Żegluga śródlądowa",
        question: "8. W strukturze przewozów w transporcie wodnym śródlądowym w Polsce dominują:",
        answers: [
          "Piasek, żwir i kamienie",
          "Węgiel i rudy metali",
          "Ropa naftowa i jej przetwory"
        ],
        correct: "Piasek, żwir i kamienie"
      },
      {
        category: "Żegluga śródlądowa",
        question: "9. W strukturze rodzajowej floty żeglugi śródlądowej w Polsce dominuje:",
        answers: [
          "Flota z własnym napędem",
          "Flota pchana",
          "Flota holowana"
        ],
        correct: "Flota pchana"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*10. Jakie są obecne tendencje w Polsce dotyczące portów rzecznych?",
        answers: [
          "Zwiększanie liczby i obrotów portów rzecznych",
          "Zmniejszanie się liczby i obrotów portów rzecznych",
          "Brak zmian w liczbie i obrotach portów rzecznych"
        ],
        correct: "Zmniejszanie się liczby i obrotów portów rzecznych"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*11a. Przewozy krajowe w Polsce uregulowane są w:",
        answers: [
          "Ustawie Prawo przewozowe",
          "Kodeksie Morskim",
          "Umowach międzynarodowych"
        ],
        correct: "Ustawie Prawo przewozowe"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*11b. Przewozy międzynarodowe w Polsce uregulowane są w:",
        answers: [
          "Ustawie Prawo przewozowe",
          "Kodeksie Morskim i umowach międzynarodowych",
          "Rozporządzeniu Ministra Transportu"
        ],
        correct: "Kodeksie Morskim i umowach międzynarodowych"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*12. Wymogi w zakresie kwalifikacji załogi w żegludze śródlądowej obejmują:",
        answers: [
          "Patent Kanałowy, Reński, Łabski",
          "Tylko Patent Kanałowy",
          "Patent Morski"
        ],
        correct: "Patent Kanałowy, Reński, Łabski"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*13. Standardowa wielkość barki rzecznej w Europie Zachodniej wynosi:",
        answers: [
          "500 ton",
          "1000 ton",
          "1500 ton"
        ],
        correct: "1500 ton"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*15. Udział przewozów kontenerów w żegludze śródlądowej w Polsce wynosi:",
        answers: [
          "0%",
          "5%",
          "10%"
        ],
        correct: "0%"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*16. Całkowita długość śródlądowych dróg wodnych w Polsce wynosi:",
        answers: [
          "321,5 km",
          "3767,8 km",
          "5121,8 km"
        ],
        correct: "3767,8 km"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*17. Tylko ile procent dróg wodnych w Polsce ma znaczenie międzynarodowe?",
        answers: [
          "5,5%",
          "20%",
          "50%"
        ],
        correct: "5,5%"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*18. Największa inwestycja wodna w Polsce to:",
        answers: [
          "Budowa stopnia wodnego w Malczycach",
          "Budowa portu w Szczecinie",
          "Modernizacja Kanału Gliwickiego"
        ],
        correct: "Budowa stopnia wodnego w Malczycach"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*19. System informatyczny RIS w Polsce działa na:",
        answers: [
          "Górnej Odrze",
          "Dolnej Odrze",
          "Wiśle"
        ],
        correct: "Dolnej Odrze"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*21. Dostęp do rynku żeglugowego w Polsce mają:",
        answers: [
          "Tylko osoby prawne",
          "Osoby prawne i fizyczne oraz nie mające osobowości prawnej",
          "Osoby legitymujące się zaświadczeniem o posiadaniu kompetencji zawodowych"
        ],
        correct: "Osoby legitymujące się zaświadczeniem o posiadaniu kompetencji zawodowych"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*22. Wymóg zdolności zawodowej nie obowiązuje w przypadku:",
        answers: [
          "Dróg wodnych nieżeglownych, przewozów na potrzeby własne, statków do 200 ton i promów",
          "Transportu międzynarodowego",
          "Transportu kontenerowego"
        ],
        correct: "Dróg wodnych nieżeglownych, przewozów na potrzeby własne, statków do 200 ton i promów"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*23. Najważniejszym dokumentem przewozowym w żegludze śródlądowej jest:",
        answers: [
          "Konosament",
          "Dokument załadunkowy",
          "Raport pomiaru barki"
        ],
        correct: "Konosament"
      },
      {
        category: "Żegluga śródlądowa",
        question: "*25. Przewozy ładunków niebezpiecznych w Polsce od 2010 r. regulowane są przez przepisy:",
        answers: [
          "ADN, tylko w przewozach międzynarodowych",
          "Ustawę Prawo Przewozowe",
          "Kodeks Morski"
        ],
        correct: "ADN, tylko w przewozach międzynarodowych"
      },
      {
        category: "Żegluga śródlądowa",
        question: "26. Ustawa Prawo Przewozowe ma zastosowanie w transporcie wodnym śródlądowym do przewozów:",
        answers: [
          "Krajowych",
          "Międzynarodowych",
          "Krajowych i międzynarodowych"
        ],
        correct: "Krajowych i międzynarodowych"
      },
      {
        category: "Żegluga śródlądowa",
        question: "27. Podstawowym dokumentem technicznym warunkującym dopuszczenie statku do żeglugi jest:",
        answers: [
          "Karta rejestracyjna statku",
          "Świadectwo zdolności żeglugowej",
          "Świadectwo klasyfikacyjne PRS"
        ],
        correct: "Świadectwo zdolności żeglugowej"
      },
      {
        category: "Żegluga śródlądowa",
        question: "29. Udział przewozów międzynarodowych w przewozach ogółem żeglugi śródlądowej w Polsce wynosi aktualnie około:",
        answers: [
          "50%",
          "70%",
          "80%"
        ],
        correct: "80%"
      },
      {
        category: "Żegluga śródlądowa",
        question: "30. Bezpośredni nadzór administracyjny nad śródlądowymi drogami wodnymi w Polsce należy do:",
        answers: [
          "Ministerstwa Infrastruktury",
          "Urzędów Żeglugi Śródlądowej",
          "Regionalnych Zarządów Gospodarki Wodnej"
        ],
        correct: "Ministerstwa Infrastruktury"
      },
      {
        category: "Obsługa celna towarów",
        question: "1. W strukturze jakiego organu władzy wykonawczej działa Służba Celna RP?",
        answers: [
          "Rada Ministrów",
          "Ministerstwo Gospodarki",
          "Ministerstwo Finansów",
          "Ministerstwo Polityki Zagranicznej"
        ],
        correct: "Ministerstwo Finansów"
      },
      {
        category: "Obsługa celna towarów",
        question: "2. Czy do zadań nałożonych na Służbę Celną przez ustawę należy kontrola przestrzegania legalności wykonywania pracy przez cudzoziemców?",
        answers: [
          "Tak",
          "Nie"
        ],
        correct: "Nie"
      },
      {
        category: "Obsługa celna towarów",
        question: "4. Prawo celne Unii Europejskiej (ustrój celny UE) oparte jest na:",
        answers: [
          "Suwerennym decydowaniu krajów członkowskich o polityce celnej",
          "Unii celnej"
        ],
        correct: "Unii celnej"
      },
      {
        category: "Obsługa celna towarów",
        question: "5. Przedstawiciel bezpośredni działa:",
        answers: [
          "we własnym imieniu i na rzecz osoby reprezentowanej",
          "w imieniu i na rzecz osoby reprezentowanej",
          "we własnym imieniu i na swoją rzecz"
        ],
        correct: "w imieniu i na rzecz osoby reprezentowanej"
      },
      {
        category: "Obsługa celna towarów",
        question: "14. Czy rejestracja podmiotów, mających siedzibę lub miejsce zamieszkania na terytorium UE, biorących udział w międzynarodowej wymianie towarowej, w systemie EORI jest obowiązkowa?",
        answers: [
          "tak",
          "nie"
        ],
        correct: "tak"
      },
      {
        category: "Obsługa celna towarów",
        question: "15. Czy zgłoszenia celnego towaru do wybranej procedury celnej może jako przedstawiciel zgłaszającego dokonać inna osoba niż agent celny, wpisany na listę agentów prowadzoną przez Dyrektora IC w Warszawie?",
        answers: [
          "tak",
          "nie"
        ],
        correct: "tak"
      },
      {
        category: "Obsługa celna towarów",
        question: "16. Wybór przeznaczenia celnego, jakie zostanie nadane towarowi przedstawionemu organowi celnemu, lub procedury, do jakiej zostanie on zgłoszony, jest:",
        answers: [
          "uzależniony od dyspozycji organu celnego",
          "zależny od zaleceń innych organów",
          "wolnym wyborem zgłaszającego, wymagającym spełnienia określonych wymagań"
        ],
        correct: "wolnym wyborem zgłaszającego, wymagającym spełnienia określonych wymagań"
      },
      {
        category: "Obsługa celna towarów",
        question: "17. Czy rejestracja podmiotów biorących udział w obsłudze celnej towarów (EORI) jest obowiązkowo wymagana?",
        answers: [
          "tak",
          "nie"
        ],
        correct: "tak"
      },
      {
        category: "Obsługa celna towarów",
        question: "19. Czy podmiot posiadający świadectwo AEO musi każdorazowo poddawać się procedurze weryfikacyjnej ubiegając się o pozwolenie na korzystanie z procedur uproszczonych?",
        answers: [
          "tak",
          "nie"
        ],
        correct: "nie"
      },
      {
        category: "Obsługa celna towarów",
        question: "20. Polskim obszarem celnym jest:",
        answers: [
          "Obszar lądowy kraju",
          "Obszar lądowy kraju i wody wewnętrzne",
          "Terytorium Rzeczypospolitej Polskiej"
        ],
        correct: "Terytorium Rzeczypospolitej Polskiej"
      },
      {
        category: "Obsługa celna towarów",
        question: "21. Zgłoszenie celne to:",
        answers: [
          "Druk, na którym zgłaszane są towary do procedury celnej",
          "czynność, poprzez którą osoba wyraża, w wymaganej formie i w określony sposób zamiar objęcia towaru określoną procedurą celną",
          "czynności związane z dostarczeniem towarów do urzędu celnego"
        ],
        correct: "czynność, poprzez którą osoba wyraża, w wymaganej formie i w określony sposób zamiar objęcia towaru określoną procedurą celną"
      },
      {
        category: "Obsługa celna towarów",
        question: "22. Procedurą celną jest:",
        answers: [
          "powrotny wywóz towaru poza polski obszar celny",
          "tranzyt",
          "rewizja celna towaru"
        ],
        correct: "tranzyt"
      },
      {
        category: "Obsługa celna towarów",
        question: "24. Inne środki taryfowe to:",
        answers: [
          "opłaty rolne i inne należności przywozowe ustanowione w ramach polityki rolnej",
          "zawieszenie w całości lub w części poboru ceł, kontyngenty taryfowe i plafony taryfowe",
          "cła antydumpingowe"
        ],
        correct: "zawieszenie w całości lub w części poboru ceł, kontyngenty taryfowe i plafony taryfowe"
      },
      {
        category: "Obsługa celna towarów",
        question: "33. Kto wydaje decyzję uznającą zgłoszenie celne za prawidłowe?",
        answers: [
          "Funkcjonariusz celny",
          "Naczelnik Urzędu Celnego",
          "Dyrektor Izby Celnej"
        ],
        correct: "Naczelnik Urzędu Celnego"
      },
      {
        category: "Obsługa celna towarów",
        question: "34. Kto wydaje pozwolenie na przywóz lub wywóz towarów?",
        answers: [
          "Naczelnik Urzędu Celnego",
          "Minister do spraw Finansów Publicznych",
          "Minister do spraw Gospodarki lub Prezes Agencji Rynku Rolnego"
        ],
        correct: "Minister do spraw Gospodarki lub Prezes Agencji Rynku Rolnego"
      },
      {
        category: "Obsługa celna towarów",
        question: "37. Wykonując dozór celny i kontrolę celną organ celny nie może:",
        answers: [
          "Zatrzymywać i kontrolować środki transportu",
          "Dokonywać oględzin i rewizji towarów",
          "Orzekać przepadek towaru"
        ],
        correct: "Orzekać przepadek towaru"
      },
      {
        category: "Obsługa celna towarów",
        question: "38. Zawarte w taryfie celnej stawki celne obniżone stosuje się do towarów przywożonych z krajów:",
        answers: [
          "Z którymi Polska zawarła porozumienia o tworzeniu stref wolnego handlu",
          "Rozwijających się",
          "Które są członkami WTO"
        ],
        correct: "Z którymi Polska zawarła porozumienia o tworzeniu stref wolnego handlu"
      },
      {
        category: "Obsługa celna towarów",
        question: "47. Uprawnienia AEO obowiązują z takim samym skutkiem we wszystkich krajach:",
        answers: [
          "tak",
          "nie"
        ],
        correct: "tak"
      },
      {
        category: "Transport drogowy",
        question: "1. Czy przewoźnik odpowiada za szkodę w przesyłce w przypadku użycia pojazdów otwartych nie przykrytych opończą, jeżeli to użycie było wyraźnie uzgodnione i zaznaczone w liście przewozowym?",
        answers: [
          "Tak",
          "Nie",
          "Tylko w określonych przypadkach"
        ],
        correct: "Nie"
      },
      {
        category: "Transport drogowy",
        question: "2. Dowodem zawarcia umowy przewozu jest list CMR. Czy brak lub utrata listu CMR wpływa na istnienie czy ważność umowy?",
        answers: [
          "Ma wpływ",
          "Nie ma wpływu",
          "To zależy od sytuacji"
        ],
        correct: "Nie ma wpływu"
      },
      {
        category: "Transport drogowy",
        question: "3. Po jakim czasie w przewozach międzynarodowych, w przypadku braku ustalenia terminu dostawy, przesyłkę uważa się za zaginioną?",
        answers: [
          "Po 30 dniach",
          "Po 60 dniach",
          "Po 90 dniach"
        ],
        correct: "Po 60 dniach"
      },
      {
        category: "Transport drogowy",
        question: "4. W jakim terminie wg CMR opóźnienie dostawy może stanowić podstawę do odszkodowania, gdy zastrzeżenie zostało skierowane na piśmie?",
        answers: [
          "7 dni",
          "14 dni",
          "21 dni"
        ],
        correct: "21 dni"
      },
      {
        category: "Transport drogowy",
        question: "5a. Gdzie są uregulowane prawa i obowiązki stron zawierających umowę przewozu w transporcie samochodowym w przewozach krajowych?",
        answers: [
          "W Kodeksie Cywilnym, Regulaminie przewozów towarowych, w ustawie prawo przewozowe",
          "W Kodeksie Cywilnym, w ustawie prawo przewozowe",
          "W Regulaminie przewozów towarowych, w ustawie prawo przewozowe"
        ],
        correct: "W Kodeksie Cywilnym, w ustawie prawo przewozowe"
      },
      {
        category: "Transport drogowy",
        question: "5b. Gdzie są uregulowane prawa i obowiązki stron zawierających umowę przewozu w transporcie samochodowym w przewozach międzynarodowych?",
        answers: [
          "w Konwencji CMR, ustawie prawo przewozowe w odniesieniu do kwestii, które nie znalazły regulacji w Konwencji CMR",
          "w Konwencji TIR, ATA i ADR",
          "w ustawie o transporcie drogowym"
        ],
        correct: "w Konwencji CMR, ustawie prawo przewozowe w odniesieniu do kwestii, które nie znalazły regulacji w Konwencji CMR"
      },
      {
        category: "Transport drogowy",
        question: "6. Czy licencja na wykonywanie przewozów drogowych może być cofnięta przewoźnikowi, który rażąco lub wielokrotnie narusza przepisy w zakresie dopuszczalnej masy nacisków osi lub ciężaru pojazdów?",
        answers: [
          "Tak",
          "Nie",
          "Tak, tylko w przypadku pojazdów powyżej 7,5 tony"
        ],
        correct: "Tak"
      },
      {
        category: "Transport drogowy",
        question: "7. Ile wynosi okres przedawnienia roszczeń wynikających z CMR?",
        answers: [
          "1 rok lub 3 lata w przypadku świadomego działania",
          "7 miesięcy od umówionego terminu dostawy",
          "Zawsze 1 rok"
        ],
        correct: "1 rok lub 3 lata w przypadku świadomego działania"
      },
      {
        category: "Transport drogowy",
        question: "8. W jakim terminie powinien złożyć reklamację odbiorca, który przyjął od przewoźnika towar bez zastrzeżeń?",
        answers: [
          "W ciągu 7 dni nie licząc niedziel i dni świątecznych",
          "W ciągu 14 dni",
          "W ciągu miesiąca"
        ],
        correct: "W ciągu 7 dni nie licząc niedziel i dni świątecznych"
      },
      {
        category: "Transport drogowy",
        question: "9. Kto wydaje licencję na wykonywanie międzynarodowego transportu samochodowego?",
        answers: [
          "Główny Inspektor Transportu Drogowego (GITD)",
          "Instytut Transportu Samochodowego (ISN)",
          "Zrzeszenie Międzynarodowych Przewoźników Drogowych (ZMPD)",
          "Minister właściwy ds. Transportu"
        ],
        correct: "Główny Inspektor Transportu Drogowego (GITD)"
      },
      {
        category: "Transport drogowy",
        question: "10. Inspekcja Transportu Drogowego ma prawo kontrolować:",
        answers: [
          "tylko pojazdy wykonujące krajowe i międzynarodowe przewozy drogowe",
          "kierowców i pojazdy wykonujące przewozy drogowe",
          "kierowców, pojazdy i przedsiębiorców wykonujących przewozy drogowe"
        ],
        correct: "kierowców, pojazdy i przedsiębiorców wykonujących przewozy drogowe"
      },
      {
        category: "Transport drogowy",
        question: "11. Jakie zabezpieczenie finansowe jest niezbędne ubiegając się o wydanie licencji na wykonywanie przewozów drogowych?",
        answers: [
          "9000 euro na pierwszy pojazd i po 5000 euro na każdy następny",
          "9000 PLN na pierwszy pojazd i po 5000 PLN na każdy następny",
          "po 5000 euro na każdy pojazd"
        ],
        correct: "9000 euro na pierwszy pojazd i po 5000 euro na każdy następny"
      },
      {
        category: "Transport drogowy",
        question: "12. Czy tytuł prawny do posiadanych samochodów jest warunkiem otrzymania licencji?",
        answers: [
          "Tak",
          "Nie",
          "tylko w przypadku pojazdów leasingowych"
        ],
        correct: "Tak"
      },
      {
        category: "Transport drogowy",
        question: "13. Data ważności karnetu TIR określa:",
        answers: [
          "Ostatni dzień, w którym towar można przedstawić w procedurze wywozu w Urzędzie Celnym",
          "Ostatni dzień posługiwania się karnetem",
          "Ostatni dzień, w którym karnet powinien wrócić do zrzeszenia, które go wydało przewoźnikowi"
        ],
        correct: "Ostatni dzień, w którym towar można przedstawić w procedurze wywozu w Urzędzie Celnym"
      },
      {
        category: "Transport drogowy",
        question: "17. Po ilu dniach od upływu terminu przewozu w przewozach krajowych uważa się przesyłkę za zaginioną, jeżeli nie została dostarczona odbiorcy?",
        answers: [
          "Po 30 dniach",
          "Po 60 dniach",
          "Po 90 dniach"
        ],
        correct: "Po 30 dniach"
      },
      {
        category: "Transport drogowy",
        question: "18. Na jaki okres udziela się licencji na wykonywanie transportu drogowego w Polsce?",
        answers: [
          "Na czas nie krótszy niż 2 lata, nie dłuższy niż 50 lat",
          "25 lat",
          "Na czas nieoznaczony"
        ],
        correct: "Na czas nie krótszy niż 2 lata, nie dłuższy niż 50 lat"
      },
      {
        category: "Transport drogowy",
        question: "19. Czy przewoźnik odpowiada za szkodę w przesyłce w przypadku wadliwego opakowania lub jego braku?",
        answers: [
          "Tak",
          "Nie",
          "W określonych przypadkach"
        ],
        correct: "Nie"
      },
      {
        category: "Transport drogowy",
        question: "*20. Czy w sytuacji posiadania zwykłego karnetu TIR można pod jego osłoną przewieźć towar podwyższonego ryzyka?",
        answers: [
          "Nie można w ogóle",
          "Tak, gdy firma korzysta z karnetów TIR ponad rok",
          "Tak, pod warunkiem złożenia wcześniej zabezpieczenia w wysokości 50 tys. USD"
        ],
        correct: "Tak, pod warunkiem złożenia wcześniej zabezpieczenia w wysokości 50 tys. USD"
      },
      {
        category: "Transport drogowy",
        question: "21. Karnet TIR 14-woletni może być stosowany w przewozie przez:",
        answers: [
          "Pięć granic",
          "Sześć granic",
          "Siedem granic"
        ],
        correct: "Sześć granic"
      },
      {
        category: "Transport drogowy",
        question: "22. Jaka jest maksymalna dopuszczalna masa całkowita pojazdu lub zespołu poruszającego się w Polsce?",
        answers: [
          "32 tony",
          "42 tony (kombinowany, intermodalny, 6 osi - 44 tony)",
          "45 ton"
        ],
        correct: "42 tony (kombinowany, intermodalny, 6 osi - 44 tony)"
      },
      {
        category: "Transport drogowy",
        question: "23. Czy przewóz materiałów utleniających wymaga zastosowania pojazdu wyposażonego zgodnie z konwencją ADR?",
        answers: [
          "Tak",
          "Nie",
          "Tak, w przypadku przewozu tych materiałów w ilości większej niż 1000 kg"
        ],
        correct: "Tak"
      },
      {
        category: "Transport drogowy",
        question: "24. Zgodnie z Konwencją CMR przewoźnik drogowy odpowiada za całkowite lub częściowe zaginięcie towaru lub za jego uszkodzenie:",
        answers: [
          "Które wystąpiło w czasie między przyjęciem towaru, a jego wydaniem",
          "Jeżeli wystawiony został list przewozowy",
          "Jeżeli ilość i rodzaj towaru zostały przez przewoźnika potwierdzone w liście przewozowym"
        ],
        correct: "Które wystąpiło w czasie między przyjęciem towaru, a jego wydaniem"
      },
      {
        category: "Transport drogowy",
        question: "25. Zgodnie z Konwencją CMR kiedy osoba uprawniona / nadawca/ odbiorca może bez dalszych dowodów uważać towar za zaginiony?",
        answers: [
          "Jeżeli nie została ona wydana w ciągu 30 dni po upływie umówionego terminu dostawy, a jeżeli terminu tego nie uzgodniono – w ciągu 60 dni po przyjęciu towaru przez przewoźnika",
          "Niezwłocznie po upływie uzgodnionego terminu dostawy lub 30 dni od momentu przyjęcia towaru do przewozu"
        ],
        correct: "Jeżeli nie została ona wydana w ciągu 30 dni po upływie umówionego terminu dostawy, a jeżeli terminu tego nie uzgodniono – w ciągu 60 dni po przyjęciu towaru przez przewoźnika"
      },
      {
        category: "Transport drogowy",
        question: "26. Czy zgodnie z Konwencją CMR występują ograniczenia kwotowe odpowiedzialności przewoźnika za spowodowaną w trakcie przewozu szkodę w towarze?",
        answers: [
          "Tak",
          "Nie",
          "Częściowo"
        ],
        correct: "Tak"
      },
      {
        category: "Transport drogowy",
        question: "27. Jaki termin przedawnienia roszczeń z tytułu przewozów przyjmuje Konwencja CMR?",
        answers: [
          "Roczny",
          "Trzyletni",
          "Pięcioletni"
        ],
        correct: "Roczny"
      },
      {
        category: "Transport drogowy",
        question: "28. Który egzemplarz listu przewozowego CMR jest na prawach oryginału?",
        answers: [
          "Egzemplarz w posiadaniu nadawcy",
          "Egzemplarz w posiadaniu odbiorcy",
          "Egzemplarz w posiadaniu nadawcy, odbiorcy i przewoźnika"
        ],
        correct: "Egzemplarz w posiadaniu nadawcy, odbiorcy i przewoźnika"
      },
      {
        category: "Transport drogowy",
        question: "29. Kiedy Konwencja CMR ma zastosowanie?",
        answers: [
          "W firmach wykonujących przewóz drogowy transportujących towary pod warunkiem, że miejsca nadania towaru i miejsca przeznaczenia znajdują się w dwóch różnych krajach",
          "W firmach transportowych wykonujących międzynarodowy przewóz drogowy z kraju A do kraju B",
          "Przy przewozach międzynarodowych, tj. gdy miejsce nadania towaru i miejsce przeznaczenia znajdują się w dwóch różnych krajach, z których przynajmniej jeden jest stroną Konwencji CMR"
        ],
        correct: "Przy przewozach międzynarodowych, tj. gdy miejsce nadania towaru i miejsce przeznaczenia znajdują się w dwóch różnych krajach, z których przynajmniej jeden jest stroną Konwencji CMR"
      },
      {
        category: "Transport drogowy",
        question: "30. Czy istnieje możliwość stosowania pojazdów otwartych do przewozu w ramach TIR?",
        answers: [
          "Nie ma takiej możliwości",
          "W przewozach ładunków ciężkich i przestrzennych gdy towary są łatwo rozpoznawalne na podstawie opisu na odcinkach karnetu TIR",
          "W przypadku otrzymania zezwolenia z Generalnej Dyrekcji Dróg Publicznych"
        ],
        correct: "W przewozach ładunków ciężkich i przestrzennych gdy towary są łatwo rozpoznawalne na podstawie opisu na odcinkach karnetu TIR"
      },
      {
        category: "Transport drogowy",
        question: "31. Czego dotyczy procedura T-2 w ramach Wspólnej Procedury Tranzytowej?",
        answers: [
          "Tranzytowego przewozu towarów spoza UE",
          "Tranzytowego przewozu towarów wspólnotowych",
          "Tranzytowego przewozu wszystkich towarów bez względu na ich pochodzenie"
        ],
        correct: "Tranzytowego przewozu towarów wspólnotowych"
      },
      {
        category: "Transport drogowy",
        question: "32. Jakie pojazdy muszą być wyposażone obowiązkowo w tachograf w Polsce?",
        answers: [
          "Powyżej 7,5 tony DMC",
          "Powyżej 3,5 tony DMC wyprodukowane po 31.12.1999r.",
          "Tylko te, które wykonują przewozy międzynarodowe"
        ],
        correct: "Powyżej 3,5 tony DMC wyprodukowane po 31.12.1999r."
      },
      {
        category: "Transport drogowy",
        question: "33. Kierowca wykonujący przewozy międzynarodowe zawsze musi mieć przy sobie i okazywać w razie kontroli tarczę tachografu:",
        answers: [
          "musi mieć przy sobie zapisy z tachografu (karty kierowcy lub wykresówki) za ostatnie 56 dni wstecz",
          "Z bieżącego tygodnia i z ostatniego dnia tygodnia poprzedniego",
          "Z bieżącego tygodnia",
          "Z okresu ostatnich trzech dni"
        ],
        correct: "musi mieć przy sobie zapisy z tachografu (karty kierowcy lub wykresówki) za ostatnie 56 dni wstecz"
      },
      {
        category: "Transport drogowy",
        question: "34. Certyfikat kompetencji zawodowych w transporcie drogowym musi posiadać:",
        answers: [
          "Właściciel firmy",
          "Osoba zarządzająca przedsiębiorstwem",
          "Przynajmniej jedna z osób zarządzających przedsiębiorstwem lub transportem w przedsiębiorstwie"
        ],
        correct: "Przynajmniej jedna z osób zarządzających przedsiębiorstwem lub transportem w przedsiębiorstwie"
      },
      {
        category: "Transport drogowy",
        question: "35. Zgodnie z Konwencją AETR kierowca może prowadzić pojazd 9 godzin:",
        answers: [
          "W czasie pomiędzy dwoma dziennymi odpoczynkami",
          "W ciągu doby",
          "W ciągu 30 godzin"
        ],
        correct: "W ciągu doby"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "1. UCP 600 to:",
        answers: [
          "Zwyczaje dotyczące gwarancji bankowych",
          "Konwencja o umowie sprzedaży towarów",
          "Genewska konwencja wekslowa",
          "Jednolite zwyczaje i praktyka dotyczące akredytyw dokumentowych"
        ],
        correct: "Jednolite zwyczaje i praktyka dotyczące akredytyw dokumentowych"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "2. Kto posiada gestię transportową, jeśli kontrakt został zawarty na warunkach grupy „C” (Incoterms 2000):",
        answers: [
          "Sprzedający",
          "Kupujący",
          "Przewoźnik",
          "Spedytor"
        ],
        correct: "Sprzedający"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "3. Kto podejmuje decyzję o zapłacie za towar, na podstawie dokumentów reprezentujących towar, przy inkasie dokumentowym:",
        answers: [
          "Eksporter",
          "Importer",
          "Bank eksportera",
          "Bank importera"
        ],
        correct: "Importer"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "4. Jeśli w odniesieniu do ilości towaru użyto w akredytywie określenia „około”, to zgodnie z regulacjami Międzynarodowej Izby Handlowej oznacza to:",
        answers: [
          "10% tolerancję",
          "5% tolerancję",
          "Inny poziom tolerancji"
        ],
        correct: "5% tolerancję"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "5. Przy realizacji płatności za pomocą akredytywy dokumentowej w pierwszej kolejności bank bierze pod uwagę:",
        answers: [
          "Postanowienia kontraktu handlowego",
          "Treść akredytywy",
          "Jednolite zwyczaje i praktykę dotyczące akredytyw dokumentowych"
        ],
        correct: "Treść akredytywy"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "6. Jaki termin musi być zawsze określony w akredytywie dokumentowej:",
        answers: [
          "Termin prezentacji dokumentów transportowych w banku",
          "Termin ważności akredytywy dokumentowej",
          "Termin wysyłki towaru"
        ],
        correct: "Termin ważności akredytywy dokumentowej"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "7. Jeśli w treści akredytywy nie określono terminu prezentacji dokumentów w banku, dokument transportowy należy przedstawić nie później niż w ciągu:",
        answers: [
          "10 dni od daty wysyłki",
          "14 dni od daty wysyłki",
          "30 dni od daty wysyłki",
          "21 dni od daty wysyłki"
        ],
        correct: "21 dni od daty wysyłki"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "8. Kto podejmuje decyzję o zapłacie za towar, na podstawie dokumentów reprezentujących towar, przy akredytywie dokumentowej:",
        answers: [
          "Eksporter",
          "Importer",
          "Bank"
        ],
        correct: "Bank"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "9. Jakie określenie terminu płatności weksla unieważnia weksel:",
        answers: [
          "15 kwietnia 2010 roku",
          "Za okazaniem",
          "10 dni po okazaniu",
          "Do 10 lutego 2009 roku"
        ],
        correct: "Do 10 lutego 2009 roku"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "10. Które z wymienionych warunków INCOTERMS 2010 zalecane są przy dostawach towarów w kontenerach:",
        answers: [
          "FOB, FAS",
          "CIF, CIP",
          "FCA, CPT",
          "DES",
          "EXW, FCA, CPT, CIP, DAT, DAP, DDP"
        ],
        correct: "FCA, CPT"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "11. W której grupie formuł INCOTERMS 2000 podział ryzyka straty/uszkodzenia towaru między kupującego i sprzedającego następuje w innym miejscu niż podział kosztów:",
        answers: [
          "E",
          "F",
          "C",
          "D"
        ],
        correct: "C"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "12. Kto ponosi koszty wyładunku towaru ze statku w porcie przeznaczenia przy zastosowaniu formuły CIF:",
        answers: [
          "Zawsze sprzedający",
          "Zawsze kupujący",
          "Sprzedający lub kupujący, zależnie od warunków zawartej przez sprzedającego umowy przewozu"
        ],
        correct: "Sprzedający lub kupujący, zależnie od warunków zawartej przez sprzedającego umowy przewozu"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "13. INCOTERMS regulują stosunki między:",
        answers: [
          "Sprzedającym i kupującym",
          "Sprzedającym i spedytorem",
          "Kupującym a przewoźnikiem",
          "Spedytorem a przewoźnikiem"
        ],
        correct: "Sprzedającym i kupującym"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "14. Ile formuł jest zinterpretowanych w INCOTERMS 2010:",
        answers: [
          "13",
          "20",
          "11",
          "17"
        ],
        correct: "11"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "19. Kto podejmuje decyzję o zapłacie eksporterowi w przypadku akredytywy potwierdzonej:",
        answers: [
          "Importer",
          "Bank importera",
          "Bank eksportera"
        ],
        correct: "Bank eksportera"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "21. Nacjonalizacja towaru jest to:",
        answers: [
          "Zmiana kraju pochodzenia towaru",
          "Zmiana przeznaczenia towaru",
          "Zatrzymanie towaru przez władze kraju eksportera"
        ],
        correct: "Zmiana kraju pochodzenia towaru"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "24. Klauzulę najwyższego uprzywilejowania przyznaje:",
        answers: [
          "Jeden kraj innemu krajowi",
          "Eksporter importerowi na zakup towarów",
          "Importer eksporterowi na sprzedaż towarów"
        ],
        correct: "Jeden kraj innemu krajowi"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "26. Jeśli jednym z dokumentów prezentowanych w ramach inkasa dokumentowego jest weksel trasowany, to kto jest jego wystawcą?",
        answers: [
          "Importer",
          "Eksporter",
          "Bank eksportera",
          "Bank importera"
        ],
        correct: "Eksporter"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "27. Który z poniższych elementów jest niezbędnym elementem weksla, wg genewskiego systemu wekslowego?",
        answers: [
          "Numer weksla",
          "Określenie domicyliata",
          "Określenie awalisty",
          "Określenie remitenta"
        ],
        correct: "Określenie remitenta"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "28. Kto ponosi koszty odprawy celnej wg INCOTERMS 2000:",
        answers: [
          "Zawsze eksporter",
          "Zawsze importer",
          "Eksporter i importer – każdy w swoim kraju",
          "Eksporter odprawy celnej eksportowej, importer odprawy celnej importowej, z wyjątkiem formuł EXW i DDP"
        ],
        correct: "Eksporter odprawy celnej eksportowej, importer odprawy celnej importowej, z wyjątkiem formuł EXW i DDP"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "29. Kto posiada gestię transportową, jeśli kontrakt został zawarty na warunkach grupy „F” INCOTERMS 2000:",
        answers: [
          "Eksporter",
          "Importer",
          "Spedytor",
          "Przewoźnik"
        ],
        correct: "Importer"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "30. Kto posiada gestię transportową, jeśli kontrakt został zawarty na warunkach CFR (Incoterms):",
        answers: [
          "Sprzedający",
          "Kupujący",
          "Przewoźnik",
          "Spedytor"
        ],
        correct: "Sprzedający"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "31. Jakie jest angielskie określenie akredytywy dokumentowej:",
        answers: [
          "Documentary collection",
          "Documentary credit",
          "Bill of exchange",
          "Bill of lading"
        ],
        correct: "Documentary credit"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "32. Jaki termin musi być zawsze określony w akredytywie dokumentowej:",
        answers: [
          "Termin prezentacji dokumentów transportowych w banku",
          "Termin ważności akredytywy dokumentowej",
          "Termin wysyłki towaru"
        ],
        correct: "Termin ważności akredytywy dokumentowej"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "33. Kto posiada gestię transportową, jeśli kontrakt zawarto na warunkach FCA 2010:",
        answers: [
          "Sprzedający",
          "Kupujący",
          "Spedytor",
          "Przewoźnik krajowy"
        ],
        correct: "Kupujący"
      },
      {
        category: "Warunki dostaw oraz rozliczeń w handlu zagranicznym",
        question: "34. Który z wymienionych dokumentów transportowych jest zbywalny i stanowi tytuł do towaru:",
        answers: [
          "Morski list przewozowy",
          "Bill of lading",
          "CMR",
          "CIM"
        ],
        correct: "Bill of lading"
      },
      {
        category: "Transport lotniczy",
        question: "1. Czy zasady wolności żeglugi powietrznej (zasada otwartego nieba) sformułowano w Konwencji Chicagowskiej z 1944 r.?",
        answers: [
          "Zaczęły obowiązywać w chwili jej podpisania",
          "Zaczęła obowiązywać tylko na terenie Europy",
          "W ogóle nie weszła w życie",
          "Jest stopniowo wdrażana przez państwa, które ją podpisały"
        ],
        correct: "Jest stopniowo wdrażana przez państwa, które ją podpisały"
      },
      {
        category: "Transport lotniczy",
        question: "2. Przelicznik wagi i objętości w transporcie lotniczym oznacza, że za równowartość 1 m3 przyjmuje się:",
        answers: [
          "1 tonę",
          "330 kg",
          "250 kg",
          "167 kg"
        ],
        correct: "167 kg"
      },
      {
        category: "Transport lotniczy",
        question: "3. Status „C” na AWB oznacza:",
        answers: [
          "Przesyłkę celną",
          "Przesyłkę wewnątrz Unii Europejskiej",
          "Przesyłkę niebezpieczną",
          "Przesyłkę wartościową"
        ],
        correct: "Przesyłkę wewnątrz Unii Europejskiej"
      },
      {
        category: "Transport lotniczy",
        question: "4. Do Europejskiej Konferencji Lotnictwa Cywilnego (ECAC) należą:",
        answers: [
          "Wszystkie kraje europejskie",
          "Tylko kraje Unii Europejskiej",
          "Wszystkie kraje europejskie oprócz Rosji i Białorusi",
          "Wszystkie kraje europejskie oprócz Rosji i Białorusi, ponadto Armenia, Azerbejdżan i Gruzja"
        ],
        correct: "Wszystkie kraje europejskie oprócz Rosji i Białorusi, ponadto Armenia, Azerbejdżan i Gruzja"
      },
      {
        category: "Transport lotniczy",
        question: "5. Konwencja Montrealska z 1999 roku:",
        answers: [
          "Jest aktem równoległym i przyjęcie go nie pociąga obowiązku wypowiadania Konwencji Warszawskiej",
          "Zastępuje Konwencję Warszawską z 1929 r.",
          "Dotyczy innych spraw niż Konwencja Warszawska",
          "Nie została ratyfikowana przez Polskę"
        ],
        correct: "Jest aktem równoległym i przyjęcie go nie pociąga obowiązku wypowiadania Konwencji Warszawskiej"
      },
      {
        category: "Transport lotniczy",
        question: "6. Ustawa Prawo Lotnicze z 2002 r.:",
        answers: [
          "Dotyczy wyłącznie lotnictwa państwowego",
          "Odnosi się do lotnictwa cywilnego",
          "Nie dotyczy lotnictwa prywatnego",
          "Została uchylona po wyborach w 2005 r."
        ],
        correct: "Odnosi się do lotnictwa cywilnego"
      },
      {
        category: "Transport lotniczy",
        question: "7. IATA jest:",
        answers: [
          "Przymusowym związkiem linii lotniczych",
          "Dobrowolną organizacją przedsiębiorstw związanych z transportem lotniczym",
          "Przymusową organizacją przedsiębiorstw związanych z transportem lotniczym",
          "Dobrowolną organizacją spedytorów lotniczych"
        ],
        correct: "Dobrowolną organizacją przedsiębiorstw związanych z transportem lotniczym"
      },
      {
        category: "Transport lotniczy",
        question: "8. Angielski skrót systemu rozliczeniowo–księgowego Cargo to:",
        answers: [
          "CCAS",
          "CAAS",
          "CASS",
          "SSAC"
        ],
        correct: "CASS"
      },
      {
        category: "Transport lotniczy",
        question: "9. Przesyłki lotnicze zwykłe to:",
        answers: [
          "Przesyłki przewożone na podstawie pojedynczego listu przewozowego",
          "Przesyłki ustawione na jednej palecie lotniczej",
          "Przesyłki tego samego rodzaju wysyłane w równych odstępach czasu",
          "Przesyłki pocztowe"
        ],
        correct: "Przesyłki przewożone na podstawie pojedynczego listu przewozowego"
      },
      {
        category: "Transport lotniczy",
        question: "10. Lotniczy list przewozowy składa się:",
        answers: [
          "Z oryginału i min. 16 kopii",
          "Z oryginału i min. 8 kopii",
          "Z trzech oryginałów i min. 8 kopii",
          "Z trzech oryginałów i trzech kopii"
        ],
        correct: "Z trzech oryginałów i min. 8 kopii"
      },
      {
        category: "Transport lotniczy",
        question: "11. Najpopularniejszy samolot transportowy Boeing 747-400F potrafi przenieść jednorazowo:",
        answers: [
          "52 tony",
          "87 ton",
          "123 tony",
          "507 ton"
        ],
        correct: "123 tony"
      },
      {
        category: "Transport lotniczy",
        question: "12. Do obowiązku spedytora lotniczego nie należy:",
        answers: [
          "Analiza kosztów własnych i negocjowanie stawek z przewoźnikami",
          "Rezerwacja rejsów i wystawianie dokumentów przewozowych",
          "Organizowanie odpraw celnych",
          "Wypełnianie deklaracji nadawcy dot. materiałów niebezpiecznych"
        ],
        correct: "Wypełnianie deklaracji nadawcy dot. materiałów niebezpiecznych"
      },
      {
        category: "Transport lotniczy",
        question: "13. Międzynarodowy lotniczy list przewozowy wystawiany jest w odpowiedniej ilości oryginałów i kopii. Ilość oryginałów wynosi:",
        answers: [
          "3 egz.",
          "5 egz.",
          "7 egz."
        ],
        correct: "3 egz."
      },
      {
        category: "Transport lotniczy",
        question: "14. Za prawidłowość i kompletność informacji podanych w międzynarodowym lotniczym liście przewozowym odpowiada:",
        answers: [
          "Przewoźnik",
          "Spedytor",
          "Nadawca"
        ],
        correct: "Nadawca"
      },
      {
        category: "Transport lotniczy",
        question: "15. ICAO jest organizacją:",
        answers: [
          "Spedytorów",
          "Przewoźników",
          "Państwowych władz lotniczych",
          "Producentów samolotów"
        ],
        correct: "Państwowych władz lotniczych"
      },
      {
        category: "Transport lotniczy",
        question: "16. Siedziba główna IATA mieści się w:",
        answers: [
          "Nowym Jorku",
          "Genewie",
          "Singapurze",
          "Montrealu"
        ],
        correct: "Montrealu"
      },
      {
        category: "Transport lotniczy",
        question: "17. Stała Organizacja Międzynarodowego Lotnictwa Cywilnego – ICAO została utworzona na Konferencji:",
        answers: [
          "W Warszawie w 1929 r.",
          "W Chicago w 1944 r.",
          "W Paryżu w 1919 r."
        ],
        correct: "W Chicago w 1944 r."
      },
      {
        category: "Transport lotniczy",
        question: "*18. Zrzeszenie Międzynarodowego Transportu Lotniczego – IATA zajmuje się głównie:",
        answers: [
          "Zagadnieniami stałej łączności i telekomunikacji na potrzeby lotnictwa cywilnego",
          "Warunkami przewozu i systemu taryfowego oraz wzorami dokumentów w transporcie lotniczym",
          "Zagadnieniami ubezpieczeń lotniczych"
        ],
        correct: "Warunkami przewozu i systemu taryfowego oraz wzorami dokumentów w transporcie lotniczym"
      },
      {
        category: "Transport lotniczy",
        question: "19. Taryfy towarowe w międzynarodowym transporcie lotniczym opracowywane są przez:",
        answers: [
          "Rządy poszczególnych państw",
          "Stowarzyszenia producentów towarów",
          "Zrzeszenie Międzynarodowego Transportu Lotniczego"
        ],
        correct: "Zrzeszenie Międzynarodowego Transportu Lotniczego"
      },
      {
        category: "Transport lotniczy",
        question: "20. Stawki za przewóz wyspecyfikowanych w taryfie lotniczej towarów noszą nazwę:",
        answers: [
          "Stawek klasyfikacyjnych",
          "Stawek rodzajowych",
          "Stawek normalnych"
        ],
        correct: "Stawek rodzajowych"
      },
      {
        category: "Transport lotniczy",
        question: "21. W razie uszkodzenia towaru odbiorca winien złożyć reklamację do przewoźnika najpóźniej w ciągu:",
        answers: [
          "7 dni",
          "14 dni",
          "21 dni"
        ],
        correct: "14 dni"
      },
      {
        category: "Transport lotniczy",
        question: "22. Prawo dochodzenia odszkodowania wobec przewoźnika lotniczego wygasa, jeżeli powództwo nie zostało wniesione w okresie:",
        answers: [
          "1 roku",
          "2 lat",
          "5 lat"
        ],
        correct: "2 lat"
      },
      {
        category: "Transport lotniczy",
        question: "23. Lotnicze przesyłki skonsolidowane organizowane są przy pomocy dokumentu zwanego:",
        answers: [
          "House Air Waybill",
          "Manifest lotniczy",
          "Czarter"
        ],
        correct: "House Air Waybill"
      },
      {
        category: "Transport lotniczy",
        question: "24. Unormowanie zagadnień dotyczących dokumentów przewozowych i odpowiedzialności przewoźnika lotniczego było celem:",
        answers: [
          "Konwencji Chicagowskiej z 1944 r.",
          "Organizacji Międzynarodowego Lotnictwa Cywilnego – ICAO",
          "Konwencji Warszawskiej z 1929 r."
        ],
        correct: "Konwencji Warszawskiej z 1929 r."
      },
      {
        category: "Transport lotniczy",
        question: "25. Do kategorii towarów wartościowych w przewozach lotniczych zaliczane są towary, których wartość za 1 kg przekracza:",
        answers: [
          "USD 1.000",
          "USD 5.000",
          "USD 8.000"
        ],
        correct: "USD 1.000"
      },
      {
        category: "Transport lotniczy",
        question: "26. Dowodem zawarcia umowy w transporcie lotniczym jest:",
        answers: [
          "Lotniczy list przewozowy AWB",
          "Rachunek za przewóz towaru",
          "Certyfikat ubezpieczenia przesyłki"
        ],
        correct: "Lotniczy list przewozowy AWB"
      },
      {
        category: "Transport lotniczy",
        question: "27. Władzą lotnictwa cywilnego w Polsce jest:",
        answers: [
          "Główny Inspektorat Lotnictwa Cywilnego",
          "Minister właściwy do spraw transportu",
          "Instytut Lotnictwa",
          "Przedsiębiorstwo Porty Lotnicze"
        ],
        correct: "Minister właściwy do spraw transportu"
      },
      {
        category: "Transport lotniczy",
        question: "28. Stosunki prawne z zakresu lotnictwa cywilnego w Polsce reguluje:",
        answers: [
          "Prawo lotnicze",
          "Kodeks cywilny",
          "Prawo przewozowe",
          "Konwencja Warszawska"
        ],
        correct: "Prawo lotnicze"
      },
      {
        category: "Transport lotniczy",
        question: "29. Konwencja Warszawska nie dotyczy przewozu:",
        answers: [
          "Żywych zwierząt",
          "Osób",
          "Materiałów niebezpiecznych",
          "Poczty"
        ],
        correct: "Poczty"
      },
      {
        category: "Transport lotniczy",
        question: "*30. LOT Cargo w przewozach towarów działa w ramach:",
        answers: [
          "Star Alliance",
          "Quayflyer",
          "Air Alliance",
          "Zawiera umowy z różnymi partnerami"
        ],
        correct: "Star Alliance"
      },
      {
        category: "Transport lotniczy",
        question: "31. Statusu lotniska międzynarodowego nie posiada:",
        answers: [
          "Goleniów",
          "Jasionka",
          "Lublinek",
          "Pyrzowice"
        ],
        correct: "Lublinek"
      },
      {
        category: "Transport lotniczy",
        question: "32. ULD to:",
        answers: [
          "Urządzenia do załadunku samolotów",
          "Rodzaj znormalizowanych opakowań",
          "Sprzęt ratunkowy",
          "Urządzenie nawigacyjne"
        ],
        correct: "Rodzaj znormalizowanych opakowań"
      },
      {
        category: "Transport lotniczy",
        question: "33. Transport materiałów niebezpiecznych w międzynarodowym transporcie lotniczym regulowany jest:",
        answers: [
          "Instrukcją IATA",
          "Rozporządzeniem Ministra właściwego do spraw transportu",
          "Instrukcją Prezesa Urzędu Lotnictwa Cywilnego",
          "Każdy przewoźnik reguluje to według swego uznania"
        ],
        correct: "Instrukcją IATA"
      },
      {
        category: "Transport lotniczy",
        question: "34. Ograniczenie odpowiedzialności przewoźnika za uszkodzenie towaru następuje w przypadku:",
        answers: [
          "Niewłaściwego załadowania przesyłki do samolotu przez agenta handlingowego",
          "Wady własnej towaru",
          "Czynników atmosferycznych",
          "Opóźnienia w transporcie"
        ],
        correct: "Wady własnej towaru"
      },
      {
        category: "Transport lotniczy",
        question: "35. Kod AWA oznacza opłatę pobraną przez:",
        answers: [
          "Agenta za odprawę celną",
          "Przewoźnika za handling",
          "Przewoźnika za AWB",
          "Agenta za AWB"
        ],
        correct: "Agenta za AWB"
      }




    ];

    let mode = null;
    let currentQ = null;
    let examQuestions = [];
    let examIndex = 0;
    let userAnswers = [];
    let state = 0
    let shuffledQuestions = [];
    let currentQuestionIndex = 0;
    let points = 0
    let chosenCategory = "";

    const uniqueCategories = [...new Set(questions.map(item => item.category))];
    
    uniqueCategories.forEach(category => {
      const target = document.getElementById("select_category")
      const option = document.createElement("option")
      option.value = category
      option.innerText = category
      target.appendChild(option)
    })

    const target = document.getElementById("select_category")
    const option = document.createElement("option")
    option.value = "Wszystkie"
    option.innerText = "Wszystkie"
    target.appendChild(option)

    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    function startLearn() {
      points = 0
      mode = "learn";
      document.getElementById("counter").style.display = "block";
      document.getElementById("menu").style.display = "none";
      document.getElementById("quiz").style.display = "block"
      chosenCategory = document.getElementById("select_category").value
      shuffledQuestions = shuffle([...questions]);
      if(chosenCategory != "Wszystkie"){
        shuffledQuestions = shuffledQuestions.filter(item => item.category == chosenCategory)
      }
      firstLearnQuestion();
    }

    function nextLearnQuestion() {
      if(questions.filter(item => item.category == chosenCategory).length - shuffledQuestions.length + 1 >= questions.filter(item => item.category == chosenCategory).length){
        showResult();
        return;
      }
      if(chosenCategory == "Wszystkie"){
        document.getElementById("counter").innerText = `${questions.length - shuffledQuestions.length + 1}/${questions.length}`
      }
      shuffledQuestions.shift();
      document.getElementById("points").innerText = points
      document.getElementById("counter").innerText = `${questions.filter(item => item.category == chosenCategory).length - shuffledQuestions.length + 1}/${questions.filter(item => item.category == chosenCategory).length}`
      state = 0
      const q = shuffledQuestions[0];
      currentQ = { ...q, answers: shuffle([...q.answers]) };
      renderQuestion(currentQ);
    }

    function firstLearnQuestion() {
      currentQuestionIndex = 0;
      document.getElementById("points").innerText = points
      document.getElementById("counter").innerText = `1/${shuffledQuestions.length}`
      state = 0
      const q = shuffledQuestions[0];
      currentQ = { ...q, answers: shuffle([...q.answers]) };
      renderQuestion(currentQ);
    }

    function startExam() {
      return;
      mode = "exam";
      document.getElementById("menu").style.display = "none";
      document.getElementById("quiz").style.display = "block";
      examQuestions = shuffle([...questions]).slice(0, 5); // np. 5 pytań
      examIndex = 0;
      userAnswers = [];
      showExamQuestion();
    }

    function showExamQuestion() {
      const q = examQuestions[examIndex];
      renderQuestion(q, answer => {
        userAnswers.push(answer);
        if (examIndex + 1 < examQuestions.length) {
          examIndex++;
          showExamQuestion();
        } else {
          showResult();
        }
      });
    }

    function renderQuestion(q) {
      const quizHead = document.getElementById("quiz-head")
      const quizBody = document.getElementById("quiz-body")
      const nextBtn = document.getElementById("next-btn")
      if(nextBtn){
        nextBtn.remove()
      }
      quizBody.innerHTML = "";
      quizHead.innerHTML = `<h2>${q.question}</h2>`;
      shuffle([...q.answers]).forEach(ans => {
        const btn = document.createElement("button");
        btn.className = "btn btn-light m-2";
        btn.textContent = ans;
        btn.onclick = () => choose(q, ans, btn);
        quizBody.appendChild(btn);
      });
    }

    function choose(q, textContent, btn){
        if(state == 1){
            return;
        }
        if(q.correct == textContent){
            btn.className = "btn btn-success m-2";
            points = points + 1;
            state = 1;
        }
        else{
            btn.className = "btn btn-danger m-2";
            state = 1;
            const allButtons = document.getElementById("quiz").querySelectorAll('button');
            allButtons.forEach(ansBtn => {
                if(ansBtn.textContent == q.correct){
                    ansBtn.className = "btn btn-success m-2";
                }
            })
        }

        const quizDiv = document.getElementById("quiz");
        const nextBtn = document.createElement("button");
        nextBtn.className = "btn btn-light mb-5";
        nextBtn.id = "next-btn"
        nextBtn.textContent = "Następne pytanie";
        nextBtn.style.marginTop = "32px"
        nextBtn.onclick = () => nextLearnQuestion();
        quizDiv.appendChild(nextBtn)

    }

    function showResult() {
      document.getElementById("quiz").style.display = "none";
      const resultDiv = document.getElementById("result");
      resultDiv.style.display = "block";
      let score = points;
      const percent = Math.round((score / questions.filter(item => item.category == chosenCategory).length) * 100);
      resultDiv.innerHTML = `
        <h2>Twój wynik: ${percent}%</h2>
        <button class="btn btn-light mb-5" onclick="location.reload()">Powrót</button>
      `;
    }