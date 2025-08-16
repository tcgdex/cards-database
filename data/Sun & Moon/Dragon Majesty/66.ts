import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Kingdra GX",
		fr: "Hyporoi GX",
		es: "Kingdra GX",
		it: "Kingdra GX",
		pt: "Kingdra GX",
		de: "Seedraking GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 230,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocéan",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				es: "Hidrobomba",
				it: "Idropompa",
				pt: "Jato d’Água",
				de: "Hydropumpe"
			},
			effect: {
				en: "This attack does 50 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				es: "Este ataque hace 50 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 50 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 50 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Reverse Thrust",
				fr: "Poussée Inverse",
				es: "Invertir Impulso",
				it: "Tornaindietro",
				pt: "Impulso Reverso",
				de: "Umkehrschub"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Maelstrom GX",
				fr: "Maelström-GX",
				es: "Vorágine-GX",
				it: "Maelstrom-GX",
				pt: "Turbilhão-GX",
				de: "Mahlstrom-GX"
			},
			effect: {
				en: "This attack does 40 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 40 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 40 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 40 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 40 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Diese Attacke fügt jedem Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 363490,
		tcgplayer: 175496
	}
}

export default card
