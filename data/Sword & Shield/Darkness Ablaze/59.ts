import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [310],
	name: {
		en: "Manectric",
		fr: "Élecsprint",
		es: "Manectric",
		it: "Manectric",
		pt: "Manectric",
		de: "Voltenso"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
		es: "Electrike",
		it: "Electrike",
		pt: "Electrike",
		de: "Frizelbliz"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Strafe",
				fr: "Bombarder",
				es: "Pasada de Ataque",
				it: "Mitragliare",
				pt: "Bombardear",
				de: "Beharken"
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
				es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
				pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Flash Impact",
				fr: "Impact-Flash",
				es: "Impacto Resplandor",
				it: "Impattoflash",
				pt: "Impacto Lampejante",
				de: "Blitzeinschlag"
			},
			effect: {
				en: "This attack also does 30 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 30 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 30 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge anche 30 danni a uno dei tuoi Pokémon in panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 30 pontos de dano a 1 dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It stimulates its own muscles with electricity, so it can move quickly. It eases its soreness with electricity, too, so it can recover quickly as well."
	}
}

export default card
