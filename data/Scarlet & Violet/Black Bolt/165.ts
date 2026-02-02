import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [646],
	set: Set,

	name: {
		en: "Kyurem ex",
		fr: "Kyurem-ex",
		de: "Kyurem-ex",
		it: "Kyurem-ex",
		pt: "Kyurem ex",
		es: "Kyurem ex",
		'es-mx': "Kyurem ex"
	},

	illustrator: "chibi",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			it: "Lacerazione",
			pt: "Talho",
			es: "Cuchillada",
			'es-mx': "Cuchillada"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Blizzard Burst",
			fr: "Explosion Blizzard",
			de: "Blizzard-Ausbruch",
			it: "Scoppiobora",
			pt: "Explosão Nevada",
			es: "Explosión Ventisca",
			'es-mx': "Estallido Glacial"
		},

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon for each Prize card your opponent has taken. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte für jede von deinem Gegner genommene Preiskarte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario per ogni carta Premio che ha preso. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente para cada carta de Prêmio que seu oponente pegou. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival por cada carta de Premio que haya cogido tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival por cada carta de Premio que haya tomado tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836239
	}
}

export default card