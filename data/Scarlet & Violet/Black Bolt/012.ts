import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		en: "Victini",
		fr: "Victini",
		de: "Victini",
		it: "Victini",
		pt: "Victini",
		es: "Victini",
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
			en: "V-Force",
			fr: "Force-V",
			de: "V-Stärke",
			it: "Forza V",
			pt: "Força V",
			es: "Fuerza V",
			'es-mx': "Fuerza V"
		},

		effect: {
			en: "If you have 4 or fewer Benched Pokémon, this attack does nothing.",
			fr: "Si vous avez 4 Pokémon de Banc ou moins, cette attaque ne fait rien.",
			de: "Wenn du 4 oder weniger Pokémon auf deiner Bank hast, hat diese Attacke keine Auswirkungen.",
			it: "Se hai quattro o meno Pokémon in panchina, questo attacco non ha effetto.",
			pt: "Se você tiver 4 ou menos Pokémon no Banco, este ataque não fará nada.",
			es: "Si tienes 4 Pokémon en Banca o menos, este ataque no hace nada.",
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
				cardmarket: 835926
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835926
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836281
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836282
			}
		}
	],
}

export default card
