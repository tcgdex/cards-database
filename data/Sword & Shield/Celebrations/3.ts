import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Kyogre",
		fr: "Kyogre",
		es: "Kyogre",
		it: "Kyogre",
		pt: "Kyogre",
		de: "Kyogre"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Ryuta Fuse",

	attacks: [{
		name: {
			en: "Aqua Storm",
			fr: "Aqua Tempête",
			es: "Tormenta Aqua",
			it: "Tempesta Idro",
			pt: "Tempestade Aqua",
			de: "Aquasturm"
		},

		effect: {
			en: "Discard the top 5 cards of your deck, and then choose 2 of your opponent's Benched Pokémon. This attack does 50 damage for each Energy card you discarded in this way to each of those Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez les 5 cartes du dessus de votre deck, puis choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque inflige 50 dégâts à chacun de ces Pokémon pour chaque carte Énergie défaussée de cette façon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta las 5 primeras cartas de tu baraja y luego elige 2 de los Pokémon en Banca de tu rival. Este ataque hace 50 puntos de daño a cada uno de esos Pokémon por cada carta de Energía que hayas descartado de esta manera. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Scarta le prime cinque carte del tuo mazzo e scegli due dei Pokémon nella panchina del tuo avversario. Questo attacco infligge 50 danni a ciascuno di quei Pokémon per ogni carta Energia che hai scartato in questo modo. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte as 5 cartas de cima do seu baralho e, em seguida, escolha 2 dos Pokémon no Banco do seu oponente. Este ataque causa 50 pontos de dano para cada carta de Energia descartada desta forma a cada um daqueles Pokémon (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel und wähle anschließend 2 Pokémon auf der Bank deines Gegners. Diese Attacke fügt jedem jener Pokémon für jede auf diese Weise abgelegte Energiekarte 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water", "Water", "Colorless"]
	}, {
		name: {
			en: "Surf",
			fr: "Surf",
			es: "Surf",
			it: "Surf",
			pt: "Surfar",
			de: "Surfer"
		},

		damage: "120",
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card
