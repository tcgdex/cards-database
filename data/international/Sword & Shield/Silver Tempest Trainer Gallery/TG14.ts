import { Card } from "models/database/card"
import Set from "../Silver Tempest Trainer Gallery"

const card: Card = {
	dexId: [257],
	set: Set,

	name: {
		'en-us': "Blaziken V",
		'fr-fr': "Braségali V",
		'es-es': "Blaziken V",
		'it-it': "Blaziken V",
		'pt-br': "Blaziken V",
		'de-de': "Lohgock V"
	},

	illustrator: "nagimiso",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "High Jump Kick",
			'fr-fr': "Pied Voltige",
			'es-es': "Patada Salto Alta",
			'it-it': "Calcinvolo",
			'pt-br': "Chute de Pulo Alto",
			'de-de': "Turmkick"
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

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

		damage: 210
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682278,
				tcgplayer: 452030
			}
		},
	],
}

export default card
