import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [233],
	set: Set,

	name: {
		en: "Porygon2",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		en: "Porygon",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Powered Ball",
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "GOSSAN",
	description: {
		en: "After artificial intelligence was implemented in Porygon2, the Pokémon began using a strange language that only other Porygon2 understand.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 785847,
				tcgplayer: 585577
			},
		}
	],
}

export default card
