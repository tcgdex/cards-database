import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Blaziken GX",
		fr: "Braségali GX",
		es: "Blaziken GX",
		it: "Blaziken GX",
		pt: "Blaziken GX",
		de: "Lohgock GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
		en: "Combusken",
		fr: "Galifeu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
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
				en: "Explosive Kick",
				fr: "Coup de Pied Explosif",
				es: "Patada Explosiva",
				it: "Calcio Atomico",
				pt: "Chute Explosivo",
				de: "Explosiver Tritt"
			},
			effect: {
				en: "Discard 2 Fire Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
				es: "Descarta 2 Energías Fire de este Pokémon.",
				it: "Scarta due Energie Fire assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias Fire deste Pokémon.",
				de: "Lege 2 Fire-Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 210,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Blaze Out GX",
				fr: "Embrasement GX",
				es: "Abrasamiento GX",
				it: "Rogo-GX",
				pt: "Chama Abrasadora GX",
				de: "Brand GX"
			},
			effect: {
				en: "Discard 2 Energy from your opponent’s Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez 2 Énergies des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta 2 Energías de los Pokémon de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta due Energie assegnate ai Pokémon del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte 2 Energias dos Pokémon do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 2 Energien von den Pokémon deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
