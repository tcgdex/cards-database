import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Metang",
		'fr-fr': "Metang",
		'de-de': "Metang"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [375],

	hp: 80,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Metallic Lift",
				'fr-fr': "Élévation métallique",
				'de-de': "Metalltransporter"
			},
			effect: {
				'en-us': "If Metang has any Metal Energy attached to it, the Retreat Cost for Metang is 0.",
				'fr-fr': "Si Metang possède de l'Énergie Metal, son Coût de retraite est de 0.",
				'de-de': "Wenn an Metang mindestens 1 -Energie angelegt ist, hat Metang Rückzugskosten 0."
			}
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
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'de-de': "Psychokinese"
			},
			effect: {
				'en-us': "Does 40 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte plus 10 weitere Schadenspunkte für jede Energie, die am Verteidigenden Pokémon angelegt ist, zu."
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

	description: {
		'en-us': "It is formed by two Beldum joining together. Its steel body won't be scratched if it collides with a jet."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87380,
				cardmarket: 278760
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278760,
				tcgplayer: 87380
			}
		},
	],

}

export default card
