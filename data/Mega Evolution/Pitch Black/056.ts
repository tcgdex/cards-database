import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
		fr: "Zarude",
		es: "Zarude",
		'es-mx': "Zarude",
		de: "Zarude",
		it: "Zarude",
		pt: "Zarude"
	},

	illustrator: "matazo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [893],
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Overhead Throw",
			fr: "Soulève Corne",
			es: "Lanzamiento Elevado",
			'es-mx': "Lanzamiento Elevado",
			de: "Überwerfer",
			it: "Lancindietro",
			pt: "Arremessar por Cima"
		},

		cost: ["Darkness"],

		damage: 30,

		effect: {
			en: "This attack also does 30 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 30 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 30 puntos de daño a uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 30 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 30 pontos de dano a 1 dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}, {
		name: {
			en: "Shadowy Whip",
			fr: "Fouet Sombre",
			es: "Látigo Sombrío",
			'es-mx': "Látigo Sombrío",
			de: "Schattige Peitsche",
			it: "Frustata Ombrosa",
			pt: "Chicote Sombrio"
		},

		cost: ["Darkness", "Darkness", "Darkness"],

		damage: "100+",

		effect: {
			en: "If your Benched Pokémon have any Shadowy {D} Energy attached, this attack does 70 more damage.",
			fr: "Si au moins une Énergie {D} Sombre est attachée à vos Pokémon de Banc, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si tus Pokémon en Banca tienen alguna Energía {D} Sombría unida, este ataque hace 70 puntos de daño más.",
			'es-mx': "Si tus Pokémon en Banca tienen alguna Energía {D} Sombría unida, este ataque hace 70 puntos de daño más.",
			de: "Wenn an den Pokémon auf deiner Bank mindestens 1 Schattige {D}-Energie angelegt ist, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			it: "Se i Pokémon nella tua panchina hanno almeno un'Energia {D} Ombrosa assegnata, questo attacco infligge 70 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem alguma Energia {D} Sombria ligadas a eles, este ataque causará 70 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895841,
				tcgplayer: 704813
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895841,
				tcgplayer: 704813
			}
		},
	],
}

export default card
