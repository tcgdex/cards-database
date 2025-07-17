import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Dewgong - 025/088",
         ja: "デューゴン-025/088",
         fr: "Dewgong - 025/088",
         de: "Dewgong - 025/088",
         es: "Dewgong - 025/088",
         it: "Dewgong - 025/088",
         pt: "Dewgong - 025/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [87],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Freeze Lock",
            ja: "フリーズロック",
            fr: "Verrouillage de congélation",
            de: "Gefrierschloss",
            es: "Lock de congelación",
            it: "Blocco di congelamento",
            pt: "Frega de congelamento",
          },
          effect: {
            en: "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to his or her Active Pokemon during his or her next turn.",
            ja: "コインをひっくり返します。頭の場合、対戦相手は次のターン中に自分の手からアクティブなポケモンにエネルギーカードを取り付けることができません。",
            fr: "Retourner une pièce. Si la tête, votre adversaire ne peut pas attacher des cartes d'énergie de sa main à son pokemon actif pendant son prochain tour.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, kann Ihr Gegner während seiner nächsten Kurve keine Energiekarten von seiner Hand an sein aktives Pokémon an sein aktives Pokémon anbringen.",
            es: "Voltea una moneda. Si se dirige, tu oponente no puede adjuntar cartas de energía de su mano a su Pokémon activo durante su próximo turno.",
            it: "Capovolgi una moneta. Se la testa, il tuo avversario non può attaccare le carte energetiche dalla sua mano al Pokemon attivo durante il suo prossimo turno.",
            pt: "Vire uma moeda. Se as cabeças, seu oponente não poderá anexar cartas de energia da mão dele ao Pokémon ativo durante o próximo turno.",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Crushing Ice",
            ja: "氷の粉砕",
            fr: "Glace écrasante",
            de: "Eis zerquetschen",
            es: "Hielo aplastante",
            it: "Schiacciamento del ghiaccio",
            pt: "Esmagando gelo",
          },
          effect: {
            en: "This attack does 40 damage plus 10 more damage for each Colorless Energy in the Defending Pokemon's Retreat Cost. Damage is calculated using the Defending Pokemon's Retreat Cost after applying effects to the Retreat Cost.",
            ja: "この攻撃は、防御ポケモンのリトリートコストで、40のダメージに加えて、無色のエネルギーごとに10ダメージを与えます。損傷は、リトリートコストに効果を適用した後、防御ポケモンのリトリートコストを使用して計算されます。",
            fr: "Cette attaque fait 40 dégâts plus 10 dégâts supplémentaires pour chaque énergie incolore dans le coût de retraite de Pokemon en défense. Les dommages sont calculés en utilisant le coût de retraite de Pokémon en défense après avoir appliqué des effets au coût de retraite.",
            de: "Dieser Angriff verursacht 40 Schäden plus 10 weitere Schäden für jede farblose Energie in den Rückzugskosten des verteidigenden Pokemon. Der Schaden wird unter Verwendung der Rückzugskosten des Verteidigungspokemons berechnet, nachdem die Auswirkungen auf die Rückzugskosten angewendet wurden.",
            es: "Este ataque hace 40 daños más 10 daños más por cada energía incolora en el costo de retiro de Pokémon defensor. El daño se calcula utilizando el costo de retiro de Pokémon defensores después de aplicar los efectos al costo de retiro.",
            it: "Questo attacco infligge 40 danni più 10 danni in più per ogni energia incolore nel costo di ritiro di Pokemon in carica. Il danno viene calcolato utilizzando il costo di ritiro di Pokemon in carica dopo aver applicato gli effetti sul costo di ritiro.",
            pt: "Este ataque causa 40 danos mais 10 mais danos para cada energia incolor no custo do retiro de Pokemon. Os danos são calculados usando o custo do retiro do Pokemon defensivo após aplicar efeitos ao custo do retiro.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
