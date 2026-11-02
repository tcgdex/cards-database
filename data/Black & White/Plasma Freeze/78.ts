import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
		de: "Duodino"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tractorbeam",
				fr: "Rayon Inversion",
				de: "Traktorstrahl"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. This attack does 40 damage to the new Defending Pokémon.",
				fr: "Échangez 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur. Cette attaque inflige 40 dégâts au nouveau Pokémon Défenseur.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen das Verteidigende Pokémon aus. Dieser Angriff fügt dem neuen Verteidigenden Pokémon 40 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Obsidian Fang",
				fr: "Croc d'Obsidienne",
				de: "Schwarze Fänge"
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards attached to the Defending Pokémon.",
				fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon attachées au Pokémon Défenseur.",
				de: "Lege, bevor du Schaden zufügst, alle an das Verteidigende Pokémon angelegten Pokémon-Ausrüstungen auf den Ablagestapel deines Gegners."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		en: "It responds to movement by attacking. This scary, three-headed Pokémon devours everything in its path!",
		de: "Ein kaltblütiges Pokémon, das auf alles reagiert, was sich bewegt, indem es mit seinen drei Köpfen danach schnappt."
	},

	thirdParty: {
		cardmarket: 280956,
		tcgplayer: 86244
	}
}

export default card
