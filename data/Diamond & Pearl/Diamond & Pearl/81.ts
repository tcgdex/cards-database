import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Elektek",
		de: "Elektek"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderpunch",
				fr: "Poing-Éclair",
				de: "Donnerschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Electabuzz does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires. Si c'est pile, Elektek s'inflige 10 dégâts.",
				de: "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei 'Zahl' fügt sich Elektek selbst 10 Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Shock Wave",
				fr: "Onde de choc",
				de: "Schockwelle"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If Electabuzz is evolved from Elekid, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si Elektek évolue d'Elekid, cette attaque inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt. Wenn Elektek sich aus Elekid entwickelt hat, fügt dieser Angriff 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		fr: "Ce Pokémon dévore l'électricité des centrales. Il est responsable de la majorité des coupures de courant."
	},

	thirdParty: {
		cardmarket: 277580,
		tcgplayer: 85114
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
