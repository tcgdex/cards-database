import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [962],
	set: Set,

	name: {
		'en-us': "Bombirdier",
		'fr-fr': "Lestombaile",
		'es-es': "Bombirdier",
		'de-de': "Adebom",
		'it-it': "Bombirdier",
		'pt-br': "Bombirdier",
		'es-mx': "Bombirdier"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement",
			'es-es': "Planeo",
			'de-de': "Gleiten",
			'it-it': "Aliante",
			'pt-br': "Planeio",
			'es-mx': "Planeo"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Drop Shot",
			'fr-fr': "Tir Largage",
			'es-es': "Dejada",
			'de-de': "Abwurfgeschoss",
			'it-it': "Gettacolpo",
			'pt-br': "Derrubala",
			'es-mx': "Descarga Aérea"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon, and this attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta todas las Energías de este Pokémon, y este ataque hace 120 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Scarta tutte le Energie da questo Pokémon e questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte todas as Energias deste Pokémon, e este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'es-mx': "Descarta todas las Energías de este Pokémon, y este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca)."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Gemi",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817253,
				tcgplayer: 623528
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817253,
				tcgplayer: 623528
			}
		},
	],
}

export default card
