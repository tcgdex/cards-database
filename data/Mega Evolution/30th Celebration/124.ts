import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Minior",
		fr: "Météno",
		de: "Meteno",
		es: "Minior",
		it: "Minior",
		'es-mx': "Minior"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Shoot Meteors",
			fr: "Tir de Météores",
			de: "Meteorsalve",
			es: "Disparo de Meteoros",
			it: "Sparameteore",
			'es-mx': "Meteodisparo"
		},

		effect: {
			en: "Discard all Energy from this Pokémon, and this attack does 120 damage to 1 of your opponent's Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Descarta todas las Energías de este Pokémon, y este ataque hace 120 puntos de daño a uno de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
			it: "Scarta tutte le Energie da questo Pokémon e questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			'es-mx': "Descarta todas las Energías de este Pokémon, y este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card