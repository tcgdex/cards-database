import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Vaporeon Star",
         ja: "Vaporeon Star",
         fr: "Étoile de vaporeon",
         de: "Vaporeon Star",
         es: "Estrella de Vaporeon",
         it: "Star Vaporeon",
         pt: "Vaporeon Star",
      },


      category: "Pokemon",
      dexId: [134],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Blue Ray",
            ja: "ブルーレイ",
            fr: "Rayon bleu",
            de: "Blauer Strahl",
            es: "Rayo azul",
            it: "Raggio blu",
            pt: "Raio azul",
          },
          effect: {
            en: "Once during your turn, when you put Vaporeon {{Star|this PokÃ©mon}} from your hand onto your Bench, you may remove all Special Conditions and 3 damage counters from each Active PokÃ©mon (both yours and your opponent's).",
            ja: "ターン中に、Vaporeon {{star | thispokã©mon}}を手からベンチに置くと、各アクティブなPokã©Mon（あなたと相手の両方）からすべての特別な条件と3つのダメージカウンターを削除できます。",
            fr: "Une fois pendant votre tour, lorsque vous mettez Vaporeon {{Star | Ce pokã © Mon}} de votre main sur votre banc, vous pouvez supprimer toutes les conditions spéciales et 3 compteurs de dégâts de chaque Pokã © Mon actif (le vôtre et celui de votre adversaire).",
            de: "Einmal in Ihrem Zug, wenn Sie Vaporeon {{stern | this poké © mon}} von Ihrer Hand auf Ihre Bank legen, können Sie alle speziellen Bedingungen und 3 Schadenszähler von jedem aktiven Poké Mon (sowohl Ihres als auch Ihres Gegners) entfernen.",
            es: "Una vez durante su turno, cuando coloca Vaporeon {{Star | Este Poké Mon}} de su mano en su banco, puede eliminar todas las condiciones especiales y 3 contadores de daño de cada Poké activo (tanto tuyo como de su oponente).",
            it: "Una volta durante il tuo turno, quando metti Vaporeon {{Star | questo poké mon}} dalla tua mano sulla panchina, è possibile rimuovere tutte le condizioni speciali e 3 contatori di danno da ciascun poké attivo (sia il tuo che il tuo avversario).",
            pt: "Uma vez durante o seu turno, quando você coloca o vaporeon {{Star | this Poké Mon}} da sua mão em seu banco, você pode remover todas as condições especiais e 3 contadores de danos de cada Poké de Mon ativo (tanto o seu quanto o de seu oponente).",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Whirlpool",
            ja: "渦",
            fr: "Tourbillon",
            de: "Whirlpool",
            es: "Torbellino",
            it: "Whirlpool",
            pt: "Hidromassagem",
          },
          effect: {
            en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokemon.",
            ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
            fr: "Retourner une pièce. Si les têtes, jetez une carte d'énergie attachée au Pokémon en défense.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, entsorgen Sie eine an das verteidigende Pokémon angeschlossene Energiekarte.",
            es: "Voltea una moneda. Si se dirige, deseche una tarjeta de energía unida al Pokémon defensor.",
            it: "Capovolgi una moneta. Se le teste, scartare una carta di energia collegata al Pokemon in difesa.",
            pt: "Vire uma moeda. Se as cabeças, descarte um cartão de energia preso ao Pokémon atual.",
          },
          damage: 40,
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
