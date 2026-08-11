import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Tapu Bulu GX",
		'fr-fr': "Tokotoro GX",
		'es-es': "Tapu Bulu GX",
		'it-it': "Tapu Bulu GX",
		'pt-br': "Tapu Bulu GX",
		'de-de': "Kapu-Toro GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		787,
	],

	hp: 180,

	types: [
		"Grass",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud’Korne",
				'es-es': "Cornada",
				'it-it': "Incornata",
				'pt-br': "Ataque de Chifre",
				'de-de': "Hornattacke"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Nature’s Judgment",
				'fr-fr': "Jugement de la Nature",
				'es-es': "Sentencia de la Naturaleza",
				'it-it': "Giudizio della Natura",
				'pt-br': "Julgamento da Natureza",
				'de-de': "Gebot der Natur"
			},
			effect: {
				'en-us': "You may discard all Energy from this Pokémon. If you do, this attack does 60 more damage.",
				'fr-fr': "Vous pouvez défausser toute l’Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Puedes descartar todas las Energías de este Pokémon. Si lo haces, este ataque hace 60 puntos de daño más.",
				'it-it': "Puoi scartare tutte le Energie assegnate a questo Pokémon. Se lo fai, questo attacco infligge 60 danni in più.",
				'pt-br': "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "120+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Tapu Wilderness GX",
				'fr-fr': "Toko Nature GX",
				'es-es': "Naturaleza Tapu GX",
				'it-it': "Tapunatura-GX",
				'pt-br': "Ermo Tapu GX",
				'de-de': "Kapu-Wildnis GX"
			},
			effect: {
				'en-us': "Heal all damage from this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Cura todos los puntos de daño a este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Cura questo Pokémon da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Cure todo o dano deste Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Heile allen Schaden bei diesem Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 299547,
		tcgplayer: 138639
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
