import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Flapple V",
		fr: "Pomdrapi V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Sour Spit",
			fr: "Rejet Acide"
		},

		effect: {
			en: "During your opponent’s next turn, the Defending Pokémon’s attacks cost ColorlessColorless more.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent ColorlessColorless de plus."
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card