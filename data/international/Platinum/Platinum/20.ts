import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Bastiodon",
		'fr-fr': "Bastiodon",
		'de-de': "Bollterus"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [411],

	hp: 130,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Shieldon",
		'fr-fr': "Dinoclier"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Metal Trait",
				'fr-fr': "Trait métallique",
				'de-de': "Metal Trait"
			},
			effect: {
				'en-us': "As long as Bastiodon has a Pokémon Tool attached to it, remove 1 damage counter from Bastiodon between turns.",
				'fr-fr': "Tant que Bastiodon possède un Outil Pokémon, retirez-lui 1 marqueur de dégât entre 2 tours.",
				'de-de': "As long as Bastiodon has a Pokémon Tool attached to it, remove 1 damage counter from Bastiodon between turns."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Iron Defense",
				'fr-fr': "Mur de fer",
				'de-de': "Iron Defense"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Bastiodon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Bastiodon lors du prochain tour de votre adversaire.",
				'de-de': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Bastiodon during your opponent's next turn."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Tackle",
				'fr-fr': "Charge de fer",
				'de-de': "Iron Tackle"
			},
			effect: {
				'en-us': "Bastiodon does 30 damage to itself.",
				'fr-fr': "Bastiodon s'inflige 30 dégâts.",
				'de-de': "Bastiodon does 30 damage to itself."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 83736,
				cardmarket: 278441
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278441,
				tcgplayer: 83736
			}
		}
	],

}

export default card
