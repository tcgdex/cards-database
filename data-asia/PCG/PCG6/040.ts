import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Metagross (Delta Species)",
         ja: "メタグロス（デルタ種）",
         fr: "Metagross (espèces delta)",
         de: "Metagross (Delta -Arten)",
         es: "Metagross (especie delta)",
         it: "Metagross (Delta Species)",
         pt: "Metagross (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [376],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Delta Control",
            ja: "デルタコントロール",
            fr: "Contrôle de delta",
            de: "Delta -Kontrolle",
            es: "Control delta",
            it: "Delta Control",
            pt: "Controle delta",
          },
          effect: {
            en: "Once during your turn (before your attack), you may look at the top 4 cards of your deck, choose 1 of them, and put it into your hand. Put the 3 other cards on the bottom of your deck in any order. This power can't be used if Metagross is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、デッキの上位4枚のカードを見て、そのうち1枚を選択して、それを手に渡すことができます。デッキの底に他の3枚のカードをあらゆる順序で置きます。 Metagrossが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez regarder les 4 premières cartes de votre deck, choisir 1 d'entre elles et la mettre dans votre main. Mettez les 3 autres cartes au bas de votre deck dans n'importe quel ordre. Cette puissance ne peut pas être utilisée si le métagross est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug (vor Ihrem Angriff) sind, können Sie sich die Top 4 -Karten Ihres Decks ansehen, 1 davon auswählen und in Ihre Hand legen. Legen Sie die 3 anderen Karten in Ihrem Deck in beliebiger Reihenfolge. Diese Leistung kann nicht angewendet werden, wenn Metagross von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede mirar las 4 cartas principales de su mazo, elegir 1 de ellas y ponerlo en su mano. Coloque las otras 3 cartas en la parte inferior de su mazo en cualquier orden. Esta potencia no se puede usar si Metagross se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi guardare le prime 4 carte del tuo mazzo, sceglierne 1 e metterlo in mano. Metti le altre 3 carte sul fondo del mazzo in qualsiasi ordine. Questa potenza non può essere utilizzata se MetaGross è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode olhar para as 4 principais cartas do seu baralho, escolher 1 delas e colocá -lo em sua mão. Coloque as outras 3 cartas na parte inferior do seu baralho em qualquer ordem. Esse poder não pode ser usado se o Metagross for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Metal"],
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
            en: "You may discard as many Energy cards as you like attached to your Pokemon in play. If you do, this attack does 30 damage plus 20 more damage for each Energy card you discarded.",
            ja: "プレイ中のポケモンに添付されているだけのエネルギーカードを捨てることができます。そうした場合、この攻撃は30のダメージと、廃棄したエネルギーカードごとに20のダメージをさらに20件以上与えます。",
            fr: "Vous pouvez éliminer autant de cartes d'énergie que vous le souhaitez attacher à votre pokemon en jeu. Si vous le faites, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires pour chaque carte d'énergie que vous avez jetée.",
            de: "Sie können so viele Energiekarten verwerfen, wie Sie Ihrem Pokémon im Spiel gefestigt werden. Wenn Sie dies tun, verursacht dieser Angriff 30 Schäden plus 20 weitere Schäden für jede von Ihnen verworfene Energiekarte.",
            es: "Puede descartar tantas cartas de energía como desee adjunta a su Pokémon en juego. Si lo hace, este ataque hace 30 daños más 20 más de daño por cada carta de energía que descartó.",
            it: "Puoi scartare tutte le carte energetiche che desideri allegate al tuo Pokemon in gioco. Se lo fai, questo attacco infligge 30 danni più 20 danni in più per ogni carta energetica che hai scartato.",
            pt: "Você pode descartar tantos cartões de energia quanto desejar ao seu Pokémon em jogo. Se o fizer, esse ataque causa 30 danos mais 20 mais danos para cada cartão de energia que você descartou.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
