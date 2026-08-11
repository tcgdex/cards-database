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
	trainerType: "Stadium",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each of his or her turns, whenever a player attaches an Energy card from his or her hand to 1 of his or her Benched Pokémon, he or she removes 1 damage counter, if any, from that Pokémon.",
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez -vous de cette carte si une autre carte Stade arrive en jeu.",
		de: "Once during each of his or her turns, whenever a player attaches an Energy card from his or her hand to 1 of his or her Benched Pokémon, he or she removes 1 damage counter, if any, from that Pokémon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 275207,
				tcgplayer: 88230
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 275207,
				tcgplayer: 88230
			}
		},
	]
}

export default card
