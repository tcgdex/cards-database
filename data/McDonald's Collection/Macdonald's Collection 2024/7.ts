import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
		es: "Quagsire",
		it: "Quagsire",
		pt: "Quagsire",
		de: "Morlord"
	},

	illustrator: "otumami",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [195],

	hp: 120,

	types: ["Fighting"],

	stage: "Stage1",

	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
		es: "Wooper",
		it: "Wooper",
		pt: "Wooper",
		de: "Felino"
	},

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Mud-Slap",
				fr: "Coud'Boue",
				es: "Bofetón Lodo",
				it: "Fangoschiaffo",
				pt: "Tapa de Lama",
				de: "Lehmschelle"
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				en: "Earthquake",
				fr: "Séisme",
				es: "Terremoto",
				it: "Terremoto",
				pt: "Terremoto",
				de: "Erdbeben"
			},
			damage: 100,
			effect: {
				en: "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge anche 20 danni a ciascuno dei tuoi Pokémon in panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

