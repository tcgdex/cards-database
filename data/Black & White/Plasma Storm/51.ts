import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
		es: "Galvantula",
		it: "Galvantula",
		pt: "Galvantula",
		de: "Voltula"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		596,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
		de: "Wattzapf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Discharge",
				fr: "Coup d'Jus",
				de: "Ladungsstoß"
			},
			effect: {
				en: "Discard all Lightning Energy attached to this Pokémon. This attack does 30 damage times the number of Energy cards you discarded.",
				fr: "Défaussez toutes les Énergies Lightning attachées à ce Pokémon. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
				de: "Lege alle an dieses Pokémon angelegten {L}-Energien auf deinen Ablagestapel. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Signal Beam",
				fr: "Rayon Signal",
				de: "Ampelleuchte"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "It creates barriers from electrified silk that stun foes. This works as a weapon as well as a defense.",
		de: "Errichtet mit elektrisch geladenen Fäden Barrieren, die lähmend wirken und ihm zur Verteidigung und zum Angriff dienen."
	},

	thirdParty: {
		cardmarket: 280791,
		tcgplayer: 85613
	}
}

export default card
