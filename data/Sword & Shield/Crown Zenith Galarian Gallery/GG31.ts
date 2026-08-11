import { Card } from "../../../interfaces"
import Set from "../Crown Zenith Galarian Gallery"

const card: Card = {
	dexId: [387],
	set: Set,

	name: {
		en: "Turtwig",
		fr: "Tortipouss",
		es: "Turtwig",
		it: "Turtwig",
		pt: "Turtwig",
		de: "Chelast"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
			es: "Bote Cabezazo",
			it: "Rimbalzo Bottintesta",
			pt: "Cabeçada Ricochete",
			de: "Abrupter Kopfstoß"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		en: "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691910,
				tcgplayer: 478059
			}
		},
	],
}

export default card
