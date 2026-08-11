import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [26],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

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
				'en-us': "If there are any Lightning Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Raichu.",
				'fr-fr': "Si vous avez des cartes Énergie  dans votre pile de défausse, lancez une pièce. Si c'est face, attachez l'une d'elles à Raichu.",
				'de-de': "Wenn mindestens eine -Energiekarte in deinem Ablagestapel ist, wirf eine Münze. Lege bei 'Kopf' 1 davon an Raichu an."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Shock Bolt",
				'fr-fr': "Choc'éclair",
				'de-de': "Schock-Blitz"
			},
			effect: {
				'en-us': "Discard all Lightning Energy cards attached to Raichu or this attack does nothing.",
				'fr-fr': "Défaussez-vous de toutes les cartes Énergie  attachées à Raichu ou cette attaque ne fait rien.",
				'de-de': "Lege alle an Raichu angelegten -Energiekarten auf deinen Ablagestapel, oder dieser Angriff hat keine Auswirkung."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88501,
				cardmarket: 274900
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88501,
				cardmarket: 274900
			},
		},
	],
}

export default card
