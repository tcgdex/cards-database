import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Lycanroc GX",
		'fr-fr': "Lougaroc GX",
		'es-es': "Lycanroc GX",
		'it-it': "Lycanroc GX",
		'pt-br': "Lycanroc GX",
		'de-de': "Wolwerock GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		745,
	],

	hp: 200,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
				'es-es': "Triturar",
				'it-it': "Sgranocchio",
				'pt-br': "Mastigada",
				'de-de': "Knirscher"
			},
			effect: {
				'en-us': "Discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Accelerock",
				'fr-fr': "Vif Roc",
				'es-es': "Roca Veloz",
				'it-it': "Rocciarapida",
				'pt-br': "Rocha Veloz",
				'de-de': "Turbofelsen"
			},

			damage: 120,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Lycanfang GX",
				'fr-fr': "LougaCroc GX",
				'es-es': "Lycancolmillo GX",
				'it-it': "Fauci Lupo-GX",
				'pt-br': "Lycanino GX",
				'de-de': "Wolwefänge GX"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Descarta 2 Energías de este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scarta due Energie assegnate a questo Pokémon. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Descarte 2 Energias deste Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299537,
		tcgplayer: 138641
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
