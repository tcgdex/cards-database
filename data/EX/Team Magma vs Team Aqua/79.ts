import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Technical Machine 01",
		fr: "Machine Technique 01 de Team Aqua",
		de: "Team Aqua Technical Machine 01"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Attachez cette carte à 1 de vos Pokémon dont le nom comporte Team Aqua. Ce Pokémon peut utiliser l'attaque de cette carte à la place de ses attaques. À la fin du tour, défaussez Machine Technique 01 de Team Aqua.",
		de: "Attach this card to 1 of your Pokémon that has Team Aqua in its name. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Team Aqua Technical Machine 01."
	},

	attacks: [{
		name: {
			de: "Miracle"
		},

		damage: 10,

		effect: {
			de: "Choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition."
		},

		cost: ["Colorless"]
	}],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
