import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Pawmi",
		fr: "Pohm",
		es: "Pawmi",
		it: "Pawmi",
		pt: "Pawmi",
		de: "Pamo"
	},

	illustrator: "kantaro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [921],

	hp: 60,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Light Punch",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				en: "Zap Kick",
				fr: "Coup d'Jus",
				es: "Patada Eléctrica",
				it: "Elettrocalcio",
				pt: "Chute Elétrico",
				de: "Stromtritt"
			},
			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725424,
				tcgplayer: 516518
			}
		}
	]
}

export default card

