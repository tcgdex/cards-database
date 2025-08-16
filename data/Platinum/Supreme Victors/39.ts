import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
		de: "Rasaff"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Top Drop",
				fr: "Tomber de haut",
				de: "Gipfelsturz"
			},
			effect: {
				en: "Discard the top card from your opponent's deck. If you discarded a Pokémon, this attack does damage equal to the HP of that Pokémon.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Si vous défaussez un Pokémon, cette attaque inflige autant de dégâts que ce Pokémon possède de PV.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel. Wenn du auf diese Weise eine Pokémon-Karte auf den Ablagestapel gelegt hast, fügt dieser Angriff dem Verteidigenden Pokémon Schadenspunkte in Höhe der KP dieser Pokémon-Karte zu."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Brick Break",
				fr: "Casse-brique",
				de: "Durchbruch"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278730
	}
}

export default card
