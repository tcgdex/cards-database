import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Kadabra",
         ja: "カダブラ",
         fr: "Kadabra",
         de: "Kadabra",
         es: "Kadabra",
         it: "Kadabra",
         pt: "Kadabra",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [64],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Energy Recall",
            ja: "エネルギーリコール",
            fr: "Rappel d'énergie",
            de: "Energieerruf",
            es: "Retiro de energía",
            it: "Richiamo energetico",
            pt: "Recall de energia",
          },
          effect: {
            en: "Attach 2 basic Energy cards from your discard pile to Kadabra (1 if you have only 1).",
            ja: "廃棄パイルからカダブラに2つの基本エネルギーカードを取り付けます（1つしかない場合は1）。",
            fr: "Attachez 2 cartes d'énergie de base de votre tas de défausse à Kadabra (1 si vous en avez seulement 1).",
            de: "Befestigen Sie 2 grundlegende Energiekarten von Ihrem Ablagerungsstapel an Kadabra (1, wenn Sie nur 1 haben).",
            es: "Adjunte 2 tarjetas de energía básicas de su pila de descarte a Kadabra (1 si solo tiene 1).",
            it: "Attacca 2 carte di base di base dalla tua pila di scarto a Kadabra (1 se hai solo 1).",
            pt: "Anexe 2 cartões básicos de energia da sua pilha de descarte a Kadabra (1 se você tiver apenas 1).",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
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
          damage: 20,
        },
      ],

      retreat: 1,

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
