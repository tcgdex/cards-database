import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Marowak",
		'fr-fr': "Ossatueur",
		'es-es': "Marowak",
		'it-it': "Marowak",
		'pt-br': "Marowak",
		'de-de': "Knogga"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Bone Lock",
				'fr-fr': "Piège Osseux",
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vortex Chop",
				'fr-fr': "Coupe-Tourbillon",
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Resistance, this attack does 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur a une Résistance, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "From its birth, this savage Pokémon constantly holds bones. It is skilled in using them as weapons.",
	},

	thirdParty: {
		cardmarket: 280500,
		tcgplayer: 87229
	}
}

export default card
