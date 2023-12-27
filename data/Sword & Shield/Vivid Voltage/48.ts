import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Électhor",
		es: "Zapdos",
		it: "Zapdos",
		pt: "Zapdos",
		de: "Zapdos"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drill Peck",
				fr: "Bec Vrille",
				es: "Pico Taladro",
				it: "Perforbecco",
				pt: "Bico Broca",
				de: "Bohrschnabel"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Snipe",
				fr: "Tir Éclair",
				es: "Tiro Atronador",
				it: "Tuonomira",
				pt: "Disparo Trovão",
				de: "Donnerschütze"
			},
			effect: {
				en: "Discard all Energy from this Pokémon, and this attack does 160 damage to 1 of your opponent's Pokémon V or Pokémon-GX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toute l'Énergie de ce Pokémon. Cette attaque inflige 160 dégâts à l'un des Pokémon-V ou Pokémon-GX de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Descarta todas las Energías de este Pokémon, y este ataque hace 160 puntos de daño a 1 de los Pokémon V o Pokémon-GX de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Scarta tutte le Energie da questo Pokémon. Questo attacco infligge 160 danni a un Pokémon-V o a un Pokémon-GX del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Descarte todas as Energias deste Pokémon e este ataque causará 160 pontos de dano a 1 dos Pokémon V ou Pokémon-GX do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel und diese Attacke fügt 1 Pokémon-V oder Pokémon-GX deines Gegners 160 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

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

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "A legendary Pokémon that is said to live in thunderclouds. It freely controls lightning bolts."
	}
}

export default card
