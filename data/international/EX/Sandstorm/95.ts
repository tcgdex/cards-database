import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Aggron ex",
		'fr-fr': "Galeking ex",
		'de-de': "Stollos ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [306],

	hp: 150,

	stage: "Stage2",
	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rend",
				'fr-fr': "Déchirer",
				'de-de': "Rend"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède des marqueurs de dégât, cette attaque inflige 60 dégâts.",
				'de-de': "If the Defending Pokémon has any damage counters on it, this attack does 30 damage plus 30 more damage."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metal Surge",
				'fr-fr': "Vague métallique",
				'de-de': "Metal Surge"
			},
			effect: {
				'en-us': "Does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à chacun des Pokémon du Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				'de-de': "Does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for benched Pokémon.))"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 4,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83483,
				cardmarket: 275872
			}
		},
	]
}

export default card
