import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Dartrix",
		fr: "Efflèche",
		es: "Dartrix",
		'es-mx': "Dartrix",
		de: "Arboretoss",
		it: "Dartrix",
		pt: "Dartrix"
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Leafage",
			fr: "Feuillage",
			es: "Follaje",
			'es-mx': "Follaje",
			de: "Blattwerk",
			it: "Fogliame",
			pt: "Folhagem"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Feather Shot",
			fr: "Tir Plumeux",
			es: "Disparo Pluma",
			'es-mx': "Disparo de Plumas",
			de: "Federschuss",
			it: "Colpo di Piuma",
			pt: "Disparo de Pena"
		},

		effect: {
			en: "Discard all Energy from this Pokémon, and this attack does 90 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige 90 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Descarta todas las Energías de este Pokémon, y este ataque hace 90 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Descarta todas las Energías de este Pokémon, y este ataque hace 90 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon deines Gegners 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Scarta tutte le Energie da questo Pokémon e questo attacco infligge 90 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Descarte todas as Energias deste Pokémon, e este ataque causa 90 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684369,
		cardmarket: 877423
	}
}

export default card