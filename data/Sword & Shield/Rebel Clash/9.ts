import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
		es: "Ludicolo",
		it: "Ludicolo",
		pt: "Ludicolo",
		de: "Kappalores"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
		es: "Lombre",
		it: "Lombre",
		pt: "Lombre",
		de: "Lombrero"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spirited Rushdown",
				fr: "Ruée Impétueuse",
				es: "Asalto Vigoroso",
				it: "Impeto Vigoroso",
				pt: "Ofensiva Espirituosa",
				de: "Beherzter Sturmrausch"
			},
			effect: {
				en: "This attack does 60 damage for each Prize card you have taken.",
				fr: "Cette attaque inflige 60 dégâts pour chaque carte Récompense que vous avez récupérée.",
				es: "Este ataque hace 60 puntos de daño por cada carta de Premio que hayas cogido.",
				it: "Questo attacco infligge 60 danni per ogni carta Premio che hai preso.",
				pt: "Este ataque causa 60 pontos de dano para cada carta de Prêmio que você pegou.",
				de: "Diese Attacke fügt für jede von dir genommene Preiskarte 60 Schadenspunkte zu."
			},
			damage: "60×",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Drain",
				fr: "Méga-Sangsue",
				es: "Megaagotar",
				it: "Megassorbimento",
				pt: "Megadreno",
				de: "Megasauger"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 160,
	types: ["Grass"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "The rhythm of bright, festive music activates Ludicolo’s cells, making it more powerful."
	}
}

export default card
