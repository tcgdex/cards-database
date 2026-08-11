import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Cryogonal",
		'fr-fr': "Hexagel",
		'es-es': "Cryogonal",
		'it-it': "Cryogonal",
		'pt-br': "Cryogonal",
		'de-de': "Frigometri"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call Sign",
				'fr-fr': "Signe d’Appel",
			},
			effect: {
				'en-us': "Search your deck for a Water Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez un Pokémon Water dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Cryofreeze",
				'fr-fr': "Cryogel",
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon. The Defending Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon. Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They are composed of ice crystals. They capture prey with chains of ice, freezing the prey at -148° F.",
	},

	thirdParty: {
		cardmarket: 280908,
		tcgplayer: 84515
	}
}

export default card
