import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Asako Ito",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Nap",
			fr: "Tit'Sieste",
			de: "Nickerchen",
			es: "Siesta",
			it: "Pausa",
			'es-mx': "Siesta"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907634,
				tcgplayer: 716310
			}
		}
	],
}

export default card
