import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Tapu Bulu GX",
		fr: "Tokotoro GX",
		es: "Tapu Bulu GX",
		it: "Tapu Bulu GX",
		pt: "Tapu Bulu GX",
		de: "Kapu-Toro GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
				en: "Horn Attack",
				fr: "Koud’Korne",
				es: "Cornada",
				it: "Incornata",
				pt: "Ataque de Chifre",
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
				en: "Nature’s Judgment",
				fr: "Jugement de la Nature",
				es: "Sentencia de la Naturaleza",
				it: "Giudizio della Natura",
				pt: "Julgamento da Natureza",
				de: "Gebot der Natur"
			},
			effect: {
				en: "You may discard all Energy from this Pokémon. If you do, this attack does 60 more damage.",
				fr: "Vous pouvez défausser toute l’Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Puedes descartar todas las Energías de este Pokémon. Si lo haces, este ataque hace 60 puntos de daño más.",
				it: "Puoi scartare tutte le Energie assegnate a questo Pokémon. Se lo fai, questo attacco infligge 60 danni in più.",
				pt: "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, este ataque causará 60 pontos de dano a mais.",
				de: "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 60 Schadenspunkte mehr zu."
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
				en: "Tapu Wilderness GX",
				fr: "Toko Nature GX",
				es: "Naturaleza Tapu GX",
				it: "Tapunatura-GX",
				pt: "Ermo Tapu GX",
				de: "Kapu-Wildnis GX"
			},
			effect: {
				en: "Heal all damage from this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Cura todos los puntos de daño a este Pokémon. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cura questo Pokémon da tutti i danni. Non puoi usare più di un attacco GX a partita.",
				pt: "Cure todo o dano deste Pokémon (você não pode usar mais de 1 ataque GX por partida).",
				de: "Heile allen Schaden bei diesem Pokémon. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 299530,
		tcgplayer: 138638
	}
}

export default card
