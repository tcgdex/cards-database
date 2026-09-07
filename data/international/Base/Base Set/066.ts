import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'de-de': "Tangela",
		'it-it': "Tangela"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		114,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Bind",
				'fr-fr': "Étreinte",
				'de-de': "Klammergriff",
				'it-it': "Legatutto"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon gelähmt.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Poisonpowder",
				'fr-fr': "Poudre Toxik",
				'de-de': "Giftpuder",
				'it-it': "Velenpolvere"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "das verteidigende Pokémon ist vergiftet.",
				'it-it': "Il Pokémon Difensore è Avvelenato."
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
	retreat: 2,


	description: {
		'en-us': "Its whole body is swathed with wide vines that are similar to seaweed. These vines shake as it walks.",
		'fr-fr': "Son corps est recouvert de lianes similaires à des algues. Elles bougent quand il marche.",
		'it-it': "Il suo corpo è avvolto interamente da larghi rampicanti simili ad alghe, che si agitano quando cammina. LIV 8 N.114"

	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273761,
				tcgplayer: 42411
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107063
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107063
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
