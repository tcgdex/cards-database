import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Dragonair",
         ja: "ダークドラゴンエア",
         fr: "Dragonair sombre",
         de: "Dunkler Dragonair",
         es: "DragonAir oscuro",
         it: "Dark Dragonair",
         pt: "Dragonair escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [148],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Evolutionary Light",
            ja: "進化的光",
            fr: "Lumière évolutive",
            de: "Evolutionslicht",
            es: "Luz evolutiva",
            it: "Luce evolutiva",
            pt: "Luz evolutiva",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may search your deck for an Evolution card. Show it to your opponent and put it into your hand. Shuffle your deck afterward. This power can't be used if Dark Dragonair is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前）</em>中に、デッキを検索して進化カードを検索できます。それを相手に見せて、あなたの手に入れてください。その後、デッキをシャッフルします。ダークドラゴンエアが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez rechercher votre jeu une carte d'évolution. Montrez-le à votre adversaire et mettez-le dans votre main. Mélanger votre deck par la suite. Cette puissance ne peut pas être utilisée si Dark Dragonair est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie Ihr Deck nach einer Evolutionskarte durchsuchen. Zeigen Sie es Ihrem Gegner und stecken Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck. Diese Kraft kann nicht verwendet werden, wenn dunkler Dragonair von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede buscar en su mazo una carta de evolución. Muéstralo a tu oponente y póngalo en tu mano. Baraja tu mazo después. Este poder no se puede usar si Dark DragonAir se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi cercare nel tuo mazzo una carta di evoluzione. Mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito. Questo potere non può essere usato se Dark Dragonair è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode pesquisar no seu baralho uma carta de evolução. Mostre ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois. Esse poder não pode ser usado se o Dark Dragonair for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Tail Strike",
            ja: "テールストライク",
            fr: "Grève de la queue",
            de: "Schwanzschlag",
            es: "Cola",
            it: "Colpire la coda",
            pt: "Greve da cauda",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño; Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 20 danni in più; Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos; Se as caudas, esse ataque causam 20 danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
