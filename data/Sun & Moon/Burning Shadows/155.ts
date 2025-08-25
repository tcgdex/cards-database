import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Lycanroc GX",
		fr: "Lougaroc GX",
		es: "Lycanroc GX",
		it: "Lycanroc GX",
		pt: "Lycanroc GX",
		de: "Wolwerock GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
		en: "Rockruff",
		fr: "Rocabot",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
				es: "Triturar",
				it: "Sgranocchio",
				pt: "Mastigada",
				de: "Knirscher"
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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
				en: "Accelerock",
				fr: "Vif Roc",
				es: "Roca Veloz",
				it: "Rocciarapida",
				pt: "Rocha Veloz",
				de: "Turbofelsen"
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
				en: "Lycanfang GX",
				fr: "LougaCroc GX",
				es: "Lycancolmillo GX",
				it: "Fauci Lupo-GX",
				pt: "Lycanino GX",
				de: "Wolwefänge GX"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez 2 Énergies de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta 2 Energías de este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta due Energie assegnate a questo Pokémon. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte 2 Energias deste Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		tcgplayer: 138640
	}
}

export default card
