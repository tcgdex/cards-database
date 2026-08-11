import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Alolan Golem",
		'fr-fr': "Grolem d’Alola",
		'es-es': "Golem de Alola",
		'it-it': "Golem di Alola",
		'pt-br': "Golem de Alola",
		'de-de': "Alola-Geowaz"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 180,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Alolan Graveler",
		'fr-fr': "Gravalanch d’Alola",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'en-us': "Electromagnetic Bomb",
				'fr-fr': "Bombe Électromagnétique",
				'es-es': "Bomba Electromagnética",
				'it-it': "Bomba Elettromagnetica",
				'pt-br': "Bomba Eletromagnética",
				'de-de': "Elektromagnetische Bombe"
			},

			effect: {
				'en-us': "Move any number of Lightning Energy from your Benched Pokémon to this Pokémon. This attack does 20 damage for each Energy card you moved in this way.",
				'fr-fr': "Déplacez autant d’Énergies Lightning que vous voulez de vos Pokémon de Banc vers ce Pokémon. Cette attaque inflige 20 dégâts pour chaque carte Énergie déplacée de cette façon.",
				'es-es': "Mueve cualquier cantidad de Energías Lightning de tus Pokémon en Banca a este Pokémon. Este ataque hace 20 puntos de daño por cada carta de Energía que hayas movido de esta manera.",
				'it-it': "Sposta un numero qualsiasi di Energie Lightning dai tuoi Pokémon in panchina a questo Pokémon. Questo attacco infligge 20 danni per ogni carta Energia che hai spostato in questo modo.",
				'pt-br': "Mova qualquer número de Energia Lightning dos seus Pokémon no Banco para este Pokémon. Este ataque causa 20 pontos de dano para cada carta de Energia movida desta forma.",
				'de-de': "Verschiebe beliebig viele Lightning-Energien von den Pokémon auf deiner Bank auf dieses Pokémon. Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der von dir auf diese Weise verschobenen Energiekarten zu."
			},

			damage: "20×"
		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Zap Cannon",
				'fr-fr': "Super Élecanon",
				'es-es': "Superelectrocañón",
				'it-it': "Falcecannone Super",
				'pt-br': "Supercanhão Zap",
				'de-de': "Super-Blitzkanone"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It's grumpy and stubborn. If you upset it, it discharges electricity from the surface of its body and growls with a voice like thunder.",
	},

	thirdParty: {
		cardmarket: 368968,
		tcgplayer: 183810
	}
}

export default card
