import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Starmie",
         ja: "スターミー",
         fr: "Starmie",
         de: "Starmie",
         es: "Páramo",
         it: "Starmie",
         pt: "Starmie",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [121],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Confuse Ray",
            ja: "レイを混乱させます",
            fr: "Confondre Ray",
            de: "Verwirrung Ray",
            es: "Confundir a ray",
            it: "Confondere il raggio",
            pt: "Confunda Ray",
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
          damage: 10,
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Core Stream",
            ja: "コアストリーム",
            fr: "Ruisseau de base",
            de: "Kernstream",
            es: "Transmisión de núcleo",
            it: "Flusso principale",
            pt: "Fluxo do núcleo",
          },
          effect: {
            en: "Choose an Energy type other than Colorless. This attack does 20 damage to each of your opponent's Pokemon with any Energy cards of that type attached to it. Don't apply Weakness and Resistance.",
            ja: "無色以外のエネルギータイプを選択してください。この攻撃は、そのタイプのエネルギーカードが添付された任意のエネルギーカードを備えた各相手のポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Choisissez un type d'énergie autre que incolore. Cette attaque fait 20 dégâts à chacun des pokemon de votre adversaire avec toutes les cartes d'énergie de ce type qui y sont attachées. N'appliquez pas la faiblesse et la résistance.",
            de: "Wählen Sie einen anderen Energietyp als farblos. Dieser Angriff schädigt 20 Pokémon Ihres Gegners mit allen daran befestigten Energiekarten. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Elija un tipo de energía que no sea incoloro. Este ataque hace 20 daños a cada Pokémon de cada oponente con cualquier carta de energía de ese tipo unida. No aplique debilidad y resistencia.",
            it: "Scegli un tipo di energia diverso da incolore. Questo attacco infligge 20 danni a ciascuno dei Pokemon del tuo avversario con eventuali carte di energia di quel tipo attaccato ad esso. Non applicare debolezza e resistenza.",
            pt: "Escolha um tipo de energia que não seja incolor. Este ataque causa 20 de dano a cada um dos Pokémon do seu oponente com quaisquer cartões de energia desse tipo ligados a ele. Não aplique fraqueza e resistência.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
