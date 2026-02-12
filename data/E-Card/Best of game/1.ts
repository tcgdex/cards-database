import { Card } from '../../../interfaces'
import Set from '../Best of game'

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		en: "Electabuzz"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "Normally found near power plants, it can wander away and cause major blackouts in cities."
	},
	

	types: ["Lightning",],

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thundershock"
		},

		damage: 10,

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Thunderpunch"
		},

		damage: "30+",

		effect: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, the attack does 30 damage and Electabuzz does 10 damage to itself."
		}
	}],

	thirdParty: {
		cardmarket: 275411,
		tcgplayer: 85106
	},

	variants: [
		{
			type: "reverse",
			foil: "cosmos"
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["winner"]
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["winner"],
			size: "jumbo"
		}
	]
}

export default card
