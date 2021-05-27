import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Sapereau",
		en: "Bunnelby"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Folle Aventure",
			en: "Mad Party"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l’attaque Folle Aventure.",
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card