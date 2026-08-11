import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Exploud",
		'fr-fr': "Brouhabam",
		'es-es': "Exploud",
		'it-it': "Exploud",
		'pt-br': "Exploud",
		'de-de': "Krawumms"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		295,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Destructive Sound",
				'fr-fr': "Son Destructeur",
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand. Discard all Item cards you find there.",
				'fr-fr': "Votre adversaire montre sa main. Défaussez toutes les cartes Objet que vous y trouvez.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Round",
				'fr-fr': "Chant Canon",
			},
			effect: {
				'en-us': "Does 50 damage times the number of your Pokémon that have the Round attack.",
				'fr-fr': "Inflige 50 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Its howls can be heard over six miles away. It emits all sorts of noises from the ports on its body.",
	},

	thirdParty: {
		cardmarket: 280847,
		tcgplayer: 85374
	}
}

export default card
