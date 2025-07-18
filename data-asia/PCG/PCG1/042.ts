import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Electrode ex",
         ja: "電極Ex",
         fr: "Electrode ex",
         de: "Elektrode ex",
         es: "Electrodo ex",
         it: "Elettrodo Ex",
         pt: "Eletrodo Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [101],
      hp: 90,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Extra Energy Bomb",
            ja: "余分なエネルギー爆弾",
            fr: "Bombe d'énergie supplémentaire",
            de: "Zusätzliche Energiebombe",
            es: "Bomba de energía extra",
            it: "Bomba energetica extra",
            pt: "Bomba de energia extra",
          },
          effect: {
            en: "Once during your turn (before your attack), you may discard Electrode ex and all the cards attached to it (this counts as Knocking Out Electrode ex). If you do, search your discard pile for 5 Energy cards and attach them to any of your PokÃ©mon (excluding PokÃ©mon-ex) in any way you like. This power can't be used if Electrode ex is affected by a Special Condition.",
            ja: "ターン中（攻撃前）に、電極EXとそれに取り付けられたすべてのカードを破棄することができます（これは電極EXをノックアウトするとカウントされます）。そうした場合は、5枚のエネルギーカードを廃棄することを検索し、好きな方法でPokã©Mon（Pokã©Mon-Exを除く）のいずれかに添付してください。電極EXが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez éliminer l'électrode ex et toutes les cartes qui y sont fixées (cela compte comme éliminant Electrode Ex). Si vous le faites, recherchez votre tas de défausse pour 5 cartes d'énergie et attachez-les à l'un de vos pokã © Mon (à l'exclusion de Pokã © Mon-EX) de quelque manière que ce soit. Cette puissance ne peut pas être utilisée si l'électrode ex est affectée par une condition spéciale.",
            de: "Sobald Sie während Ihres Kurses (vor Ihrem Angriff) sind, können Sie Elektroden EX und alle damit verbundenen Karten verwerfen (dies zählt als Ausschalten der Elektrode Ex). Wenn Sie dies tun, suchen Sie Ihren Ablagerungsstapel nach 5 Energiekarten und fügen Sie ihn in irgendeiner Weise, die Sie möchten, an einen Ihrer Poké Mon (mit Ausnahme von Poké Mon-EX) hinzu. Diese Leistung kann nicht verwendet werden, wenn Elektrode EX durch einen besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), puede descartar el electrodo EX y todas las cartas unidas (esto cuenta como eliminando el electrodo EX). Si lo hace, busque en su pila de descarte para 5 tarjetas de energía y adhiérase a cualquiera de sus Poké Mon (excluyendo Poké Mon-Ex) de cualquier manera que desee. Esta potencia no se puede usar si el electrodo EX se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), puoi scartare l'elettrodo Ex e tutte le carte collegate ad esso (questo conta come elettrodo a eliminare Ex). Se lo fai, cerca nella pila di scarto per 5 carte energetiche e allegatele a uno qualsiasi dei tuoi poké mon (escluso Poké mon-ex) in un modo che desideri. Questa potenza non può essere utilizzata se l'elettrodo EX è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode descartar o eletrodo EX e todas as cartas anexadas a ele (isso conta como derrubando o eletrodo ex). Se o fizer, procure sua pilha de descarte para obter 5 cartões de energia e anexá-los a qualquer um dos seus Poké Mon (excluindo Poké Mon-Ex) da maneira que desejar. Essa potência não pode ser usada se o eletrodo ex for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Crush and Burn",
            ja: "押しつぶして燃やします",
            fr: "Écraser et brûler",
            de: "Zerquetschen und brennen",
            es: "Aplastar y quemar",
            it: "Schiacciare e bruciare",
            pt: "Esmagar e queimar",
          },
          effect: {
            en: "You may discard as many Energy as you like attached to your Pokemon in play. If you do, this attack does 30 damage plus 20 more damage for each Energy you discarded.",
            ja: "プレイ中のポケモンに添付されているだけのエネルギーを捨てることができます。もしそうなら、この攻撃は30のダメージに加えて、あなたが捨てたエネルギーごとに20のダメージをさらに20回かけます。",
            fr: "Vous pouvez jeter autant d'énergie que vous le souhaitez attaché à votre Pokémon en jeu. Si vous le faites, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires pour chaque énergie que vous avez jetée.",
            de: "Sie können so viele Energie verwerfen, wie Sie gerne an Ihrem Pokémon im Spiel gebunden sind. Wenn Sie dies tun, verursacht dieser Angriff 30 Schäden plus 20 weitere Schäden für jede von Ihnen verworfene Energie.",
            es: "Puede descartar tanta energía como desee unida a su Pokémon en juego. Si lo hace, este ataque hace 30 daños más 20 más de daño por cada energía que descartó.",
            it: "Puoi scartare tutte le energie che vuoi attaccate al tuo Pokemon in gioco. Se lo fai, questo attacco infligge 30 danni più 20 danni in più per ogni energia che hai scartato.",
            pt: "Você pode descartar tanta energia quanto você gosta do seu Pokémon em jogo. Se o fizer, esse ataque causa 30 danos mais 20 mais danos por cada energia que você descartou.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
