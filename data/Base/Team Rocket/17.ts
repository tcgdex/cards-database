import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Rainbow Energy",
		fr: "Énergie multicolore",
		de: "Regenbogen-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Rare",
	category: "Energy",
	set: Set,

	effect: {
		de: "Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy counts as every type of basic Energy but only provide 12 Energy at a time. (Doesn't count as a basic Energy card when not in play.) When your attach this card from your hand to 1 of your Pokémon, it does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.)"
	},

	thirdParty: {
		cardmarket: 274070,
		tcgplayer: 88550
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
