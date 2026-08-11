import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [257],
	set: Set,

	name: {
		'fr-fr': "Braségali V",
		'en-us': "Blaziken V",
		'es-es': "Blaziken V",
		'it-it': "Blaziken V",
		'pt-br': "Blaziken V",
		'de-de': "Lohgock V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	attacks: [{
		name: {
			'fr-fr': "Pied Voltige",
			'en-us': "High Jump Kick",
			'es-es': "Patada Salto Alta",
			'it-it': "Calcinvolo",
			'pt-br': "Chute de Pulo Alto",
			'de-de': "Turmkick"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Danse Flammes",
			'en-us': "Fire Spin",
			'es-es': "Giro Fuego",
			'it-it': "Turbofuoco",
			'pt-br': "Chama Furacão",
			'de-de': "Feuerwirbel"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'en-us': "Discard 2 Energy from this Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 210,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567269,
				tcgplayer: 241670
			}
		},
	],
}

export default card
