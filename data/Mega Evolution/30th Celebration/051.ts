import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "nagimiso",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Lightning Crash",
			fr: "Chute d'Éclairs",
			de: "Blitzstoß",
			es: "Golpe Relámpago",
			it: "Elettroschianto",
			'es-mx': "Relampagolpe"
		},

		effect: {
			en: "Discard all <span class=\"energy-symbol Lightning\" title=\"Lightning\">Lightning</span> Energy from this Pokémon, and this attack does 90 damage to 1 of your opponent's Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Défaussez toutes les Énergies <span class=\"energy-symbol Lightning\" title=\"Électrique\">Lightning</span> de ce Pokémon. Cette attaque inflige 90 dégâts à l'un des Pokémon de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Lege alle <span class=\"energy-symbol Lightning\" title=\"Elektro\">Lightning</span>-Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon deines Gegners 90 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Descarta todas las Energías <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> de este Pokémon, y este ataque hace 90 puntos de daño a uno de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
			it: "Scarta tutte le Energie <span class=\"energy-symbol Lightning\" title=\"Lampo\">Lightning</span> da questo Pokémon e questo attacco infligge 90 danni a uno dei Pokémon del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			'es-mx': "Descarta todas las Energías <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> de este Pokémon, y este ataque hace 90 puntos de daño a 1 de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907658,
				tcgplayer: 716317
			}
		}
	],
}

export default card
