import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Noctowl",
         ja: "ノクトウル",
         fr: "Noctowl",
         de: "Noctowl",
         es: "Nocto",
         it: "Noctewl",
         pt: "Noctowl",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [164],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Investigate",
            ja: "調査する",
            fr: "Enquêter",
            de: "Untersuchen",
            es: "Investigar",
            it: "Indagare",
            pt: "Investigar",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may look at the top 2 cards of any player's deck or at up to 2 of any player's Prizes. Put any cards you looked at back in the same order. This power can't be used if Noctowl is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前）</em> </em>、プレイヤーのデッキの上位2枚のカードまたは最大2枚のプレーヤーの賞品を見ることができます。見たカードを同じ順序で置きます。 Noctowlが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez consulter les 2 premières cartes du deck de tout joueur ou jusqu'à 2 des prix de tout joueur. Mettez toutes les cartes que vous avez regardées dans le même ordre. Cette puissance ne peut pas être utilisée si Noctowl est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie sich die Top 2 Karten des Decks eines Spielers oder bis zu 2 der Preise eines Spielers ansehen. Setzen Sie alle Karten, die Sie sich in der gleichen Reihenfolge angesehen haben. Diese Kraft kann nicht verwendet werden, wenn Noctowl durch einen besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede mirar las 2 cartas principales del mazo de cualquier jugador o en hasta 2 de los premios de cualquier jugador. Coloque las cartas que revisaste en el mismo orden. Esta potencia no se puede usar si Noctowl se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi guardare le prime 2 carte del mazzo di qualsiasi giocatore o fino a 2 dei premi di qualsiasi giocatore. Metti tutte le carte che hai guardato indietro nello stesso ordine. Questa potenza non può essere utilizzata se NocTowl è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode olhar para as duas principais cartas do baralho de qualquer jogador ou até 2 dos prêmios de qualquer jogador. Coloque os cartões que você olhou de volta na mesma ordem. Esse poder não pode ser usado se o noctowl for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Triple Smash",
            ja: "トリプルスマッシュ",
            fr: "Triple smash",
            de: "Triple Smash",
            es: "Triple Smash",
            it: "Triple Smash",
            pt: "Triple Smash",
          },
          effect: {
            en: "Flip 3 coins. This attack does 10 damage plus 10 more damage for each heads.",
            ja: "3コインをフリップします。この攻撃は、10ダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
            fr: "Flip 3 pièces. Cette attaque fait 10 dégâts plus 10 dégâts supplémentaires pour chaque tête.",
            de: "3 Münzen umdrehen. Dieser Angriff verursacht 10 Schäden plus 10 weitere Schäden für jeden Köpfe.",
            es: "Flip 3 monedas. Este ataque hace 10 daños más 10 daños más para cada cabezal.",
            it: "Flip 3 monete. Questo attacco infligge 10 danni più 10 danni in più per ogni teste.",
            pt: "Flip 3 moedas. Este ataque causa 10 danos mais 10 mais danos para cada cabeça.",
          },
        },
      ],


};
