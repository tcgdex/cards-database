import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Warp Point",
		fr: "Point d'échange",
		de: "Verkrümmungspunkt"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Your opponent switches 1 of his or her Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch 1 of your Active Pokémon with 1 of your Benched Pokémon, if any.",
		fr: "Votre adversaire échange 1 de ses Pokémon Défenseurs avec 1 des Pokémon de son Banc, s'il en a. Vous échangez 1 de vos Pokémon Actifs avec 1 des Pokémon de votre Banc, si vous en avez.",
		de: "Your opponent switches 1 of his or her Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch 1 of your Active Pokémon with 1 of your benched Pokémon, if any."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275862,
				tcgplayer: 90478
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275862,
				tcgplayer: 90478
			}
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				cardmarket: 871860,
				tcgplayer: 477461
			}
		}
	],

	retreat: 0
}

export default card
