import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Ariados",
		fr: "Migalos",
		de: "Ariados"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		168,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sticky",
				fr: "Collant",
				de: "Klebrig"
			},
			effect: {
				en: "The Retreat Cost for each player's Pokémon (excluding Ariados) is Colorless more.",
				fr: "Le Coût de retraite des Pokémon de chaque joueur (Migalos exclu) est de Colorless de plus.",
				de: "Die Rückzugskosten aller Pokémon (außer Ariados) sind um  erhöht."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Offensive Needle",
				fr: "Aiguille offensive",
				de: "Nadelangriff"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	description: {
		fr: "Il attache un fil à sa proie avant de la libérer. Il s'en servira pour la retrouver, elle et ses amis."
	},

	thirdParty: {
		cardmarket: 277649,
		tcgplayer: 83617
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
