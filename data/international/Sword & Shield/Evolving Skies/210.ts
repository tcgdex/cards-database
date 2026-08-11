import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Dracozolt VMAX",
		'fr-fr': "Galvagon VMAX",
		'es-es': "Dracozolt VMAX",
		'it-it': "Dracozolt VMAX",
		'pt-br': "Dracozolt VMAX",
		'de-de': "Lectragon VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "VMAX",
	illustrator: "5ban Graphics",
	dexId: [880],

	evolveFrom: {
		'en-us': "Dracozolt V",
		'fr-fr': "Galvagon-V",
		'es-es': "Dracozolt V",
		'it-it': "Dracozolt-V",
		'pt-br': "Dracozolt V",
		'de-de': "Lectragon-V"
	},

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Spark Trap",
			'fr-fr': "Piège Étincelle"
		},

		effect: {
			'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 12 damage counters on the Attacking Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez 12 marqueurs de dégâts sur le Pokémon Attaquant."
		},

		damage: 60
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Max Impact",
			'fr-fr': "Impactomax"
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 574268,
				tcgplayer: 246925
			}
		},
	],
}

export default card
