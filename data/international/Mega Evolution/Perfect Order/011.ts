import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [723],

	name: {
		'en-us': "Dartrix",
		'fr-fr': "Efflèche",
		'es-es': "Dartrix",
		'es-mx': "Dartrix",
		'de-de': "Arboretoss",
		'it-it': "Dartrix",
		'pt-br': "Dartrix"
	},

	evolveFrom: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
		'es-es': "Rowlet",
		'es-mx': "Rowlet",
		'de-de': "Bauz",
		'it-it': "Rowlet",
		'pt-br': "Rowlet",
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
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'es-es': "Follaje",
			'es-mx': "Follaje",
			'de-de': "Blattwerk",
			'it-it': "Fogliame",
			'pt-br': "Folhagem"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Feather Shot",
			'fr-fr': "Tir Plumeux",
			'es-es': "Disparo Pluma",
			'es-mx': "Disparo de Plumas",
			'de-de': "Federschuss",
			'it-it': "Colpo di Piuma",
			'pt-br': "Disparo de Pena"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon, and this attack does 90 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige 90 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta todas las Energías de este Pokémon, y este ataque hace 90 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Descarta todas las Energías de este Pokémon, y este ataque hace 90 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon deines Gegners 90 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Scarta tutte le Energie da questo Pokémon e questo attacco infligge 90 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte todas as Energias deste Pokémon, e este ataque causa 90 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684369,
				cardmarket: 877423
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684369,
				cardmarket: 877423
			}
		}
	],

}

export default card
