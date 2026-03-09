import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Tricky Gym",
		de: "Rocket´s Tricky Gym*"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Does 20 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
		de: "Each Pokémon with Dark or Rocket´s in its name (both yours and your opponent´s) can use attacks on this card instead of its own.  Feint Attack. Does 20 damage to 1 of your opponent´s Pokémon. This attack´s damage isn´t affected by Weakness, Resistance, Pokémon-Powers, Pokémon-Bodies, or any other effects on that Pokémon."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 276382,
		tcgplayer: 88798
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

