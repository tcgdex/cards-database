import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Rapid Strike Urshifu",
		fr: "Shifours Mille Poings"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Kubfu",
		fr: "Wushours"
	},

	attacks: [{
		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Rapid-Fisted Rush",
			fr: "Mille Poings Chargés"
		},

		effect: {
			en: "This attack does 30 damage for each of your Rapid Strike Pokémon in play.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon Mille Poings en jeu."
		},

		damage: "30×",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card