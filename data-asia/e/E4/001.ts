import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Zubat - 001/088",
         ja: "Zubat -001/088",
         fr: "Zubat - 001/088",
         de: "Zubat - 001/088",
         es: "Zubat - 001/088",
         it: "Zubat - 001/088",
         pt: "Zubat - 001/088",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [41],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sound Waves",
            ja: "音波",
            fr: "Ondes sonores",
            de: "Schallwellen",
            es: "Ondas de sonido",
            it: "Onde sonore",
            pt: "Ondas sonoras",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Flitter",
            ja: "フリッター",
            fr: "Nageur",
            de: "Flitter",
            es: "Rareza",
            it: "Flitter",
            pt: "Flitter",
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

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
