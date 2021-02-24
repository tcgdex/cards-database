import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Rayquaza-EX",
		fr: "Rayquaza ex",
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
				en: "Celestial Roar",
				fr: "Cri du Ciel",
			},
			effect: {
				en: "Discard the top 3 cards of your deck. If any of those cards are Energy cards, attach them to this Pokémon.",
				fr: "Défaussez les 3 cartes du dessus de votre deck. Si vous y trouvez des cartes Énergie, attachez-les à ce Pokémon.",
			},

		},
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Dragon Burst",
				fr: "Fureur du Dragon",
			},
			effect: {
				en: "Discard all basic Fire Energy or all basic Lightning Energy attached to this Pokémon. This attack does 60 damage times the number of Energy cards you discarded.",
				fr: "Défaussez toutes les Énergies Fire de base ou toutes les Énergies Lightning de base attachées à ce Pokémon. Cette attaque inflige 60 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
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
