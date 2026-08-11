import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Zapdos",
		'fr-fr': "Electhor",
		'de-de': "Zapdos"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [145],

	hp: 80,

	types: [
		"Lightning"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Anti-Lightning",
				'fr-fr': "Anti-éclair",
				'de-de': "Anti-Blitz"
			},
			effect: {
				'en-us': "You can't attach Lightning Energy cards from your hand to Zapdos.",
				'fr-fr': "Vous ne pouvez pas attacher de cartes Énergie  depuis votre main à Electhor.",
				'de-de': "Du kannst keine  - Energiekarte aus deiner Hand an Zapdos anlegen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Plasma",
				'fr-fr': "Plasma",
				'de-de': "Plasma"
			},
			effect: {
				'en-us': "If there are any Lightning Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Zapdos.",
				'fr-fr': "Si vous avez des cartes Énergie  dans votre pile de défausse, lancez une pièce. Si c'est face, attachez l'une d'elles à Electhor.",
				'de-de': "Wenn mindestens eine  - Energiekarte in deinem Ablagestapel ist, wirf eine Münze. Lege bei \"Kopf\" 1 davon an Zapdos an."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Storm",
				'fr-fr': "Orage d'éclairs",
				'de-de': "Blitzsturm"
			},
			effect: {
				'en-us': "Flip a coin. If tails, put 2 damage counters on Zapdos.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez 2 marqueurs de dégâts sur Electhor.",
				'de-de': "Wirf eine Münze. Lege bei \"Zahl\" 2 Schadensmarken auf Zapdos."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90715,
				cardmarket: 275116
			}
		},
	]
}

export default card
