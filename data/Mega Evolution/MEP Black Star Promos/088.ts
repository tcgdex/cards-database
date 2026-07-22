import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
		fr: "Zarude",
		es: "Zarude",
		it: "Zarude",
		pt: "Zarude",
		de: "Zarude"
	},

	illustrator: "IKEDA Saki",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [893],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Overhead Throw",
			fr: "Soulève Corne",
			es: "Lanzamiento Elevado",
			it: "Lancindietro",
			pt: "Arremessar por Cima",
			de: "Überwerfer"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 30 danni a uno dei tuoi Pokémon in panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 30

	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Shadowy Whip",
			fr: "Fouet Sombre",
			es: "Látigo Sombrío",
			it: "Frustata Ombrosa",
			pt: "Chicote Sombrio",
			de: "Schattige Peitsche"
		},

		effect: {
			en: "If your Benched Pokémon have any Shadowy {D} Energy attached, this attack does 70 more damage.",
			fr: "Si au moins une Énergie {D} Sombre est attachée à vos Pokémon de Banc, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si tus Pokémon en Banca tienen alguna Energía {D} Sombría unida, este ataque hace 70 puntos de daño más.",
			it: "Se i Pokémon nella tua panchina hanno almeno un'Energia {D} Ombrosa assegnata, questo attacco infligge 70 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem alguma Energia {D} Sombria ligadas a eles, este ataque causará 70 pontos de dano a mais.",
			de: "Wenn an den Pokémon auf deiner Bank mindestens 1 Schattige {D}-Energie angelegt ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "100+"

	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895779,
				tcgplayer: 706193
			}
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 895780,
				tcgplayer: 706199
			}
		},
	],
}

export default card
