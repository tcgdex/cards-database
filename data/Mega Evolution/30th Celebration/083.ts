import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "By reading the auras of all things, it can tell how others are feeling from over half a mile away."
	},

	name: {
		en: "Lucario",
		fr: "Lucario",
		de: "Lucario",
		es: "Lucario",
		it: "Lucario",
		'es-mx': "Lucario",
		pt: "Lucario"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [448],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Aura Sphere",
			fr: "Aurasphère",
			de: "Aurasphäre",
			es: "Esfera Aural",
			it: "Sferapulsar",
			'es-mx': "Aura Esfera",
			pt: "Aura Esférica"
		},

		effect: {
			en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige aussi 60 dégâts à l'un des Pokémon de Banc de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 60 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque también hace 60 puntos de daño a uno de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
			it: "Questo attacco infligge anche 60 danni a uno dei Pokémon nella panchina del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			'es-mx': "Este ataque también hace 60 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>",
			pt: "Este ataque também causa 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907690,
				tcgplayer: 716479
			}
		}
	],
}

export default card
