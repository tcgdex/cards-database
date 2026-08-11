import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'fr-fr': "Dracaufeu VMAX",
		'de-de': "Glurak VMAX",
		'es-es': "Charizard VMAX",
		'pt-br': "Charizard VMAX",
		'it-it': "Charizard VMAX",
		'en-us': "Charizard VMAX"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],

	evolveFrom: {
		'fr-fr': "Dracaufeu-V",
		'de-de': "Glurak-V",
		'es-es': "Charizard V",
		'pt-br': "Charizard V",
		'it-it': "Charizard-V",
		'en-us': "Charizard V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Tranch'Griffe",
			'de-de': "Klauenschlitzer",
			'es-es': "Cuchillada Garra",
			'pt-br': "Golpe de Garra",
			'it-it': "Lacerartiglio",
			'en-us': "Claw Slash"
		},

		damage: 100
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Fournaise G-Max",
			'de-de': "Giga-Feuerflug",
			'es-es': "Gigallamarada",
			'pt-br': "Queimada G-Max",
			'it-it': "Gigavampa",
			'en-us': "G-Max Wildfire"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'en-us': "Discard 2 Energy from this Pokémon."
		},

		damage: 300
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "D",

	thirdParty: {
		cardmarket: 674369,
		tcgplayer: 285378
	}
}

export default card
