import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Goodra",
		fr: "Muplodocus",
		es: "Goodra",
		it: "Goodra",
		pt: "Goodra",
		de: "Viscogon"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		706,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
	},
	stage: "Stage2",


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
				en: "This attack does 20 damage times the amount of Energy attached to this Pokémon to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à ce Pokémon à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño por cada Energía unida a este Pokémon a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia assegnata a questo Pokémon. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada a este Pokémon a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Energien zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fairy",
				"Water",
				"Colorless",
			],
			name: {
				en: "Beat Slider",
				fr: "Frappe Glissante",
				es: "Toque Deslizante",
				it: "Botta Scivolosa",
				pt: "Batida Deslizante",
				de: "Schieberegler"
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
