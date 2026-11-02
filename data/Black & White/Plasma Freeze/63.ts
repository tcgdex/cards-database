import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Hariyama",
		fr: "Hariyama",
		es: "Hariyama",
		it: "Hariyama",
		pt: "Hariyama",
		de: "Hariyama"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		297,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
		de: "Makuhita"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Fake Out",
				fr: "Bluff",
				de: "Mogelhieb"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Pivot Throw",
				fr: "Lancer Tournant",
				de: "Schleuderwurf"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to this Pokémon by attacks is increased by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont augmentés de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It loves to match power with big-bodied Pokémon. It can knock a truck flying with its arm thrusts.",
		de: "Es liebt das Kräftemessen mit großen Pokémon. Mit seinem Armwurf kann es LKW durch die Luft werfen."
	},

	thirdParty: {
		cardmarket: 280941,
		tcgplayer: 86017
	}
}

export default card
