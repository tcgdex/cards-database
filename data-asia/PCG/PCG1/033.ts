import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Kingler",
         ja: "キングラー",
         fr: "Roi",
         de: "Kingler",
         es: "Rey",
         it: "Kingler",
         pt: "Kingler",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [99],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Salt Water",
            ja: "塩水",
            fr: "Eau salée",
            de: "Salzwasser",
            es: "Agua salada",
            it: "Acqua salata",
            pt: "Água salgada",
          },
          effect: {
            en: "Search your deck for up to 2 Water Energy cards and attach them to Kingler. Shuffle your deck afterward.",
            ja: "デッキを最大2枚の水エネルギーカードで検索し、キングラーに取り付けます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck jusqu'à 2 cartes d'énergie d'eau et attachez-les à Kingler. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 Wasserergiekarten und befestigen Sie sie an Kingler. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 2 cartas de energía de agua y adjuntarlas a Kingler. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo per un massimo di 2 carte sull'energia idrica e attaccali a Kingler. Shuffle il tuo mazzo in seguito.",
            pt: "Procure seu baralho por até 2 cartas de energia da água e anexe -as a Kingler. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Hyper Pump",
            ja: "ハイパーポンプ",
            fr: "Hyper-pompe",
            de: "Hyperpumpe",
            es: "Bomba hiper",
            it: "Hyper Pump",
            pt: "Bomba hiper",
          },
          effect: {
            en: "Does 30 damage plus 20 more damage for each basic Energy attached to Kingler but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
            ja: "30のダメージに加えて、キングラーに付随する基本エネルギーごとに20のダメージがさらに20件ありますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で40以上のダメージを追加することはできません。",
            fr: "Fait 30 dégâts plus 20 dégâts supplémentaires pour chaque énergie de base attachée à Kingler, mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette manière.",
            de: "Fügt 30 Schäden plus 20 weitere Schäden für jede an Kingler verbundene Grundergie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 40 Schäden hinzufügen.",
            es: "Hace 30 daños más 20 daños más por cada energía básica unida a Kingler pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 40 daños de esta manera.",
            it: "Fa 30 danni più 20 danni in più per ogni energia di base collegata a Kingler ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 40 danni in questo modo.",
            pt: "30 danos mais 20 mais danos para cada energia básica associada a Kingler, mas não costumava pagar pelo custo energético deste ataque. Você não pode adicionar mais de 40 danos dessa maneira.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
