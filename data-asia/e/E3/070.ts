import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Tyranitar - 070/087",
         ja: "タイラニタル-070/087",
         fr: "Tyranitar - 070/087",
         de: "Tyranitar - 070/087",
         es: "Tyranitar - 070/087",
         it: "Tyranitar - 070/087",
         pt: "Tyranitar - 070/087",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [248],
      hp: 120,
      types: ["Darkness"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Destructive Roar",
            ja: "破壊的なro音",
            fr: "Rugissement destructeur",
            de: "Zerstörerisches Brüllen",
            es: "Rugido destructivo",
            it: "Ruggito distruttivo",
            pt: "Rugido destrutivo",
          },
          effect: {
            en: "Flip a coin. If heads, discard 1 Energy card attached to 1 of your opponent's Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、1匹の敵のポケモンに取り付けられた1枚のエネルギーカードを捨てます。",
            fr: "Retourner une pièce. Si les têtes, jetez 1 carte d'énergie attachée à 1 du pokemon de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, entsorgen Sie 1 Energiemoniemoni, die an 1 des Pokémon Ihres Gegners angebracht sind.",
            es: "Voltea una moneda. Si se dirige, deseche 1 tarjeta de energía unida a 1 de los Pokémon de su oponente.",
            it: "Capovolgi una moneta. Se le teste, scartare 1 carta di energia collegata a 1 del Pokemon del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, descarte 1 cartão de energia anexado a 1 do Pokémon do seu oponente.",
          },
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Tail Slap",
            ja: "テールスラップ",
            fr: "Gifle",
            de: "Schwanzschlag",
            es: "Bofetada",
            it: "Slap di coda",
            pt: "Tail Slap",
          },
          damage: 30,
        },
        {
          cost: ["Darkness", "Darkness", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Gigacrush",
            ja: "GigaCrush",
            fr: "GigaCrush",
            de: "Gigacrush",
            es: "Gigacrush",
            it: "Gigacrush",
            pt: "Gigacrush",
          },
          effect: {
            en: "Each player discards the top 3 cards from his or her deck.",
            ja: "各プレイヤーは、上位3枚のカードをデッキから破棄します。",
            fr: "Chaque joueur rejette les 3 meilleures cartes de son deck.",
            de: "Jeder Spieler verengt die Top 3 Karten von seinem Deck.",
            es: "Cada jugador descarta las 3 cartas principales de su mazo.",
            it: "Ogni giocatore scarta le prime 3 carte dal suo mazzo.",
            pt: "Cada jogador descarta as três principais cartas do seu baralho.",
          },
          damage: 60,
        },
      ],

      retreat: 3,

};
