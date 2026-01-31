import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Regice ex",
		fr: "Regice ex",
		de: "Regice ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		378,
	],

	hp: 90,

	types: [
		"Water",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Body",
				fr: "Corps de cristal",
				de: "Crystal Body"
			},
			effect: {
				en: "Prevent all effects of attacks, except damage, done to Regice ex by the Attacking Pokémon.",
				fr: "Prévenez tous les effets d'attaques, dégâts exclus, infligés à Regice ex par le Pokémon Attaquant.",
				de: "Prevent all effects of attacks, except damage, done to regice ex by the Attacking Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Freeze Lock",
				fr: "Verrou-gel",
				de: "Freeze Lock"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to the Defending Pokémon during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas attacher de cartes Énergie de sa main au Pokémon Défenseur lors de son prochain tour.",
				de: "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to the Defending Pokémon during this or her next turn."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276171,
		tcgplayer: 88659
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
