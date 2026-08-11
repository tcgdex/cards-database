import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Pelipper",
		'fr-fr': "Bekipan",
		'de-de': "Pelipper"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [279],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Wingull",
		'fr-fr': "Goélise"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stockpile",
				'fr-fr': "Stockage",
				'de-de': "Horter"
			},
			effect: {
				'en-us': "During your next turn, Spit Up's base damage is 70 instead of 30, and Swallow's base damage is 60 instead of 20.",
				'fr-fr': "Pendant votre prochain tour, les dégâts de base infligés par l'attaque Relâche sont de 70 au lieu de 30, et ceux de l'attaque Avale sont de 60 au lieu de 20.",
				'de-de': "In deinem nächsten Zug beträgt der Grundschaden des Angriffs Entfessler 70 Schadenspunkte anstelle von 30 und der Grundschaden des Angriffs Verschlucken 60 Schadenspunkte anstelle von 20."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Spit Up",
				'fr-fr': "Relâche",
				'de-de': "Entfessler"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swallow",
				'fr-fr': "Avale",
				'de-de': "Verschlucken"
			},
			effect: {
				'en-us': "After your attack, remove from Pelipper the number of damage counters equal to the damage you did to the Defending Pokémon. If Pelipper has fewer damage counters than that, remove all of them.",
				'fr-fr': "Après avoir attaqué, retirez à Bekipan autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur. Si Bekipan a moins de marqueurs de dégât que de points infligés, retirez-lui tous ses marqueurs de dégât.",
				'de-de': "Entferne nach deinem Angriff Schadensmarken von Pelipper entsprechend der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon zugefügt wurden. Sollten weniger Schadenspunkte auf Pelipper liegen, entferne alle."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275667,
				tcgplayer: 87974
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275667,
				tcgplayer: 87974
			}
		},
	],

}

export default card
