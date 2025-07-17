import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwrath - 077/128",
         ja: "Poliwrath -077/128",
         fr: "Poliwrath - 077/128",
         de: "Poliwrath - 077/128",
         es: "Poliwrath - 077/128",
         it: "Poliwrath - 077/128",
         pt: "Poliwrath - 077/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [62],
      hp: 100,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Plunge",
            ja: "プランジ",
            fr: "Plonger",
            de: "Stürzen",
            es: "Inmersión",
            it: "Tuffarsi",
            pt: "Mergulhar",
          },
          effect: {
            en: "Once during your turn (before your attack), if Poliwrath is on your Bench, you may flip a coin. If heads, take all Energy cards attached to your Active Pokmon, if any, and attach them to Poliwrath. Then switch Poliwrath with your Active Pokmon.",
            ja: "ターン中（攻撃の前に）一度、Poliwrathがベンチにいる場合、コインをひっくり返すことができます。頭の場合は、アクティブなポクモンに取り付けられたすべてのエネルギーカードを持っていて、PoliWrathに取り付けます。次に、アクティブなポクモンでpoliwrathを切り替えます。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Poliwrath est sur votre banc, vous pouvez retourner une pièce. Si les têtes, prenez toutes les cartes d'énergie attachées à votre pokmon actif, le cas échéant, et attachez-les à Poliwrath. Ensuite, changez de poliwrath avec votre pokmon actif.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff), wenn Poliwrath auf Ihrer Bank ist, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, nehmen Sie alle Energiekarten, die an Ihr aktives Pokmon angebracht sind, falls vorhanden, und befestigen Sie sie an Poliwrath. Dann wechseln Sie Poliwrath mit Ihrem aktiven Pokmon.",
            es: "Una vez durante su turno (antes de su ataque), si Poliwrath está en su banco, puede voltear una moneda. Si se dirige, tome todas las tarjetas de energía unidas a su Pokmon activo, si lo hay, y adhiérase a Poliwrath. Luego cambie Poliwrath con su Pokmon activo.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), se Poliwrath è in panchina, puoi capovolgere una moneta. Se le teste, prendi tutte le carte di energia collegate al tuo Pokmon attivo, se presenti, e attaccali a Poliwrath. Quindi cambia Poliwrath con il tuo Pokmon attivo.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o Poliwrath estiver em seu banco, você poderá virar uma moeda. Se as cabeças, pegue todos os cartões de energia anexados ao seu Pokmon ativo, se houver, e conecte -os ao Poliwrath. Em seguida, mude o Poliwrath com seu Pokmon ativo.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Water Punch",
            ja: "ウォーターパンチ",
            fr: "Coup de poing",
            de: "Wasserstempel",
            es: "Golpe de agua",
            it: "Punch d'acqua",
            pt: "Punchado de água",
          },
          effect: {
            en: "Flip a number of coins equal to the amount of Water Energy attached to Poliwrath. This attack does 40 damage plus 10 more damage for each heads.",
            ja: "Poliwrathに付着した水エネルギーの量に等しい多数のコインをひっくり返します。この攻撃は、40のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales à la quantité d'énergie d'eau attachée au poliwrath. Cette attaque fait 40 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der an Poliwrath befestigten Wasserergie entspricht. Dieser Angriff verursacht 40 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual a la cantidad de energía de agua unida a Poliwrath. Este ataque hace 40 daños más 10 daños más para cada cabezal.",
            it: "Capolare una serie di monete pari alla quantità di energia idrica attaccata a Poliwrath. Questo attacco infligge 40 danni più 10 danni in più per ogni teste.",
            pt: "Vire uma série de moedas iguais à quantidade de energia da água ligada ao poliwrath. Este ataque causa 40 danos mais 10 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 2,

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
