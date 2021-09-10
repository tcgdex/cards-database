import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Charizard GX",
		fr: "Dracaufeu GX",
		es: "Charizard GX",
		it: "Charizard GX",
		pt: "Charizard GX",
		de: "Glurak GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
		fr: "Reptincel",
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
				en: "Wing Attack",
				fr: "Cru-Aile",
				es: "Ataque Ala",
				it: "Attacco d’Ala",
				pt: "Ataque de Asa",
				de: "Flügelschlag"
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
				en: "Crimson Storm",
				fr: "Tempête Écarlate",
				es: "Tormenta Carmesí",
				it: "Tempestarossa",
				pt: "Tempestade Carmim",
				de: "Feuerroter Sturm"
			},
			effect: {
				en: "Discard 3 Fire Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies Fire de ce Pokémon.",
				es: "Descarta 3 Energías Fire unidas a este Pokémon.",
				it: "Scarta tre Energie Fire assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias Fire deste Pokémon.",
				de: "Lege 3 Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
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
				en: "Raging Out GX",
				fr: "Déchaînement Furieux GX",
				es: "Enojo GX",
				it: "Sfogo Rabbioso-GX",
				pt: "Cólera GX",
				de: "Tobsuchtsanfall GX"
			},
			effect: {
				en: "Discard the top 10 cards of your opponent’s deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez les 10 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta las 10 primeras cartas de la baraja de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta le prime 10 carte del mazzo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte as 10 primeiras cartas do baralho do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege die obersten 10 Karten des Decks deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
