import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [763],

	name: {
		'en-us': "Tsareena",
		'fr-fr': "Sucreine",
		'es-es': "Tsareena",
		'it-it': "Tsareena",
		'pt-br': "Tsareena",
		'de-de': "Fruyal"
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
		'en-us': "Steenee",
		'fr-fr': "Candine",
		'es-es': "Steenee",
		'it-it': "Steenee",
		'pt-br': "Steenee",
		'de-de': "Frubaila"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Power Whip",
				'fr-fr': "Mégafouet",
				'es-es': "Latigazo",
				'it-it': "Vigorcolpo",
				'pt-br': "Chicote Poderoso",
				'de-de': "Blattgeißel"
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon for each Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque Énergie attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival por cada Energía unida a este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente para cada Energia ligada a este Pokémon  (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 1 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Time Out Kick",
				'fr-fr': "Mise au Coin Brusque",
				'es-es': "Patada Pausa",
				'it-it': "Calcio Castigo",
				'pt-br': "Chute e Castigo",
				'de-de': "Auszeittritt"
			},
			effect: {
				'en-us': "You may put an Energy attached to your opponent's Active Pokémon into their hand.",
				'fr-fr': "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
				'es-es': "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
				'it-it': "Puoi prendere un'Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
				'pt-br': "Você pode colocar 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
				'de-de': "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben."
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


	stage: "Stage2",

	description: {
		'en-us': "This feared Pokémon has long, slender legs and a cruel heart. It shows no mercy as it stomps on its opponents."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482954,
				tcgplayer: 219229
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482954,
				tcgplayer: 219229
			}
		},
	],
}

export default card
