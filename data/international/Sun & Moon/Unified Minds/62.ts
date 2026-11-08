import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Galvantula",
		'fr-fr': "Mygavolt",
		'es-es': "Galvantula",
		'it-it': "Galvantula",
		'pt-br': "Galvantula",
		'de-de': "Voltula"
	},

	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		596,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Joltik",
		'fr-fr': "Statitik",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Live Wire",
				'fr-fr': "Fil Sous Tension",
				'es-es': "Cable Conectado",
				'it-it': "Filo Elettrificato",
				'pt-br': "Fio Sob Tensão",
				'de-de': "Unter Strom stehen"
			},
			effect: {
				'en-us': "This attack does 50 damage to 1 of your opponent’s Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
				'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. Aplica también Debilidad y Resistencia para los Pokémon en Banca.",
				'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Dovrai applicare debolezza e resistenza anche ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. Também aplique Fraqueza e Resistência aos Pokémon no Banco.",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. Wende Schwäche und Resistenz auch bei Pokémon auf der Bank an."
			},

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They employ an electrically charged web to trap their prey. While it is immobilized by shock, they leisurely consume it.",
	},

	thirdParty: {
		cardmarket: 388132,
		tcgplayer: 194988
	}
}

export default card
