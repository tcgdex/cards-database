import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [193],
	set: Set,

	name: {
		en: "Yanma",
		es: "Yanma",
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
			es: "Ala Silenciosa",
		},

		effect: {
			en: "Your opponent reveals their hand.",
			es: "Tu rival enseña las cartas de su mano.",
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
