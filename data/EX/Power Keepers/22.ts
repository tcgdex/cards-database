import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Tenefix",
		de: "Zobiris"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Synergy Effect",
				fr: "Effet synergie",
				de: "Synergieeffekt"
			},
			effect: {
				en: "If Phoebe's Stadium is in play, prevent all damage done to Sableye by attacks from your opponent's Pokémon-ex.",
				fr: "Si Stade de Spectra est en jeu, prévenez tous les dégâts infligés à Tenefix par des attaques de Pokémon-ex de votre adversaire.",
				de: "Wenn Antonias Stadion im Spiel ist, verhindere Schadenspunkte, die Zobiris durch Angriffe der Pokémon-ex deines Gegner zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Down Draw",
				fr: "Pioche du dessous",
				de: "Tiefer Zug"
			},
			effect: {
				en: "Draw 2 cards from the bottom of your deck.",
				fr: "Piochez 2 cartes du dessous de votre deck.",
				de: "Ziehe die untersten 2 Karten deines Decks."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte",
				de: "Finte"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewähltem Pokémon 20 Schadenspunkte zu. Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem gewähltem Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277328,
		tcgplayer: 88851
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

