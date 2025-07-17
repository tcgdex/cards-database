import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Xatu",
         ja: "xatu",
         fr: "Xatu",
         de: "Xatu",
         es: "Xatu",
         it: "Xatu",
         pt: "Xatu",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [178],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Prophecy",
            ja: "預言",
            fr: "Prophétie",
            de: "Prophezeiung",
            es: "Profecía",
            it: "Profezia",
            pt: "Profecia",
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
          cost: ["Psychic", "Psychic", "Psychic"],
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
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
