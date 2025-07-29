import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Swablu",
		fr: "Tylton",
		de: "Wablu"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		333,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Super Speed",
				fr: "Super vitesse",
				de: "Super-Geschwindigkeit"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Swablu during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Tylton lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei \"Kopf\" verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Wablu zugefügt würden."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shoot Through",
				fr: "Passer à travers",
				de: "Durchschießen"
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc).",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277988
	}
}

export default card
