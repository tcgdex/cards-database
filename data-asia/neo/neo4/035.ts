import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Omanyte",
         ja: "暗いオマニテ",
         fr: "Dark Omanyte",
         de: "Dunkle Omanyte",
         es: "Omanyte oscuro",
         it: "Omanyte oscuro",
         pt: "Omanyte escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [138],
      hp: 40,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Water Cannon",
            ja: "ウォーターキャノン",
            fr: "Canon à eau",
            de: "Wasserkanone",
            es: "Cañón de agua",
            it: "Cannone d'acqua",
            pt: "Canhão de água",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage for each Water Energy card attached to Dark Omanyte. Don't apply Weakness and Resistance. You can't do more than 30 damage in this way.",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、ダークオマニテに取り付けられた各水エネルギーカードに対して10ダメージを与えます。衰弱と抵抗を適用しないでください。この方法で30以上のダメージを与えることはできません。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts pour chaque carte d'énergie de l'eau attachée à l'omanyte foncé. N'appliquez pas la faiblesse et la résistance. Vous ne pouvez pas faire plus de 30 dégâts de cette manière.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt 10 Schäden für jede Wasserergiekarte, die an dunkler Omanyte angebracht ist. Wenden Sie keine Schwäche und Widerstand an. Auf diese Weise können Sie nicht mehr als 30 Schaden anrichten.",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños por cada tarjeta de energía de agua unida a Omanyte oscuro. No aplique debilidad y resistencia. No puedes hacer más de 30 daños de esta manera.",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco infligge 10 danni per ogni carta di energia idrica attaccata all'Omanyte scuro. Non applicare debolezza e resistenza. Non puoi fare più di 30 danni in questo modo.",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos para cada cartão de energia da água preso a Omanyte escuro. Não aplique fraqueza e resistência. Você não pode causar mais de 30 danos dessa maneira.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
