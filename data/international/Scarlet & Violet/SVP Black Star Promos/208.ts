import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'de-de': "Victini",
		'it-it': "Victini",
		'es-es': "Victini",
		'pt-br': "Victini"
	},

	illustrator: "Amelicart",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [494],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "V-Force",
			'fr-fr': "Force-V",
			'de-de': "V-Stärke",
			'it-it': "Forza V",
			'es-es': "Fuerza V",
			'pt-br': "Força V"
	},

		effect: {
			'en-us': "If you have 4 or fewer Benched Pokémon, this attack does nothing.",
			'fr-fr': "Si vous avez 4 Pokémon de Banc ou moins, cette attaque ne fait rien.",
			'de-de': "Wenn du 4 oder weniger Pokémon auf deiner Bank hast, hat diese Attacke keine Auswirkungen.",
			'it-it': "Se hai quattro o meno Pokémon in panchina, questo attacco non ha effetto.",
			'es-es': "Si tienes 4 Pokémon en Banca o menos, este ataque no hace nada.",
			'pt-br': "Se você tiver 4 ou menos Pokémon no Banco, este ataque não fará nada."
	},

		damage: 120
	}],

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836653,
				tcgplayer: 646169
			},
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 836654,
				tcgplayer: 646170
			}
		}
	],
}

export default card
