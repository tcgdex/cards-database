import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [247],
	set: Set,

	name: {
		fr: "Ymphect",
		en: "Pupitar",
		es: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		de: "Pupitar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		fr: "Embrylex",
		en: "Larvitar",
		es: "Larvitar",
		it: "Larvitar",
		pt: "Larvitar",
		de: "Larvitar"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Culbute Surprise",
			en: "Headbutt Bounce",
			es: "Bote Cabezazo",
			it: "Rimbalzo Bottintesta",
			pt: "Cabeçada Ricochete",
			de: "Abrupter Kopfstoß"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715586,
				tcgplayer: 497526,
				cardtrader: 248757
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 858715
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715586,
				tcgplayer: 497526,
				cardtrader: 248757
			}
		},
	],

	illustrator: "Shigenori Negishi",

	description: {
		en: "This pupa flies around wildly by venting with great force the gas pressurized inside its body.",
	},
}

export default card
