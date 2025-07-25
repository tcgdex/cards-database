import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Kingdra ex (Delta Species)",
         ja: "Kingdra Ex（デルタ種）",
         fr: "Kingdra ex (espèce delta)",
         de: "Kingdra EX (Delta -Arten)",
         es: "Kingdra ex (especie delta)",
         it: "Kingdra Ex (Delta Species)",
         pt: "Kingdra Ex (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [230],
      hp: 140,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Extra Smoke",
            ja: "余分な煙",
            fr: "Fumée supplémentaire",
            de: "Zusätzlicher Rauch",
            es: "Humo extra",
            it: "Fumo extra",
            pt: "Fumaça extra",
          },
          effect: {
            en: "Any damage done to your Stage 2 PokÃ©mon-ex by your opponent's attacks is reduced by 10 (before applying Weakness and Resistance).",
            ja: "敵の攻撃によってステージ2のPokã©Mon-Exに与えられた損害は10倍に減少します（脱力感と抵抗を適用する前に）。",
            fr: "Tout dommage causé à votre étape 2 Poké-MON-EX par les attaques de votre adversaire est réduit de 10 (avant d'appliquer la faiblesse et la résistance).",
            de: "Alle Schäden an Ihrem Stufe 2 Poké Mon-EX durch die Angriffe Ihres Gegners werden um 10 reduziert (bevor Schwäche und Widerstand angewendet werden).",
            es: "Cualquier daño hecho a su etapa 2 Poké Mon-Ex por los ataques de su oponente se reduce en 10 (antes de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato alla fase 2 Poké mon-ex dagli attacchi del tuo avversario è ridotto di 10 (prima di applicare debolezza e resistenza).",
            pt: "Qualquer dano causado ao seu estágio 2 Poké Mon-Ex pelos ataques do seu oponente é reduzido em 10 (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Energy Link",
            ja: "エネルギーリンク",
            fr: "Lien énergétique",
            de: "Energieverbindung",
            es: "Enlace de energía",
            it: "Collegamento energetico",
            pt: "Energy Link",
          },
          effect: {
            en: "Search your discard pile for an Energy card and attach it to Kingdra ex.",
            ja: "廃棄物の山を検索して、エネルギーカードを添付し、kingdra exに取り付けます。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie et attachez-la à Kingdra Ex.",
            de: "Suchen Sie Ihren Abwurfstapel nach einer Energiekarte und befestigen Sie sie an Kingdra EX.",
            es: "Busque en su pila de descarte en busca de una tarjeta de energía y adjuntarla a Kingdra Ex.",
            it: "Cerca il tuo mucchio di scarti per una carta energetica e attaccalo a Kingdra Ex.",
            pt: "Pesquise sua pilha de descarte para obter um cartão de energia e anexe -o a Kingdra Ex.",
          },
          damage: 40,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Protective Swirl",
            ja: "保護渦",
            fr: "Swirl protecteur",
            de: "Schutzwirbel",
            es: "Remolino protector",
            it: "Verbo protettivo",
            pt: "Redemoinho protetor",
          },
          effect: {
            en: "Kingdra ex has no Weakness during your opponent's next turn.",
            ja: "Kingdra Exは、対戦相手の次のターン中に弱点はありません。",
            fr: "Kingdra Ex n'a aucune faiblesse lors du prochain tour de votre adversaire.",
            de: "Kingdra EX hat in der nächsten Runde Ihres Gegners keine Schwäche.",
            es: "Kingdra Ex no tiene debilidad durante el próximo turno de tu oponente.",
            it: "Kingdra Ex non ha debolezza durante il prossimo turno del tuo avversario.",
            pt: "Kingdra Ex não tem fraqueza durante o próximo turno do seu oponente.",
          },
          damage: 80,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
