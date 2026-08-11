import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Haxorus",
		'fr-fr': "Tranchodon",
		'es-es': "Haxorus",
		'it-it': "Haxorus",
		'pt-br': "Haxorus",
		'de-de': "Maxax"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		612,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Dragonaxe",
				'fr-fr': "Hache Draconique",
			},
			effect: {
				'en-us': "Does 40 damage times the amount of Metal Energy attached to this Pokémon.",
				'fr-fr': "Inflige 40 dégâts multipliés par le nombre d'Énergies Metal attachées à ce Pokémon.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				'en-us': "Strike of the Champion",
				'fr-fr': "Frappe de Maître",
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Team Plasma Pokémon, it is Knocked Out. (If the Defending Pokémon is not a Team Plasma Pokémon, this attack does nothing.)",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon de la Team Plasma, il est mis K.O. (Si le Pokémon Défenseur n'est pas un Pokémon de la Team Plasma, cette attaque ne fait rien.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its tusks are incredibly destructive. They can easily slice through a thick, sturdy steel column every time.",
	},

	thirdParty: {
		cardmarket: 281090,
		tcgplayer: 86036
	}
}

export default card
