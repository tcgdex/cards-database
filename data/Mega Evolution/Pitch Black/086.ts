import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "This Pokémon clads itself in armor that has been fortified by psychic and fire energy, and it shoots blazing fireballs.",
		de: "Es trägt eine Rüstung, die mit Psycho- sowie Feuer-Energie verstärkt wurde, und verschießt glühend heiße Feuerbälle."
	},

	name: {
		en: "Armarouge",
		fr: "Carmadura",
		es: "Armarouge",
		'es-mx': "Armarouge",
		de: "Crimanzo"
	},

	illustrator: "Iwamoto05",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [936],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Charcadet"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flame Legion",
			es: "Legión de Llamas",
			'es-mx': "Legión de Fuego",
			de: "Flammenlegion"
		},

		cost: ["Fire"],

		damage: "40+",

		effect: {
			en: "This attack does 40 more damage for each of your Benched Pokémon that have Fire Energy attached",
			es: "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon en Banca que tengan alguna Energía {R} unida.",
			'es-mx': "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon en Banca que tengan alguna Energía {R} unida.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, an das mindestens 1 {R}-Energie angelegt ist, 40 Schadenspunkte mehr zu."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895870,
				tcgplayer: 704843
			}
		},
	],
}

export default card
