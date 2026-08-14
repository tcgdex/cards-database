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
		de: "Rattfratz"
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
				de: "Durchnagen"
			},
			effect: {
				en: "Discard a Pokémon Tool card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Outil Pokémon attachée au Pokémon Défenseur.",
				de: "Lege 1 an das Verteidigende Pokémon angelegte Pokémon-Ausrüstung auf den Ablagestapel deines Gegners."
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
				de: "Superzahn"
			},
			effect: {
				en: "Put damage counters on the Defending Pokémon until its remaining HP is 10.",
				fr: "Placez des marqueurs de dégâts sur le Pokémon Défenseur jusqu'à ce qu'il ait 10 PV.",
				de: "Lege so lang Schadensmarken auf das Verteidigende Pokémon, bis es noch 10 KP übrig hat."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "With its long fangs, this surprisingly violent Pokémon can gnaw away even thick concrete with ease.",
		de: "Ein überraschend brutales Pokémon. Seine langen Nagezähne sind äußerst stark und durchbrechen selbst Beton."
	},

	thirdParty: {
		cardmarket: 280692,
		tcgplayer: 88607
	}
}

export default card
