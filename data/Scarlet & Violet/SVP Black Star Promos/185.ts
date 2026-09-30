import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [193],
	set: Set,

	name: {
		en: "Yanma",
		fr: "Yanma",
	},

	illustrator: "Dsuke",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Silent Wing",
			fr: "Aile Silencieuse",
		},

		effect: {
			en: "Your opponent reveals their hand.",
			fr: "Votre adversaire montre sa main.",
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 817776,
				tcgplayer: 627706
			},
		}
	],
}

export default card
