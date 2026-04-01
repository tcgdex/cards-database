import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
		es: "Barbaracle",
		'es-mx': "Barbaracle",
		de: "Thanathora",
		it: "Barbaracle",
		pt: "Barbaracle"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Stone Arms",
			fr: "Bras de Pierre",
			es: "Brazos de Piedra",
			'es-mx': "Extremidades Pétreas",
			de: "Arme aus Stein",
			it: "Braccia di Pietra",
			pt: "Braços de Pedra"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Attach a Basic {F} Energy card from your hand to 1 of your {F} Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Attachez une carte Énergie {F} de base de votre main à l'un de vos Pokémon {F}.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Une 1 carta de Energía {F} Básica de tu mano a uno de tus Pokémon {F}.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Une 1 carta de Energía {F} Básica de tu mano a 1 de tus Pokémon {F}.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Lege 1 Basis-{F}-Energiekarte aus deiner Hand an 1 deiner {F}-Pokémon an.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Assegna a uno dei tuoi Pokémon {F} una carta Energia base {F} dalla tua mano.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Ligue uma carta de Energia {F} Básica da sua mão a 1 dos seus Pokémon {F}."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			'es-mx': "Martillar",
			de: "Einhämmern",
			it: "Martello",
			pt: "Martelada"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684335,
		cardmarket: 877457
	}
}

export default card