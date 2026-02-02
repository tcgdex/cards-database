import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [936],
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
	evolveFrom: {
		en: "Charcadet",
		fr: "Charbambin",
		es: "Charcadet",
		it: "Charcadet",
		pt: "Charcadet",
		de: "Knarbon"
	},
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
			en: "Discard a {R} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {R} de ce Pokémon.",
			es: "Descarta 1 Energía {R} de este Pokémon.",
			it: "Scarta un'Energia {R} da questo Pokémon.",
			pt: "Descarte uma Energia {R} deste Pokémon.",
			de: "Lege 1 {R}-Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "PLANETA Tsuji"
}

export default card