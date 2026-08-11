import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Jumpluff",
		'fr-fr': "Cotovol",
		'de-de': "Papungha"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sleep Powder",
				'fr-fr': "Poudre dodo",
				'de-de': "Schlafpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leech Seed",
				'fr-fr': "Vampigraine",
				'de-de': "Egelsamen"
			},
			effect: {
				'en-us': "If this attack damages the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Jumpluff, if it has any.",
				'fr-fr': "Si cette attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), retirez 1 marqueur de dégâts de Cotovol, s'il en possède.",
				'de-de': "Falls dieser Angriff dem Verteidigenden Pokémon Schadenspunkte zufügt, (nachdem Schwäche und Resistenz verrechnet wurden) entferne eine Schadensmarke von Papungha, falls es mindestens eine hat."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "Once it catches the wind, it deftly controls its cotton-puff spores to float, even around the world.",
		'fr-fr': "Une fois qu'il est sous le vent, il contrôle précisément ses spores cotonneuses pour flotter, même autour du monde."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274407,
				tcgplayer: 86361
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274407,
				tcgplayer: 86361
			}
		}
	]
}

export default card
