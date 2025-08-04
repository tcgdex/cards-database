import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [763],

	name: {
		en: "Tsareena",
		fr: "Sucreine",
		es: "Tsareena",
		it: "Tsareena",
		pt: "Tsareena",
		de: "Fruyal"
	},

	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Steenee",
		fr: "Candine",
		es: "Steenee",
		it: "Steenee",
		pt: "Steenee",
		de: "Frubaila"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Whip",
				fr: "Mégafouet",
				es: "Latigazo",
				it: "Vigorcolpo",
				pt: "Chicote Poderoso",
				de: "Blattgeißel"
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Pokémon for each Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival por cada Energía unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia ligada a este Pokémon  (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 1 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Time Out Kick",
				fr: "Mise au Coin Brusque",
				es: "Patada Pausa",
				it: "Calcio Castigo",
				pt: "Chute e Castigo",
				de: "Auszeittritt"
			},
			effect: {
				en: "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
				fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
				es: "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
				it: "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
				pt: "Você pode colocar 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
				de: "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "This feared Pokémon has long, slender legs and a cruel heart. It shows no mercy as it stomps on its opponents."
	},

	thirdParty: {
		cardmarket: 482954,
		tcgplayer: 219229
	}
}

export default card
