import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [570],
	set: Set,

	name: {
		en: "N's Zorua",
		fr: "Zorua de N",
		de: "Ns Zorua",
		es: "Zorua de N",
		it: "Zorua di N",
		pt: "Zorua do N"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817780,
				tcgplayer: 625181
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 819540,
				tcgplayer: 625182
			},
		}
	],
}

export default card
