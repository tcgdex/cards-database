import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Dwebble",
		fr: "Crabicoque",
		es: "Dwebble",
		it: "Dwebble",
		pt: "Dwebble",
		de: "Lithomith"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		557,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Withdraw",
				fr: "Repli",
				de: "Panzerschutz"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei „Kopf“ verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Angriffe zugefügt würde."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "The Pokémon can easily melt holes in hard rocks with a liquid secreted from its mouth.",
		de: "Das ätzende Sekret aus seinem Mund erlaubt es ihm, ohne Weiteres Steine auszuhöhlen."
	},

	thirdParty: {
		cardmarket: 280129,
		tcgplayer: 85061
	}
}

export default card
