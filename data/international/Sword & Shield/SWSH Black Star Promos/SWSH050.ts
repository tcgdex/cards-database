import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charizard V",
		'fr-fr': "Dracaufeu V",
		'es-es': "Charizard V",
		'it-it': "Charizard V",
		'pt-br': "Charizard V",
		'de-de': "Glurak V"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	attacks: [{
		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Fire Spin",
			'fr-fr': "Danse Flammes",
			'es-es': "Giro Fuego",
			'it-it': "Turbofuoco",
			'pt-br': "Chama Furacão",
			'de-de': "Feuerwirbel"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 220,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	stage: "Basic",
	dexId: [6],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 505255,
		tcgplayer: 223754
	}
}

export default card
