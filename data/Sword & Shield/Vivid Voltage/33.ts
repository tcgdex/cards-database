import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [501],

	name: {
		en: "Oshawott",
		fr: "Moustillon",
		es: "Oshawott",
		it: "Oshawott",
		pt: "Oshawott",
		de: "Ottaro"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revólver d'Água",
				de: "Aquaknarre"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Seashell Attack",
				fr: "Carap'Attaque",
				es: "Conchaataque",
				it: "Conchigliata",
				pt: "Ataque de Concha do Mar",
				de: "Seemuschelangriff"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing."
	},

	thirdParty: {
		cardmarket: 511585
	}
}

export default card
