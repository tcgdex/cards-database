import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Négapi",
		es: "Minun",
		it: "Minun",
		pt: "Minun",
		de: "Minun"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [311],

	dexId: [
		312,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Negative Ion",
				fr: "Anion",
				de: "Negatives Ion"
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 30 (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 30 (avant application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 30 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electrishower",
				fr: "Averse Électrique",
				de: "Elektrodusche"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It cheers on friends. If its friends are losing, its body lets off more and more sparks.",
		de: "Es feuert Freunde an. Sind diese im Begriff zu verlieren, gibt sein Körper immer mehr Funken ab."
	},

	thirdParty: {
		cardmarket: 280368,
		tcgplayer: 87493
	}
}

export default card
