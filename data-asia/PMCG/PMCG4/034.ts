import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Kadabra",
         ja: "暗いカダブラ",
         fr: "Kadabra noir",
         de: "Dark Kadabra",
         es: "Kadabra oscuro",
         it: "Kadabra oscuro",
         pt: "Kadabra escuro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [64],
      hp: 50,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Matter Exchange",
            ja: "物質交換",
            fr: "Échange de matière",
            de: "Materieaustausch",
            es: "Intercambio de la materia",
            it: "Scambio di materia",
            pt: "Troca de matéria",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may discard a card from your hand. If you do, draw a card. This power can't be used if this Pokmon is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前）</em>中に、手からカードを捨てることができます。もしそうなら、カードを描きます。このポケモンが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez jeter une carte de votre main. Si vous le faites, tracez une carte. Cette puissance ne peut pas être utilisée si ce Pokémon est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie eine Karte von Ihrer Hand wegwerfen. Wenn Sie dies tun, zeichnen Sie eine Karte. Diese Kraft kann nicht verwendet werden, wenn dieses Pokémon von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede descartar una carta de su mano. Si lo haces, dibuja una tarjeta. Esta potencia no se puede usar si este Pokémon se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi scartare una carta dalla tua mano. Se lo fai, disegna una carta. Questa potenza non può essere utilizzata se questo Pokemon è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode descartar um cartão da sua mão. Se o fizer, desenhe um cartão. Esse poder não pode ser usado se esse Pokemon for afetado por uma condição especial.",
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
            en: "This attack's damage isn't affected by Weakness or Resistance.",
            ja: "この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
            fr: "Les dommages de cette attaque ne sont pas affectés par la faiblesse ou la résistance.",
            de: "Der Schaden dieses Angriffs ist nicht von Schwäche oder Widerstand beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la debilidad o la resistencia.",
            it: "Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
            pt: "O dano desse ataque não é afetado pela fraqueza ou resistência.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
