import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [163],
	set: Set,

	name: {
		en: "Hoothoot",
		fr: "Hoothoot",
		es: "Hoothoot",
		pt: "Hoothoot",
		it: "Hoothoot",
		de: "Hoothoot"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Insomnia",
			fr: "Insomnia",
			es: "Insomnio",
			pt: "Insônia",
			it: "Insonnia",
			de: "Insomnia"
		},

		effect: {
			en: "This Pokémon can't be Asleep.",
			fr: "Ce Pokémon ne peut pas être Endormi.",
			es: "Este Pokémon no puede pasar a estar Dormido.",
			pt: "Este Pokémon não pode ser Adormecido.",
			it: "Questo Pokémon non può venire addormentato.",
			de: "Dieses Pokémon kann nicht von Schlaf betroffen werden."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			pt: "Investida",
			it: "Azione",
			de: "Tackle"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "Nakamura Ippan"
}

export default card