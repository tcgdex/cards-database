import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		de: "Lucario",
		it: "Lucario",
		pt: "Lucario",
	},

	illustrator: "Taiga Kasai",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",
	dexId: [448],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		de: "Riolu",
		it: "Riolu",
		pt: "Riolu",
	},

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Aura Sphere",
			fr: "Aurasphère",
			es: "Esfera Aural",
			de: "Aurasphäre",
			it: "Sferapulsar",
			pt: "Aura Esférica",
		},

		effect: {
			en: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 60 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 60 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 60 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 60 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Psychic",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895610,
				tcgplayer: 713263
			}
		}
	],
}

export default card
