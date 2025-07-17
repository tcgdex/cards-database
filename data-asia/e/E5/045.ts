import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Natu",
         ja: "natu",
         fr: "Natu",
         de: "Natu",
         es: "Natu",
         it: "Natu",
         pt: "Natu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [177],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Foresight",
            ja: "先見性",
            fr: "Prévoyance",
            de: "Voraussicht",
            es: "Previsión",
            it: "Lungimiranza",
            pt: "Previsão",
          },
          effect: {
            en: "Look at the top 3 cards of either player's deck and rearrange them as you like.",
            ja: "いずれかのプレイヤーのデッキのトップ3カードを見て、好きなように再配置します。",
            fr: "Regardez les 3 premières cartes du deck de l'un ou l'autre des joueurs et réorganisez-les comme vous le souhaitez.",
            de: "Schauen Sie sich die Top 3 Karten des Decks beider Spieler an und ordnen Sie sie nach möchten.",
            es: "Mire las 3 cartas principales de cualquier mazo de jugadores y reorganizarlas como desee.",
            it: "Guarda le prime 3 carte del mazzo di entrambi i giocatori e riorganizzarle come preferisci.",
            pt: "Veja as três principais cartas do baralho de jogadores e reorganize -as como quiser.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Removal Beam",
            ja: "除去ビーム",
            fr: "Faisceau de retrait",
            de: "Entfernungsstrahl",
            es: "Haz de eliminación",
            it: "Raggio di rimozione",
            pt: "Feixe de remoção",
          },
          effect: {
            en: "If the Defending Pokemon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and discard it.",
            ja: "防衛ポケモンにエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのエネルギーカードの1つを選択して廃棄します。",
            fr: "Si le Pokémon en défense a des cartes d'énergie qui y sont attachées, retournez une pièce. Si les têtes, choisissez 1 de ces cartes d'énergie et jetez-la.",
            de: "Wenn das verteidigende Pokemon an Energiekarten angebracht ist, drehen Sie eine Münze. Wenn Sie Köpfe haben, wählen Sie 1 dieser Energiekarten und verwerfen Sie es.",
            es: "Si el Pokémon defensor tiene alguna tarjeta de energía unida, voltea una moneda. Si se dirige, elija 1 de esas tarjetas de energía y deséchela.",
            it: "Se il Pokemon in difesa ha delle carte di energia ad esso collegate, capovolgi una moneta. Se la testa, scegli 1 di quelle carte energetiche e scartalo.",
            pt: "Se o Pokémon atual tiver algum cartão de energia anexado a ele, vire uma moeda. Se as cabeças, escolha 1 dessas cartas de energia e descarte -as.",
          },
          damage: 10,
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
