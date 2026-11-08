import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [6],
	set: Set,

	name: {
		'fr-fr': "Dracaufeu VMAX",
		'en-us': "Charizard VMAX",
		'es-es': "Charizard VMAX",
		'it-it': "Charizard VMAX",
		'pt-br': "Charizard VMAX",
		'de-de': "Glurak VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],

	evolveFrom: {
		'fr-fr': "Dracaufeu-V",
		'en-us': "Charizard V"
	},

	attacks: [{
		name: {
			'fr-fr': "Tranch'Griffe",
			'en-us': "Claw Slash",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Fournaise G-Max",
			'en-us': "G-Max Wildfire",
			'es-es': "Gigallamarada",
			'it-it': "Gigavampa",
			'pt-br': "Queimada G-Max",
			'de-de': "Giga-Feuerflug"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'en-us': "Discard 2 Energy from this Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 300,
		cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539923,
				tcgplayer: 232496
			}
		},
	],
}

export default card
