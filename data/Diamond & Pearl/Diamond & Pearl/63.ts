import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Silcoon",
		fr: "Armulys",
		de: "Schaloko"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		266,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Harden",
				fr: "Armure",
				de: "Härtner"
			},
			effect: {
				en: "During your opponent's next turn, if Silcoon would be damaged by an attack, prevent that attack's damage done to Silcoon if that damage is 30 or less.",
				fr: "Lors du prochain tour de votre adversaire, si une attaque inflige des dégâts à Armulys, prévenez ces dégâts s'ils sont de 30 ou moins.",
				de: "Wenn Schaloko während des nächsten Zuges deines Gegners durch einen Angriff 30 oder weniger Schadenspunkte zugefügt würden, verhindere diesen Schaden."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Entangling String",
				fr: "Fil emmêlant",
				de: "Einschnürender Faden"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei \"Kopf\" kann das Verteidigende Pokémon im nächsten Zug deines Gegners nicht angreifen."
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

	retreat: 3,

	description: {
		fr: "Il s'accroche en enroulant sa soie autour des branches. Il reste immobile en attendant d'évoluer."
	},

	thirdParty: {
		cardmarket: 277562,
		tcgplayer: 89212
	}
}

export default card
