import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali Niv. 43",
		de: "Blitza"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Undevelop",
				fr: "Dé-développer",
				de: "Unentwickelt"
			},
			effect: {
				en: "Once during your turn (before your attack), you may devolve Jolteon and put Jolteon into your hand. This power can't be used if Jolteon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez dés-évoluer Voltali et le placer dans votre main. Ce pouvoir ne peut pas être utilisé si Voltali est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Blitza rückentwickeln und Blitza auf deine Hand nehmen. Diese Poké-Power kann nicht benutzt werden, wenn Blitza von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Evolving Thunder",
				fr: "Tonnerre évoluant",
				de: "Donner-Entwicklung"
			},
			effect: {
				en: "If Jolteon evolved from Eevee during this turn, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si Voltali a évolué d'Evoli lors de ce tour, cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wenn Blitza sich in diesem Zug aus Evoli entwickelt hat, fügt dieser Angriff jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 278600,
		tcgplayer: 86344
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
