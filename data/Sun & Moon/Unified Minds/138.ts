import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
		es: "Scrafty",
		it: "Scrafty",
		pt: "Scrafty",
		de: "Irokex"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		560,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Turf Raid",
				fr: "Raid Territorial",
				es: "Incursión Territorial",
				it: "Raid Territoriale",
				pt: "Incursão Territorial",
				de: "Revier-Raid"
			},
			effect: {
				en: "This attack does 20 more damage for each of your remaining Prize cards.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacune des cartes Récompense qu’il vous reste.",
				es: "Este ataque hace 20 puntos de daño más por cada carta de Premio que te quede.",
				it: "Questo attacco infligge 20 danni in più per ogni carta Premio che ti resta.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada uma das suas cartas de Prêmio restantes.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl deiner verbleibenden Preiskarten zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbang",
				fr: "Frappe de Tête",
				es: "Cabecear",
				it: "Scuotitesta",
				pt: "Baque de Cabeça",
				de: "Headbangen"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 388487
	}
}

export default card
