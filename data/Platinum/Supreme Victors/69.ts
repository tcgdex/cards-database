import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Metang",
		fr: "Metang",
		de: "Metang"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		375,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Beldum",
		fr: "Terhal",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Metallic Lift",
				fr: "Élévation métallique",
				de: "Metalltransporter"
			},
			effect: {
				en: "If Metang has any Metal Energy attached to it, the Retreat Cost for Metang is 0.",
				fr: "Si Metang possède de l'Énergie Metal, son Coût de retraite est de 0.",
				de: "Wenn an Metang mindestens 1 -Energie angelegt ist, hat Metang Rückzugskosten 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				de: "Psychokinese"
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede Energie, die am Verteidigenden Pokémon angelegt ist, zu."
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
