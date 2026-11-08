import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'de-de': "Ariados"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [168],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leech Life",
				'fr-fr': "Vampirisme",
				'de-de': "Blutsauger"
			},
			effect: {
				'en-us': "Remove from Ariados the number of damage counters equal to the damage you did to the Defending Pokémon.",
				'fr-fr': "Retirez de Migalos autant de marqueurs de dégâts que de dégâts que vous avez infligés au Pokémon Défenseur.",
				'de-de': "Entferne Schadensmarken von Ariados entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon durch diesen Angriff zugefügt wurden."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poisonous Saliva",
				'fr-fr': "Salive empoisonnée",
				'de-de': "Giftsabber"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It spins string not only from its rear but also from its mouth. It’s hard to tell which end is which."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83618,
				cardmarket: 278987
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83618,
				cardmarket: 278987
			}
		},
	],

}

export default card
