import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [689],

	name: {
		'en-us': "Barbaracle",
		'fr-fr': "Golgopathe",
		'es-es': "Barbaracle",
		'es-mx': "Barbaracle",
		'de-de': "Thanathora",
		'it-it': "Barbaracle",
		'pt-br': "Barbaracle"
	},

	evolveFrom: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
		'es-es': "Binacle",
		'es-mx': "Binacle",
		'de-de': "Bithora",
		'it-it': "Binacle",
		'pt-br': "Binacle",
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
			'en-us': "Stone Arms",
			'fr-fr': "Bras de Pierre",
			'es-es': "Brazos de Piedra",
			'es-mx': "Extremidades Pétreas",
			'de-de': "Arme aus Stein",
			'it-it': "Braccia di Pietra",
			'pt-br': "Braços de Pedra"
		},

		effect: {
			'en-us': "Once during your turn, you may use this Ability. Attach a Basic {F} Energy card from your hand to 1 of your {F} Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez utiliser ce talent. Attachez une carte Énergie {F} de base de votre main à l'un de vos Pokémon {F}.",
			'es-es': "Una vez durante tu turno, puedes usar esta habilidad. Une 1 carta de Energía {F} Básica de tu mano a uno de tus Pokémon {F}.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Une 1 carta de Energía {F} Básica de tu mano a 1 de tus Pokémon {F}.",
			'de-de': "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Lege 1 Basis-{F}-Energiekarte aus deiner Hand an 1 deiner {F}-Pokémon an.",
			'it-it': "Una sola volta durante il tuo turno, puoi usare questa abilità. Assegna a uno dei tuoi Pokémon {F} una carta Energia base {F} dalla tua mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá usar esta Habilidade. Ligue uma carta de Energia {F} Básica da sua mão a 1 dos seus Pokémon {F}."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'es-mx': "Martillar",
			'de-de': "Einhämmern",
			'it-it': "Martello",
			'pt-br': "Martelada"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684335,
				cardmarket: 877457
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684335,
				cardmarket: 877457
			}
		}
	],

}

export default card
