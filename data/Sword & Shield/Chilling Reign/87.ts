import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Lycanroc",
		fr: "Lougaroc"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot"
	},

	attacks: [{
		name: {
			en: "Rogue Fangs",
			fr: "Crocs Fougueux"
		},

		effect: {
			en: "This attack does 10 more damage for each Single Strike Pokémon in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon Poing Final dans votre pile de défausse."
		},

		damage: "80+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card