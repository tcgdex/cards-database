import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
		de: "Wailord"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		321,
	],

	hp: 180,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Underwater Dive",
				fr: "Plongée sous-marine",
				de: "Unterwasserausflug"
			},
			effect: {
				en: "Flip 2 coins. For each heads, remove 3 damage counters from Wailord.",
				fr: "Lancez 2 pièces. Pour chaque côté face, retirez 3 marqueurs de dégât à Wailord.",
				de: "Wirf 2 Münzen. Entferne pro \"Kopf\" 3 Schadensmarken von Wailord."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Swallow Up",
				fr: "Engloutir",
				de: "Runterschlucken"
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon and Wailord. If the Defending Pokémon has fewer remaining HP than Wailord, this attack does 50 damage plus 50 more damage.",
				fr: "Avant d’infliger des dégâts, comptez les PV restant au Pokémon Défenseur et à Wailord. S’il reste moins de PV au Pokémon Défenseur qu’à Wailord, cette attaque inflige 50 dégâts plus 50 dégâts supplémentaires.",
				de: "Bevor der Schaden zugefügt wird, vergleiche die verbliebenen KP des Verteidigenden Pokémon und Wailord. Wenn das Verteidigende Pokémon weniger verbliebene KP hat als Wailord, fügt dieser Angriff 50 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		en: "It is the largest of all identified Pokémon. They jump as a pack to herd their prey."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279561,
		tcgplayer: 90461
	}
}

export default card
