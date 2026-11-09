import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Cacturne",
		fr: "Cacturne",
		de: "Noktuska",
		es: "Cacturne",
		it: "Cacturne",
		pt: "Cacturne",
		'es-mx': "Cacturne"
	},

	illustrator: "okayamatakatoshi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Linear Attack",
			fr: "Attaque Linéaire",
			de: "Linearer Angriff",
			es: "Ataque Lineal",
			it: "Attacco Lineare",
			pt: "Ataque Linear",
			'es-mx': "Ataque Lineal"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque hace 30 puntos de daño a uno de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
			it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente. <em>(Não aplique Fraqueza e Resistência aos Pokémon no Banco.)</em>",
			'es-mx': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Punishing Needles",
			fr: "Aiguilles Punitives",
			de: "Strafende Dornen",
			es: "Pinchos Castigadores",
			it: "Spine Punitive",
			pt: "Agulhas Punitivas",
			'es-mx': "Espinas Castigadoras"
		},

		effect: {
			en: "This attack does 50 more damage for each of your opponent's Pokémon in play that has an Ability.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chacun des Pokémon en jeu de votre adversaire ayant un talent.",
			de: "Diese Attacke fügt für jedes Pokémon deines Gegners im Spiel, das eine Fähigkeit hat, 50 Schadenspunkte mehr zu.",
			es: "Este ataque hace 50 puntos de daño más por cada uno de los Pokémon en juego de tu rival que tengan una habilidad.",
			it: "Questo attacco infligge 50 danni in più per ciascuno dei Pokémon del tuo avversario in gioco che ha un'abilità.",
			pt: "Este ataque causa 50 pontos de dano a mais para cada Pokémon do seu oponente em jogo que tem uma Habilidade.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada uno de los Pokémon en juego de tu rival que tengan alguna Habilidad."
		},

		damage: "10+",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		tcgplayer: 727566,
		cardmarket: 918814
	}
}

export default card