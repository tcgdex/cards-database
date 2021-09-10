import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
		es: "Raticate",
		it: "Raticate",
		pt: "Raticate",
		de: "Rattikarl"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw Through",
				fr: "Grignotage",
			},
			effect: {
				en: "Discard a Pokémon Tool card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Outil Pokémon attachée au Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Fang",
				fr: "Croc Fatal",
			},
			effect: {
				en: "Put damage counters on the Defending Pokémon until its remaining HP is 10.",
				fr: "Placez des marqueurs de dégâts sur le Pokémon Défenseur jusqu'à ce qu'il ait 10 PV.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
