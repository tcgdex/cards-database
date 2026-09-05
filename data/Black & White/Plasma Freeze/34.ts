import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali",
		es: "Jolteon",
		it: "Jolteon",
		pt: "Jolteon",
		de: "Blitza"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pin Missile",
				fr: "Dard-Nuée",
				de: "Nadelrakete"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electri-Defuse",
				fr: "Neutralivolt",
				de: "Elektro-Entschärfung"
			},
			effect: {
				en: "If the Defending Pokémon is a Pokémon-EX, that Pokémon can't attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon-EX, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				de: "Wenn das Verteidigende Pokémon ein Pokémon-EX ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 40,

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
		en: "By storing electricity in its body, it can shoot its bristlelike fur like a barrage of missiles.",
		de: "Lädt sich sein Körper mit Elektrizität, richten sich alle seine Haare auf und dienen ihm als Geschosse."
	},

	thirdParty: {
		cardmarket: 280912,
		tcgplayer: 86350
	}
}

export default card
