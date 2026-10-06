import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [559],
	set: Set,

	name: {
		en: "Scraggy",
		fr: "Baggiguane",
	},

	illustrator: "OKUBO",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Kick Shot",
			fr: "Coup d'Ergots",
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 817777,
				tcgplayer: 627707
			},
		}
	],
}

export default card
