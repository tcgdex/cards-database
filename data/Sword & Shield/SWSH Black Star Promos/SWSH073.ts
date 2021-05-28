import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Sobble",
		fr: "Larméléon"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

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
			en: "Rain Splash",
			fr: "Pluie Éclaboussante"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card