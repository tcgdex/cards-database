import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Sandshrew+A78",
         ja: "Sandshrew+A78",
         fr: "Sandshew + A78",
         de: "Sandschreibt+a78",
         es: "Sandshrew+A78",
         it: "Sandshrew+A78",
         pt: "Sandshrew+A78",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [27],
      hp: 40,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Double Scratch",
            ja: "二重スクラッチ",
            fr: "À double égratignure",
            de: "Doppelkratzer",
            es: "Doble rasguño",
            it: "Doppio graffio",
            pt: "Arranhão duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
        {
          cost: ["Fighting"],
          name: {
            en: "Dig Under",
            ja: "下を掘ります",
            fr: "Creuser",
            de: "Untergräben",
            es: "Cavar debajo",
            it: "Scavare sotto",
            pt: "Escavar abaixo",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. This attack does 10 damage to that Pokemon. Don't apply Weakness and Resistance. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
            ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "Choisissez 1 du pokemon de votre adversaire. Cette attaque fait 10 dégâts à ce Pokémon. N'appliquez pas la faiblesse et la résistance. (Tout autre effet qui se produirait après avoir appliqué une faiblesse et une résistance se produit.)",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Dieser Angriff schädigt dieses Pokémon 10. Wenden Sie keine Schwäche und Widerstand an. (Alle anderen Effekte, die nach der Anwendung von Schwächen und Widerstand auftreten würden.)",
            es: "Elija 1 de Pokémon de tu oponente. Este ataque hace 10 daños a ese Pokémon. No aplique debilidad y resistencia. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre).",
            it: "Scegli 1 Pokemon del tuo avversario. Questo attacco fa 10 danni a quel Pokemon. Non applicare debolezza e resistenza. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza.)",
            pt: "Escolha 1 do Pokémon do seu oponente. Este ataque causa 10 danos a esse Pokémon. Não aplique fraqueza e resistência. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda acontecem.)",
          },
        },
      ],

      retreat: 1,

};
