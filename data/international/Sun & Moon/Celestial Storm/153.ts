import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Blaziken GX",
		'fr-fr': "Braségali GX",
		'es-es': "Blaziken GX",
		'it-it': "Blaziken GX",
		'pt-br': "Blaziken GX",
		'de-de': "Lohgock GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 240,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 60,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Explosive Kick",
				'fr-fr': "Coup de Pied Explosif",
				'es-es': "Patada Explosiva",
				'it-it': "Calcio Atomico",
				'pt-br': "Chute Explosivo",
				'de-de': "Explosiver Tritt"
			},
			effect: {
				'en-us': "Discard 2 Fire Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies Fire de ce Pokémon.",
				'es-es': "Descarta 2 Energías Fire de este Pokémon.",
				'it-it': "Scarta due Energie Fire assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias Fire deste Pokémon.",
				'de-de': "Lege 2 Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 210,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Blaze Out GX",
				'fr-fr': "Embrasement GX",
				'es-es': "Abrasamiento GX",
				'it-it': "Rogo-GX",
				'pt-br': "Chama Abrasadora GX",
				'de-de': "Brand GX"
			},
			effect: {
				'en-us': "Discard 2 Energy from your opponent’s Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez 2 Énergies des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Descarta 2 Energías de los Pokémon de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scarta due Energie assegnate ai Pokémon del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Descarte 2 Energias dos Pokémon do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege 2 Energien von den Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361390,
		tcgplayer: 170842
	}
}

export default card
