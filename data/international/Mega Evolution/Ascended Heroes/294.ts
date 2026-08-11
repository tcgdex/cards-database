import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Charizard Y ex",
		'fr-fr': "Méga-Dracaufeu Y-ex",
		'es-es': "Mega-Charizard Y ex",
		'es-mx': "Mega-Charizard Y ex",
		'de-de': "Mega-Glurak Y-ex",
		'it-it': "Mega Charizard Y-ex",
		'pt-br': "Mega Charizard Y ex"
	},

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'es-mx': "Charmeleon",
		'de-de': "Glutexo",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
	},

	suffix: "ex",
	illustrator: "aky CG Works",
	rarity: "Mega Hyper Rare",
	category: "Pokemon",
	dexId: [6],
	hp: 360,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Explosion Y",
			'fr-fr': "Explosion Y",
			'es-es': "Explosión Y",
			'es-mx': "Explosión Y",
			'de-de': "Explosion Y",
			'it-it': "Esplosione Y",
			'pt-br': "Explosão Y"
		},

		effect: {
			'en-us': "Discard 3 Energy from this Pokémon, and this attack does 280 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez 3 Énergies de ce Pokémon. Cette attaque inflige 280 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta 3 Energías de este Pokémon, y este ataque hace 280 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Descarta 3 Energías de este Pokémon, y este ataque hace 280 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon deines Gegners 280 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Scarta tre Energie da questo Pokémon e questo attacco infligge 280 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte 3 Energias deste Pokémon, e este ataque causa 280 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869905,
				tcgplayer: 676106
			}
		}
	],
}

export default card
