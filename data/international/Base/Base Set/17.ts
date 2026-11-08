import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Beedrill",
		'fr-fr': "Dardargnan",
		'de-de': "Bibor",
		'it-it': "Beedrill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Kakuna",
		'fr-fr': "Coconfort",
		'it-it': "Kakuna"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Twineedle",
				'fr-fr': "Double-Dard",
				'de-de': "Duonadel",
				'it-it': "Doppio ago"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze Kopf zeigt, 30 Schadenspunkte zu.",
				'it-it': "Lancia 2 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa."
			},
			damage: "30x",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-Venin",
				'de-de': "Giftstachel",
				'it-it': "Velenospina"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf eine Münze. Bei Kopf ist das verteidigende Pokémon vergiftet.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon Difensore è Avvelenato."
			},
			damage: 40,

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

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273712,
				tcgplayer: 42357
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107012
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107012
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	description: {
		'en-us': "Flies at high speed and attacks using the large, venomous stingers on its forelegs and tail.",
		'fr-fr': "Il vole à très grande vitesse. Il se bat avec les dards empoisonnés de ses bras.",
		'it-it': " Vola ad alta velocità e attacca con i grandi pungiglioni velenosi che ha sulle zampe anteriori e sulla coda. LIV 32 N.15"
	},
}

export default card
