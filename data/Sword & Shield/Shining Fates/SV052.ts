import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Théffroi",
		en: "Sinistea"
	},

	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Chute Furtive",
			en: "Furtive Drop"
		},

		effect: {
			fr: "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			en: "Put 2 damage counters on your opponent’s Active Pokémon."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card