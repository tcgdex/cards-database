import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Roublenard",
		en: "​Thievul"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Goupilou",
		en: "Nickit"
	},

	attacks: [{
		name: {
			fr: "Appel à la Rescousse",
			en: "Call for Goons"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu’à 3 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Then, shuffle your deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Coinçage",
			en: "Corner"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent’s next turn, the Defending Pokémon can’t retreat."
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card