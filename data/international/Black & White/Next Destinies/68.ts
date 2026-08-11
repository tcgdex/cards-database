import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Mienshao",
		'fr-fr': "Shaofouine",
		'es-es': "Mienshao",
		'it-it': "Mienshao",
		'pt-br': "Mienshao",
		'de-de': "Wie-Shu"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		620,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Haul In",
				'fr-fr': "Mainmise",
			},
			effect: {
				'en-us': "Search your deck for 2 Pokémon Tool cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez 2 cartes Outil Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Meditate",
				'fr-fr': "Yoga",
			},
			effect: {
				'en-us': "Does 10 more damage for each damage counter on the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They use the long fur on their arms as a whip to strike their opponents.",
	},

	thirdParty: {
		cardmarket: 280293,
		tcgplayer: 87441
	}
}

export default card
