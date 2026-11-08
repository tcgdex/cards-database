import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Terrakion",
		'fr-fr': "Terrakium",
		'es-es': "Terrakion",
		'it-it': "Terrakion",
		'pt-br': "Terrakion",
		'de-de': "Terrakium"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		639,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Retaliate",
				'fr-fr': "Vengeance",
			},
			effect: {
				'en-us': "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 60 more damage.",
				'fr-fr': "Si l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Land Crush",
				'fr-fr': "Écras'Terre",
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Its charge is strong enough to break through a giant castle wall in one blow. This Pokémon is spoken of in legends.",
	},

	thirdParty: {
		cardmarket: 280196,
		tcgplayer: 89891
	}
}

export default card
