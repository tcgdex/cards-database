import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Ampharos ex",
		'fr-fr': "Pharamp ex",
		'de-de': "Ampharos ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [181],

	hp: 150,

	stage: "Basic",
	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Conductivity",
				'fr-fr': "Conductivité",
				'de-de': "Conductivity"
			},
			effect: {
				'en-us': "As long as Ampharos ex is in play, whenever your opponent attaches an Energy card to his or her Pokémon from hand, put 1 damage counter on that Pokémon. You can't put more than 1 damage counter even if there is more than 1 Ampharos ex in play.",
				'fr-fr': "Tant que Pharamp ex est en jeu, dès que votre adversaire attache une carte Énergie de sa main à un Pokémon, placez un marqueur de dégât sur ce Pokémon. Vous ne pouvez pas placer plus d'un marqueur de dégât même s'il y a plus d'un Pharamp ex en jeu.",
				'de-de': "As long as Ampharos ex is in play, whenever your opponent attaches an Energy card to his or her Pokémon from hand, put 1 damage counter on that Pokémon. You can't put more than 1 damage counter even if there is more than 1 Ampharos ex in play."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gigavolt",
				'fr-fr': "Gigavolt",
				'de-de': "Gigavolt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 70 dégâts. Si c'est pile, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, this attack does 40 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83550,
				cardmarket: 275966
			},
		},
	],

}

export default card
