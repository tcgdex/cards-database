import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos",
	},

	illustrator: "SIE NANAHARA",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [145],

	abilities: [{
		type: "Ability",

		name: {
			en: "Flash-Pop Flapping",
		},

		effect: {
			en: "Once during your turn, if you have Moltres and Articuno in play, you may use this Ability. Attach a Basic {L} Energy card from your hand to this Pokémon.",
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thundering Lightning",
		},

		effect: {
			en: "This Pokémon also does 60 damage to itself.",
		},

		damage: 210
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895608,
				tcgplayer: 713266
			}
		}
	],
}

export default card
