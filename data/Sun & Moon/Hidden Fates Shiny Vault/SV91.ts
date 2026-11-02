import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Tapu Bulu-GX",
		fr: "Tokotoro-GX",
		de: "Kapu-Toro-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",


	dexId: [787],
	set: Set,

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
				en: "Horn Attack",
				fr: "Koud’Korne",
				de: "Hornattacke"
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
				en: "Nature's Judgment",
				fr: "Jugement de la Nature",
				de: "Gebot der Natur"
			},
			effect: {
				en: "You may discard all Energy from this Pokémon. If you do, this attack does 60 more damage.",
				fr: "Vous pouvez défausser toute l’Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 60 dégâts supplémentaires.",
				de: "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: 120,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Tapu Wilderness-GX",
				fr: "Toko Nature-GX",
				de: "Kapu-Wildnis GX"
			},
			effect: {
				en: "Heal all damage from this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Heile allen Schaden bei diesem Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

		},
	],


	retreat: 3,



}

export default card
