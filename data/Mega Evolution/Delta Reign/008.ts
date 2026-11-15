import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Shaymin",
		fr: "Shaymin",
		de: "Shaymin",
		es: "Shaymin",
		it: "Shaymin",
		pt: "Shaymin",
		'es-mx': "Shaymin"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Overrun",
			fr: "Dépassement",
			de: "Überrennen",
			es: "Rebasar",
			it: "Oltrepassare",
			pt: "Atropelar",
			'es-mx': "Rebasar"
		},

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			pt: "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente. <em>(Não aplique Fraqueza e Resistência aos Pokémon no Banco.)</em>",
			'es-mx': "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 727569,
				cardmarket: 918817
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 727569,
				cardmarket: 918817
			}
		}
	],
}

export default card