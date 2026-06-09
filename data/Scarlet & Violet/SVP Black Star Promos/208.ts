import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Victini",
		fr: "Victini",
		de: "Victini",
		it: "Victini",
		es: "Victini",
		pt: "Victini"
	},

	illustrator: "Amelicart",
	rarity: "None",
	category: "Pokemon",
	dexId: [494],
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
			es: "Fuerza V",
			pt: "Força V"
	},

		effect: {
			en: "If you have 4 or fewer Benched Pokémon, this attack does nothing.",
			fr: "Si vous avez 4 Pokémon de Banc ou moins, cette attaque ne fait rien.",
			de: "Wenn du 4 oder weniger Pokémon auf deiner Bank hast, hat diese Attacke keine Auswirkungen.",
			it: "Se hai quattro o meno Pokémon in panchina, questo attacco non ha effetto.",
			es: "Si tienes 4 Pokémon en Banca o menos, este ataque no hace nada.",
			pt: "Se você tiver 4 ou menos Pokémon no Banco, este ataque não fará nada."
	},

		damage: 120
	}],

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836653,
		tcgplayer: 646169
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			size: "jumbo"
		}
	],
}

export default card