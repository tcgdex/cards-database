import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon",
		de: "Papinella"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [267],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
		de: "Schaloko"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Withering Dust",
				fr: "Poussière desséchante",
				de: "Staub des Verdorrens"
			},
			effect: {
				en: "As long as Beautifly is in play, do not apply Resistance for all Active Pokémon.",
				fr: "Tant que Charmillon est en jeu, vous ne pouvez pas appliquer la Résistance aux Pokémon Actifs.",
				de: "Solange sich Papinella im Spiel befindet, werden die Resistenzen von allen Aktiven Pokémon nicht angewendet."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Spore",
				fr: "Poussière paralysante",
				de: "Stachelspore"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Parallel Gain",
				fr: "Gain parallèle",
				de: "Allgemeine Erholung"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon, including Beautifly.",
				fr: "Retirez un marqueur de dégât à tous vos Pokémon, Charmillon inclus.",
				de: "Entferne 1 Schadensmarke von allen deinen Pokémon inklusive Papinella."
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

	retreat: 0,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275650,
				tcgplayer: 83755
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275650,
				tcgplayer: 83755
			}
		},
	],

}

export default card
