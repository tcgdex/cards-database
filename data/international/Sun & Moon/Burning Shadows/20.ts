import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Charizard GX",
		'fr-fr': "Dracaufeu GX",
		'es-es': "Charizard GX",
		'it-it': "Charizard GX",
		'pt-br': "Charizard GX",
		'de-de': "Glurak GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 250,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Aile",
				'es-es': "Ataque Ala",
				'it-it': "Attacco d’Ala",
				'pt-br': "Ataque de Asa",
				'de-de': "Flügelschlag"
			},

			damage: 70,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crimson Storm",
				'fr-fr': "Tempête Écarlate",
				'es-es': "Tormenta Carmesí",
				'it-it': "Tempestarossa",
				'pt-br': "Tempestade Carmim",
				'de-de': "Feuerroter Sturm"
			},
			effect: {
				'en-us': "Discard 3 Fire Energy from this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies Fire de ce Pokémon.",
				'es-es': "Descarta 3 Energías Fire unidas a este Pokémon.",
				'it-it': "Scarta tre Energie Fire assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias Fire deste Pokémon.",
				'de-de': "Lege 3 Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 300,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Raging Out GX",
				'fr-fr': "Déchaînement Furieux GX",
				'es-es': "Enojo GX",
				'it-it': "Sfogo Rabbioso-GX",
				'pt-br': "Cólera GX",
				'de-de': "Tobsuchtsanfall GX"
			},
			effect: {
				'en-us': "Discard the top 10 cards of your opponent’s deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez les 10 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Descarta las 10 primeras cartas de la baraja de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scarta le prime 10 carte del mazzo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Descarte as 10 primeiras cartas do baralho do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege die obersten 10 Karten des Decks deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 299426,
		tcgplayer: 138496
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
