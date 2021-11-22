import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Chimecho δ",
		fr: "Eoko δ ESPÈCES DELTA"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		358,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Support",
				fr: "Support Delta"
			},
			effect: {
				en: "Once during your turn (before your attack), if you have a Supporter card with Holon in its name in play, you may search your discard pile for a basic Energy card or a δ Rainbow Energy card, show it to your opponent, and put it into your hand. This power can't be used if Chimecho is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez une carte Supporter dont le nom comporte Holon en jeu, vous pouvez choisir dans votre pile de défausse une carte Énergie de base ou une carte Énergie Multicolore δ. Montrez-la à votre adversaire et placez-la dans votre main. Ce pouvoir ne peut pas être utilisé si Eoko est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hook",
				fr: "Crochet"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
