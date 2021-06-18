import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Sobble",
		fr: "Larméléon"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Keep Calling",
			fr: "Appel Continu"
		},

		effect: {
			en: "Search your deck for up to 3 Basic Rapid Strike Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 3 Pokémon Mille Poings de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Double Spin",
			fr: "Double Tour"
		},

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card