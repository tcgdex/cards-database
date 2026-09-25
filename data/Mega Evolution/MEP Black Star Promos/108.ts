import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Espeon ex",
	},

	suffix: "ex",
	illustrator: "REND",
	rarity: "Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [196],

	evolveFrom: {
		en: "Eevee",
	},

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Solar Beatdown",
		},

		effect: {
			en: "This attack does 30 damage for each of your Pokémon in play.",
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895616,
				tcgplayer: 713258
			}
		}
	],
}

export default card
