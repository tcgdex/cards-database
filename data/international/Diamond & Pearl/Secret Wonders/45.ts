import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'de-de': "Kapilz"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		286,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Drain Punch",
				'fr-fr': "Vampipoing",
				'de-de': "Ableithieb"
			},
			effect: {
				'en-us': "Remove from Breloom a number of damage counters equal to the amount of Energy attached to the Defending Pokémon.",
				'fr-fr': "Retirez à Chapignon autant de marqueurs de dégât qu'il y a d'Énergie attachée au Pokémon Défenseur.",
				'de-de': "Entferne eine Anzahl Schadensmarken von Kapilz, die der Anzahl der am Verteidigenden Pokémon angelegten Energien entspricht."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Homing Uppercut",
				'fr-fr': "Uppercut à tête chercheuse",
				'de-de': "Gezielter Aufwärtshaken"
			},
			effect: {
				'en-us': "If the Defending Pokémon's Retreat Cost is 0, this attack does 60 damage plus 60 more damage.",
				'fr-fr': "Si le Coût de retraite du Pokémon Défenseur est de 0, cette attaque inflige 60 dégâts plus 60 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon Rückzugskosten 0 hat, fügt dieser Angriff 60 Schadenspunkte plus 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its short arms stretch when it throws punches. Its technique is equal to that of pro boxers.",
	},

	thirdParty: {
		cardmarket: 277798,
		tcgplayer: 83957
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
