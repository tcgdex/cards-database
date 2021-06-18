import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Deerling",
		fr: "Vivaldaim"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Growl",
			fr: "Rugissement"
		},

		effect: {
			en: "During your opponent’s next turn, the Defending Pokémon’s attacks do 20 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance)."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Rear Kick",
			fr: "Ruade"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card