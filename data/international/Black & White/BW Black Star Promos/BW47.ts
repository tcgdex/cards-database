import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Rayquaza-EX",
		'fr-fr': "Rayquaza ex",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 170,
	types: [
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Celestial Roar",
				'fr-fr': "Cri du Ciel",
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie, attachez-les à ce Pokémon.",
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				'en-us': "Dragon Burst",
				'fr-fr': "Fureur du Dragon",
			},
			effect: {
				'en-us': "Discard all basic Fire Energy or all basic Lightning Energy attached to this Pokémon. This attack does 60 damage times the number of Energy cards you discarded.",
				'fr-fr': "Défaussez toutes les Énergies Fire de base ou toutes les Énergies Lightning de base attachées à ce Pokémon. Cette attaque inflige 60 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
