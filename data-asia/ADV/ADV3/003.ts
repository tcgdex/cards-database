import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Wurmple",
         ja: "Wurmple",
         fr: "Wurmple",
         de: "Wurmlich",
         es: "Wurmple",
         it: "Wurmple",
         pt: "Wurmple",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [265],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Call for Friends",
            ja: "友達を呼びます",
            fr: "Appeler des amis",
            de: "Rufen Sie Freunde an",
            es: "Llamar a amigos",
            it: "Chiama per gli amici",
            pt: "Ligue para amigos",
          },
          effect: {
            en: "Search your deck for Grass Basic Pokemon and put as many of them as you like onto your Bench. Shuffle your deck afterward.",
            ja: "デッキを草の基本的なポケモンを探して、あなたがあなたのベンチに好きなだけそれらの多くを置きます。その後、デッキをシャッフルします。",
            fr: "Recherchez votre terrasse pour l'herbe Pokémon de base et en mettez autant que vous le souhaitez sur votre banc. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach Gras Basic -Pokémon und legen Sie so viele von ihnen, wie Sie möchten, auf Ihre Bank. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo Pokémon básico de hierba y coloque tantos como desee en su banco. Baraja tu mazo después.",
            it: "Cerca il tuo mazzo i Pokemon di base di erba e metti tutti quelli che desideri sulla panchina. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por Pokémon básico de grama e coloque o máximo que quiser em seu banco. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "String Shot",
            ja: "ストリングショット",
            fr: "Tir à cordes",
            de: "Saitenschuss",
            es: "Disparo",
            it: "Scatto",
            pt: "Tiro de corda",
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
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
