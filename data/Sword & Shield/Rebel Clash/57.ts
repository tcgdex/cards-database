import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode"
	},

	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Orb Collector",
				fr: "Collectionneur d’Orbes"
			},
			effect: {
				en: "Search your deck for up to 3 Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 3 cartes Énergie, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Rolling Attack",
				fr: "Attaque Qui Roule"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	hp: 90,
	types: ["Lightning"],
	regulationMark: "D"
}

export default card
