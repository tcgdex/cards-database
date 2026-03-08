import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Heal Energy",
		fr: "Énergie guérisseuse",
		de: "Heilungs-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Heal Energy provides  Energy. When you attach this card from your hand to 1 of your Pokémon, remove 1 damage counter and all Special Conditions from that Pokémon. If heals Energy is attached to Pokémon-ex, Heal Energy has no effect other than providing Energy."
	},

	thirdParty: {
		tcgplayer: 86037,
		cardmarket: 276497
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"]
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"]
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"]
		},
	]
}

export default card
