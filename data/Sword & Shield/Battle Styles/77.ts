import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Mienshao",
		fr: "Shaofouine"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine"
	},

	attacks: [{
		name: {
			en: "Pound",
			fr: "Écras’Face"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Spinning Whip",
			fr: "Fouet Tournant"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused. Shuffle this Pokémon and all attached cards into your deck.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Mélangez dans votre deck ce Pokémon et toutes les cartes attachées."
		},

		damage: 90,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card