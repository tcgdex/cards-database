import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Slowking",
         ja: "暗いスローキング",
         fr: "Ralentissement sombre",
         de: "Dunkler langsamer",
         es: "Oscuro lento",
         it: "Rallentamento scuro",
         pt: "Slowking escuro",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [199],
      hp: 60,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Cunning",
            ja: "unning",
            fr: "Rusé",
            de: "Listig",
            es: "Astuto",
            it: "Astuzia",
            pt: "Ardiloso",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, look at the top card of your opponent's deck. Then, you may have your opponent shuffle his or her deck. This power can't be used if Dark Slowking is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、相手のデッキの一番上のカードを見てください。その後、相手にデッキをシャッフルさせることがあります。暗いスローキングが眠っている、混乱し、麻痺している場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, regardez la carte supérieure du jeu de votre adversaire. Ensuite, vous pouvez demander à votre adversaire de mélanger son deck. Ce pouvoir ne peut pas être utilisé si le ralentissement sombre est endormi, confus ou paralysé.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, schauen Sie sich die obere Karte Ihres Gegners an. Dann lässt du deinen Gegner sein Deck mischen. Diese Kraft kann nicht verwendet werden, wenn dunkler langsamer, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, mira la carta superior del mazo de tu oponente. Entonces, puedes hacer que tu oponente baraja su mazo. Este poder no se puede usar si el oscuro lento está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se la testa, guarda la carta superiore del mazzo del tuo avversario. Quindi, potresti avere il tuo avversario mescolare il suo mazzo. Questo potere non può essere usato se il rallentamento scuro è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, olhe para a carta superior do baralho do seu oponente. Então, você pode ter seu oponente embaralhando seu deck. Esse poder não pode ser usado se a desaceleração escura estiver dormindo, confusa ou paralisada.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Mind Shock",
            ja: "マインドショック",
            fr: "Choc mental",
            de: "Geistesschock",
            es: "Meta Choque",
            it: "Shock mentale",
            pt: "Choque da mente",
          },
          effect: {
            en: "Don't apply Weakness or Resistance for this attack.",
            ja: "この攻撃に弱さや抵抗を適用しないでください。",
            fr: "N'appliquez pas la faiblesse ou la résistance pour cette attaque.",
            de: "Wenden Sie keine Schwäche oder Widerstand für diesen Angriff an.",
            es: "No aplique debilidad o resistencia para este ataque.",
            it: "Non applicare debolezza o resistenza per questo attacco.",
            pt: "Não aplique fraqueza ou resistência a este ataque.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
