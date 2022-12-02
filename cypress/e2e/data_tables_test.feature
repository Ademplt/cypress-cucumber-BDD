Feature:login manager
@manager_id
    Scenario:manager_id

        Given url git
        Given datalari kullanarak sayfaya gir
            | username | password  |
            | manager  | Manager1! |

        Given login butonuna tikla
        Then sayfaya girildigini onayla

    //=================================
@manager_id2 @smoke
    Scenario:manager_id2

        Given url git
        Given datalari kullanarak sayfaya gir
            | username | password  |
            | manager2 | Manager2! |

        Given login butonuna tikla
        Then sayfaya girildigini onayla