import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
		de: "Digdri"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dig Trap",
				fr: "Creuse-piège",
				de: "Grube ausheben"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Dugtrio during your opponent's next turn. If Dugtrio is your Active Pokémon at the end of your opponent's next turn, put 6 damage counters on 1 of your opponent's Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Triopikeur lors du prochain tour de votre adversaire. Si Triopikeur est votre Pokémon Actif à la fin du prochain tour de votre adversaire, placez 6 marqueurs de dégât sur 1 des Pokémon de Banc de votre adversaire.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Bei \"Kopf\" verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Digdri zugefügt würden. Wenn Digdri am Ende des nächsten Zuges deines Gegners dein Aktives Pokémon ist, lege 6 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Pit Trap",
				fr: "Trou piégé",
				de: "Fallgrube"
			},
			effect: {
				en: "Your opponent flips a coin. If tails, this attack does 50 damage plus 50 more damage.",
				fr: "Votre adversaire lance une pièce. Si c'est pile, cette attaque inflige 50 dégâts plus 50 dégâts supplémentaires.",
				de: "Dein Gegner wirft 1 Münze. Bei \"Zahl\" fügt dieser Angriff 50 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 277777,
		tcgplayer: 85002
	}
}

export default card
