import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Buried Fossil",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 30,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Reconstruction",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have a basic Energy card in your hand, you may search your deck for an Omanyte or Kabuto card, show it to your opponent, and put it into your hand. Then put a basic Energy card from your hand into your deck. Shuffle your deck afterward.",
			},
		},
	],







}

export default card
