import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwhirl",
         ja: "PoliWhirl",
         fr: "Polihirl",
         de: "Poliwhirl",
         es: "Poliwhirl",
         it: "Poliwhirl",
         pt: "Poliwhirl",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [61],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Energy Stream",
            ja: "エネルギーストリーム",
            fr: "Flux d'énergie",
            de: "Energiestrom",
            es: "Corriente de energía",
            it: "Flusso di energia",
            pt: "Fluxo de energia",
          },
          effect: {
            en: "Search your discard pile for a basic Energy card and attach it to Poliwhirl.",
            ja: "廃棄物の山を検索して、基本的なエネルギーカードを調べ、PoliWhirlに添付してください。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie de base et attachez-la à Poliwhirl.",
            de: "Suchen Sie Ihren Ablagerungsstapel nach einer grundlegenden Energiekarte und befestigen Sie sie an Poliwhirl.",
            es: "Busque en su pila de descarte una tarjeta de energía básica y adjunte a Poliwhirl.",
            it: "Cerca al tuo mucchio di scarti una scheda di energia di base e attaccalo a Poliwhirl.",
            pt: "Pesquise sua pilha de descarte por um cartão de energia básico e anexe -o a Poliwhirl.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Bubble",
            ja: "バブル",
            fr: "Bulle",
            de: "Blase",
            es: "Burbuja",
            it: "Bolla",
            pt: "Bolha",
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
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
