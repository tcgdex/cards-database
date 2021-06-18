import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb",
		fr: "Spiritomb"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Ghostly Cries",
			fr: "Lamentations Spectrales"
		},

		effect: {
			en: "For each Pokémon in your opponent’s discard pile, put 1 damage counter on your opponent’s Pokémon in any way you like. If you placed any damage counters in this way, your opponent shuffles all Pokémon from their discard pile into their deck.",
			fr: "Pour chaque Pokémon dans la pile de défausse de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire comme il vous plaît. Si vous avez placé des marqueurs de dégâts de cette façon, votre adversaire mélange tous les Pokémon de sa pile de défausse avec son deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card