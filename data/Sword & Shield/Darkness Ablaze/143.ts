import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Salamence V",
		fr: "Drattak V",
		es: "Salamence V",
		it: "Salamence V",
		pt: "Salamence V",
		de: "Brutalanda V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [373],
	set: Set,
	hp: 220,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swoop Across",
				fr: "Déferlement Aérien",
				es: "Vuelo Transversal",
				it: "Volo Radente",
				pt: "Investida Cruzada",
				de: "Überflieger"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt jedem Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Storm",
				fr: "Grosse Tempête",
				es: "Fuerte Tormenta",
				it: "Grantempesta",
				pt: "Tempestade",
				de: "Schwerer Sturm"
			},

			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 483594,
		tcgplayer: 219343
	}
}

export default card
