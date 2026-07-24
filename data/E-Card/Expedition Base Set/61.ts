import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Smoochum",
		fr: "Raichu",
		de: "Raichu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [238],

	hp: 30,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	stage: "Baby",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Kiss",
				fr: "Plasma",
				de: "Plasma"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy cards attached to the Defending Pokémon. This attack does 10 damage times the number of heads.",
				fr: "Si vous avez des cartes Énergie  dans votre pile de défausse, lancez une pièce. Si c'est face, attachez l'une d'elles à Raichu.",
				de: "Wenn mindestens eine -Energiekarte in deinem Ablagestapel ist, wirf eine Münze. Lege bei 'Kopf' 1 davon an Raichu an."
			},
			damage: "10×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Shock Bolt",
				fr: "Choc'éclair",
				de: "Schock-Blitz"
			},
			effect: {
				en: "Discard all L Energy cards attached to Raichu or this attack does nothing.",
				fr: "Défaussez-vous de toutes les cartes Énergie  attachées à Raichu ou cette attaque ne fait rien.",
				de: "Lege alle an Raichu angelegten -Energiekarten auf deinen Ablagestapel, oder dieser Angriff hat keine Auswirkung."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88505,
				cardmarket: 274900
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
