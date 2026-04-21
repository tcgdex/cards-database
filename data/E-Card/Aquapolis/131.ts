import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Pokémon Park",
		fr: "Parc Pokémon",
		de: "Pokémon Park*"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -vous de cette carte si une autre carte Stade arrive en jeu.",
		de: "Once during each of his or her turns, whenever a player attaches an Energy card from his or her hand to 1 of his or her Benched Pokémon, he or she removes 1 damage counter, if any, from that Pokémon.",
	},

	thirdParty: {
		cardmarket: 275207
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
