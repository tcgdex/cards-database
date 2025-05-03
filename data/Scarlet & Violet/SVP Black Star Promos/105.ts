import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Armarouge ex",
		fr: "Carmadura-ex",
		es: "Armarouge ex",
		it: "Armarouge-ex",
		pt: "Armarouge ex",
		de: "Crimanzo-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Armor Cannon",
			fr: "Canon Armure",
			es: "Cañón Armadura",
			it: "Corazza Cannone",
			pt: "Canhão de Armadura",
			de: "Rüstungskanone"
		},

		effect: {
			en: "Discard a Fire Energy from this Pokémon.",
			fr: "Défaussez une Énergie Fire de ce Pokémon.",
			es: "Descarta 1 Energía Fire de este Pokémon.",
			it: "Scarta un'Energia Fire da questo Pokémon.",
			pt: "Descarte uma Energia Fire deste Pokémon.",
			de: "Lege 1 Fire-Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card