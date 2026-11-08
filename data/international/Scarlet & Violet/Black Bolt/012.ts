import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'de-de': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'es-es': "Victini",
		'es-mx': "Victini"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
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
			'pt-br': "Força V",
			'es-es': "Fuerza V",
			'es-mx': "Fuerza V"
		},

		effect: {
			'en-us': "If you have 4 or fewer Benched Pokémon, this attack does nothing.",
			'fr-fr': "Si vous avez 4 Pokémon de Banc ou moins, cette attaque ne fait rien.",
			'de-de': "Wenn du 4 oder weniger Pokémon auf deiner Bank hast, hat diese Attacke keine Auswirkungen.",
			'it-it': "Se hai quattro o meno Pokémon in panchina, questo attacco non ha effetto.",
			'pt-br': "Se você tiver 4 ou menos Pokémon no Banco, este ataque não fará nada.",
			'es-es': "Si tienes 4 Pokémon en Banca o menos, este ataque no hace nada.",
			'es-mx': "Si tienes 4 Pokémon en Banca o menos, este ataque no hace nada."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835926,
				tcgplayer: 642461
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835926,
				tcgplayer: 642461
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836281,
				tcgplayer: 642706
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836282,
				tcgplayer: 642634
			}
		},
		{
			type: "holo", 
			foil: "cosmos", 
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 865205
			}
		} 
	],
}

export default card
