import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Boltund",
		fr: "Fulgudog"
	},

	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		en: "Yamper",
		fr: "Voltoutou"
	},

	attacks: [{
		name: {
			en: "Corner",
			fr: "Coinçage"
		},

		effect: {
			en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Defiant Spark",
			fr: "Étincelle Rebelle"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack can be used for Lightning.",
			fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque peut être utilisée pour Lightning."
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card