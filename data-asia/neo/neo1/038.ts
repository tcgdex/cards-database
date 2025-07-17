import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Mareep",
         ja: "Mareep",
         fr: "Marin",
         de: "Mareep",
         es: "Marino",
         it: "Mareep",
         pt: "Marep",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [179],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Static Electricity",
            ja: "静電気",
            fr: "Électricité statique",
            de: "Statischer Strom",
            es: "Electricidad estática",
            it: "Elettricità statica",
            pt: "Eletricidade estática",
          },
          effect: {
            en: "For each Mareep in play, you may search your deck for a Lightning Energy card and attach it to Mareep. Shuffle your deck afterward.",
            ja: "プレイ中の各Mareepについては、デッキを検索してLightning Energyカードを検索し、Mareepに取り付けることができます。その後、デッキをシャッフルします。",
            fr: "Pour chaque Mareep en jeu, vous pouvez rechercher votre deck une carte d'énergie Lightning et la fixer à Mareep. Mélanger votre deck par la suite.",
            de: "Für jeden Mareep -Spiel können Sie Ihr Deck nach einer Lightning Energy -Karte durchsuchen und an Mareep anbringen. Mischen Sie anschließend Ihr Deck.",
            es: "Para cada Mareep en juego, puede buscar en su mazo una tarjeta de energía Lightning y adjuntarla a Mareep. Baraja tu mazo después.",
            it: "Per ogni Mareep in gioco, puoi cercare nel tuo mazzo una carta di energia Lightning e attaccarla a Mareep. Shuffle il tuo mazzo in seguito.",
            pt: "Para cada Mareep em jogo, você pode procurar no seu baralho um cartão de energia Lightning e anexá -lo a Mareep. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Thundershock",
            ja: "サンダーショック",
            fr: "Thundershock",
            de: "Donnerschock",
            es: "Tortuga",
            it: "Thundershock",
            pt: "Thundershock",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
