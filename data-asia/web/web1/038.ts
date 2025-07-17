import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Dragonite",
         ja: "ドラゴナイト",
         fr: "Dragonite",
         de: "Dragonit",
         es: "Dragón",
         it: "Dragonite",
         pt: "Dragonite",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [149],
      hp: 90,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Special Delivery",
            ja: "速達",
            fr: "Livraison spéciale",
            de: "Sonderlieferung",
            es: "Entrega especial",
            it: "Consegna speciale",
            pt: "Entrega especial",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may draw a card. If you do, choose a card from your hand and put it on top of your deck. This power can't be used if Dragonite is Asleep, Confused, or Paralyzed.",
            ja: "順番<em>（攻撃の前）</em>中に、カードを描くことができます。そうした場合は、手からカードを選択して、デッキの上に置いてください。ドラゴナイトが眠っている、混乱し、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez dessiner une carte. Si vous le faites, choisissez une carte dans votre main et mettez-la sur votre jeu. Ce pouvoir ne peut pas être utilisé si la dragonite est endormie, confuse ou paralysée.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Karte zeichnen. Wenn Sie dies tun, wählen Sie eine Karte von Ihrer Hand aus und legen Sie sie auf Ihr Deck. Diese Kraft kann nicht verwendet werden, wenn Dragonit schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede dibujar una carta. Si lo hace, elija una carta de su mano y póngala encima de su mazo. Este poder no se puede usar si Dragonite está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi disegnare una carta. Se lo fai, scegli una carta dalla tua mano e mettila sopra il mazzo. Questa potenza non può essere usata se Dragonite è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode desenhar um cartão. Se o fizer, escolha uma carta da sua mão e coloque -a em cima do seu baralho. Esse poder não pode ser usado se a Dragonite estiver dormindo, confusa ou paralisada.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Supersonic Flight",
            ja: "超音速飛行",
            fr: "Vol supersonique",
            de: "Überschallflug",
            es: "Vuelo supersónico",
            it: "Volo supersonico",
            pt: "Voo supersônico",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 60,
        },
      ],

      retreat: 2,

};
