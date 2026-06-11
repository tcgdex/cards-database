import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [536],
	set: Set,

	name: {
		fr: "Batracné",
		en: "Palpitoad",
		es: "Palpitoad",
		it: "Palpitoad",
		pt: "Palpitoad",
		de: "Mebrana"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		fr: "Tritonde",
		en: "Tympole",
		es: "Tympole",
		it: "Tympole",
		pt: "Tympole",
		de: "Schallquap"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Pluie Éclaboussante",
			en: "Rain Splash",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			de: "Regenplatscher"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "On occasion, their cries are sublimely pleasing to the ear. Palpitoad with larger lumps on their bodies can sing with a wider range of sounds.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725131,
				tcgplayer: 509794,
				cardtrader: 255611
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725131,
				tcgplayer: 509794,
				cardtrader: 255611
			}
		},
	],

	illustrator: "sowsow",

	
}

export default card
