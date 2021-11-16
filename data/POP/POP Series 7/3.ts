import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Latias",
		fr: "Latias"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		380,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Miraculous Light",
				fr: "Lumière miraculeuse"
			},
			effect: {
				en: "Remove 2 damage counters and all Special Conditions from Latias.",
				fr: "Retirez à Latias 2 marqueurs de dégât ainsi que tous ses États Spéciaux."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Mist Ball",
				fr: "Boule de brume"
			},
			effect: {
				en: "Discard a Fire Energy and a Water Energy attached to Latias.",
				fr: "Défaussez une Énergie  et une Énergie  attachée à Latias."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		en: "Its body is covered with a down that can refract light in such a way that it becomes invisble.",
		fr: "Son corps est recouvert d'un duvet qui reflète la lumière et le rend invisible."
	},

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
