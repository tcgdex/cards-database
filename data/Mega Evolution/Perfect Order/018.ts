import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Seel",
		fr: "Otaria",
		es: "Seel",
		de: "Jurob",
		it: "Seel",
		pt: "Seel"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		86
	],
	hp: 80,
	types: [
		"Water"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water"
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
				es: "Golpe de Lluvia",
				de: "Regenplatscher",
				it: "Spruzzapioggia",
				pt: "Chuva Borrifante"
			},
			damage: "10"
		},
		{
			cost: [
				"Water",
				"Water"
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
				es: "Chapoteo Ondulante",
				de: "Wellenplatscher",
				it: "Schizzi d'Onda",
				pt: "Onda Borrifante"
			},
			damage: "30"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Kanami Ogata",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684372,
		cardmarket: 877430
	}
}

export default card
