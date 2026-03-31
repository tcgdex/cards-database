import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
		es: "Fletchinder",
		de: "Dartignis",
		it: "Fletchinder",
		pt: "Fletchinder"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		662
	],
	hp: 90,
	types: [
		"Fire"
	],
	stage: "Stage1",
	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
		es: "Fletchling",
		de: "Dartiri",
		it: "Fletchling",
		pt: "Fletchling"
	},
	attacks: [
		{
			cost: [
				"Fire",
				"Fire"
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
				es: "Llama",
				de: "Flackern",
				it: "Fiammata",
				pt: "Chama"
			},
			damage: "60"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Sumiyoshi Kizuki",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684404,
		cardmarket: 877425
	}
}

export default card
