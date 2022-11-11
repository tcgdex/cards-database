import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Donphan",
		fr: "Donphan",
		es: "Donphan",
		it: "Donphan",
		pt: "Donphan",
		de: "Donphan"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
		es: "Phanpy",
		it: "Phanpy",
		pt: "Phanpy",
		de: "Phanpy"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Overspin",
			fr: "Extra Vrille",
			es: "Rodar a lo Loco",
			it: "Esagirare",
			pt: "Rodopio Exagerado",
			de: "Rollkoller"
		},

		effect: {
			en: "If this Pokémon evolved during this turn, this attack does nothing.",
			fr: "Si ce Pokémon a évolué pendant ce tour, cette attaque ne fait rien.",
			es: "Si este Pokémon ha evolucionado durante este turno, este ataque no hace nada.",
			it: "Se questo Pokémon si è evoluto durante questo turno, questo attacco non ha effetto.",
			pt: "Se este Pokémon evoluiu durante este turno, este ataque não fará nada.",
			de: "Wenn sich dieses Pokémon während dieses Zuges entwickelt hat, hat diese Attacke keine Auswirkungen."
		},

		damage: 110
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			en: "Giant Fangs",
			fr: "Crocs Géants",
			es: "Colmillos Gigantes",
			it: "Zanne Giganti",
			pt: "Presas Gigantes",
			de: "Riesenbeißer"
		},

		damage: 170
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card