import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
		es: "Galvantula",
		it: "Galvantula",
		pt: "Galvantula",
		de: "Voltula"
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
		en: "Joltik",
		fr: "Statitik",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Live Wire",
				fr: "Fil Sous Tension",
				es: "Cable Conectado",
				it: "Filo Elettrificato",
				pt: "Fio Sob Tensão",
				de: "Unter Strom stehen"
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent’s Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
				es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. Aplica también Debilidad y Resistencia para los Pokémon en Banca.",
				it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Dovrai applicare debolezza e resistenza anche ai Pokémon in panchina.",
				pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. Também aplique Fraqueza e Resistência aos Pokémon no Banco.",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. Wende Schwäche und Resistenz auch bei Pokémon auf der Bank an."
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



}

export default card
