import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Machamp - 089/128",
         ja: "マチャンプ-089/128",
         fr: "Machamp - 089/128",
         de: "Machamp - 089/128",
         es: "Machamp - 089/128",
         it: "Machamp - 089/128",
         pt: "Machamp - 089/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [68],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Terraforming",
            ja: "テラフォーミング",
            fr: "Terraformant",
            de: "Terraforming",
            es: "Terraformación",
            it: "Terraformante",
            pt: "Terraforming",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may look at the top 4 cards of your deck and rearrange them as you like. This power can't be used if Machamp is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前）</em> </em>、デッキの上位4枚のカードを見て、好きなように並べ替えることができます。 Machampが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez regarder les 4 premières cartes de votre deck et les réorganiser comme vous le souhaitez. Cette puissance ne peut pas être utilisée si Machamp est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie sich die Top 4 -Karten Ihres Decks ansehen und sie nach möchten. Diese Leistung kann nicht verwendet werden, wenn Machamp von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede mirar las 4 cartas principales de su mazo y reorganizarlas como desee. Esta potencia no se puede usar si Machamp se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi guardare le prime 4 carte del tuo mazzo e riorganizzarle come preferisci. Questa potenza non può essere utilizzata se Machamp è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode olhar para as 4 principais cartas do seu baralho e reorganizá -las como quiser. Esse poder não pode ser usado se o Machamp for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
          name: {
            en: "Iron Fist",
            ja: "鉄の拳",
            fr: "Iron",
            de: "Eisenfaust",
            es: "Puño de hierro",
            it: "Pugno di ferro",
            pt: "Punho de ferro",
          },
          effect: {
            en: "Count the number of Pokemon you have in play with damage counters on them. Flip a coin. If heads, this attack does 50 damage plus 10 more damage for each of those Pokemon.",
            ja: "プレイしているポケモンの数を数えて、それらにダメージカウンターでカウントします。コインをひっくり返します。頭の場合、この攻撃は50のダメージに加えて、それらのポケモンのそれぞれに対してさらに10ダメージを与えます。",
            fr: "Comptez le nombre de Pokémon que vous avez en jeu avec des compteurs de dégâts sur eux. Retourner une pièce. Si les têtes, cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires pour chacun de ces Pokémon.",
            de: "Zählen Sie die Anzahl der Pokemon, die Sie im Spiel mit Schadenszähnen haben. Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 50 Schäden plus 10 weitere Schäden für jedes dieser Pokémon.",
            es: "Cuente la cantidad de Pokémon que tiene en juego con los mostradores de daños. Voltea una moneda. Si se dirige, este ataque hace 50 daños más 10 daños más para cada uno de esos Pokémon.",
            it: "Conta il numero di Pokemon che hai in gioco con contatori di danno su di loro. Capovolgi una moneta. Se la testa, questo attacco infligge 50 danni più 10 danni in più per ciascuno di quei Pokemon.",
            pt: "Conte o número de Pokémon que você tem em jogo com contadores de danos. Vire uma moeda. Se as cabeças, esse ataque causará 50 danos mais 10 danos a cada um desses Pokémon.",
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
