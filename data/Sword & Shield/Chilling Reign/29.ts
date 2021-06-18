import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Lapras",
		fr: "Lokhlass"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Wintry Call",
			fr: "Appel Hivernal"
		},

		effect: {
			en: "Search your deck for up to 2 Melony cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 2 cartes Lona, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Icy Wind",
			fr: "Vent Glace"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card