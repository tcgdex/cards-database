import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Charizard Y ex",
		'fr-fr': "Méga-Dracaufeu Y-ex",
		'de-de': "Mega-Glurak Y-ex",
		'it-it': "Mega Charizard Y-ex",
		'es-es': "Mega-Charizard Y ex",
		'pt-br': "Mega Charizard Y ex"
	},

	suffix: "ex",
	illustrator: "Ultimateinudog",
	rarity: "Promo",
	category: "Pokemon",
	hp: 360,
	types: ["Fire"],
	stage: "Stage2",
	dexId: [6],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'de-de': "Glutexo",
		'it-it': "Charmeleon",
		'es-es': "Charmeleon",
		'pt-br': "Charmeleon"
	},

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Explosion Y",
			'fr-fr': "Explosion Y",
			'de-de': "Explosion Y",
			'it-it': "Esplosione Y",
			'es-es': "Explosión Y",
			'pt-br': "Explosão Y"
		},

		effect: {
			'en-us': "Discard 3 Energy from this Pokémon, and this attack does 280 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez 3 Énergies de ce Pokémon. Cette attaque inflige 280 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon deines Gegners 280 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Scarta tre Energie da questo Pokémon e questo attacco infligge 280 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'es-es': "Descarta 3 Energías de este Pokémon, y este ataque hace 280 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Descarte 3 Energias deste Pokémon, e este ataque causa 280 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 873699,
				tcgplayer: 680640
			}
		},
	],
}

export default card
