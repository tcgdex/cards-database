import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Jumpluff - 012/092",
         ja: "ジャンプラフ-012/092",
         fr: "Jumpluff - 012/092",
         de: "Jumpluff - 012/092",
         es: "Jumpluff - 012/092",
         it: "Jumpluff - 012/092",
         pt: "JumPluff - 012/092",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [189],
      hp: 70,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Fluff",
            ja: "綿毛",
            fr: "Duvet",
            de: "Flaum",
            es: "Pelusa",
            it: "Lanugine",
            pt: "Foff",
          },
          effect: {
            en: "During your opponent's turn, if Jumpluff would be damaged or affected by an opponent's attack and it already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack (including damage).",
            ja: "相手のターン中、ジャンプラフが対戦相手の攻撃によって損傷または影響を受ける場合、すでに少なくとも1つのダメージカウンターがあり、コインをひっくり返します。頭の場合、その攻撃のすべての影響（損傷を含む）を防ぎます。",
            fr: "Pendant le tour de votre adversaire, si Jumpluff était endommagé ou affecté par l'attaque d'un adversaire et qu'il a déjà au moins 1 comptoir de dégâts, retourne une pièce. Si les têtes, empêchent tous les effets de cette attaque (y compris les dégâts).",
            de: "Während der an der Reihe seines Gegners, wenn Jumpluff durch den Angriff eines Gegners beschädigt oder betroffen wäre und bereits mindestens 1 Schadenschalter darauf hat, drehen Sie eine Münze. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen dieses Angriffs (einschließlich Schäden).",
            es: "Durante el turno de tu oponente, si Jumpluff fuera dañado o afectado por el ataque de un oponente y ya tiene al menos 1 contador de daño, voltea una moneda. Si se dirige, evite todos los efectos de ese ataque (incluido el daño).",
            it: "Durante il turno del tuo avversario, se Jumpuff sarebbe danneggiato o influenzato dall'attacco di un avversario e ha già almeno 1 contatore di danni su di esso, capovolgi una moneta. Se le teste, prevenire tutti gli effetti di quell'attacco (incluso il danno).",
            pt: "Durante a vez do seu oponente, se o JumPluff fosse danificado ou afetado pelo ataque de um oponente e já possui pelo menos 1 contador de danos, virar uma moeda. Se as cabeças, impedem todos os efeitos desse ataque (incluindo danos).",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Cotton Punch",
            ja: "コットンパンチ",
            fr: "Punch au coton",
            de: "Baumwollpunsch",
            es: "Golpe de algodón",
            it: "Punch di cotone",
            pt: "Soco de algodão",
          },
          effect: {
            en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
