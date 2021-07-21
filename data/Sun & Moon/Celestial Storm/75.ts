import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
		es: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		de: "Pupitar"
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		247,
	],
	hp: 80,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Skull Bash",
				fr: "Coud’Krâne",
				es: "Cabezazo",
				it: "Capocciata",
				pt: "Quebra-crânio",
				de: "Schädelwumme"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Dust Devil",
				fr: "Tempête de Sable",
				es: "Tormenta de Arena",
				it: "Polvere Infernale",
				pt: "Tempestade de Areia",
				de: "Sandteufel"
			},
			effect: {
				en: "This attack does 20 damage to each non-Fighting Pokémon (both yours and your opponent’s). (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chaque Pokémon qui n’est pas un Pokémon Fighting (les vôtres et ceux de votre adversaire). (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a cada Pokémon no Fighting (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a ciascun Pokémon non di tipo Fighting, sia tuo che del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano a cada Pokémon que não for um Pokémon Fighting (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				de: "Diese Attacke fügt jedem Pokémon (deinen und denen deines Gegners), das kein Fighting-Pokémon ist, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
