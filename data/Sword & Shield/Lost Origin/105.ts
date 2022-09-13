import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Landorus",
		fr: "Démétéros",
		es: "Landorus",
		it: "Landorus",
		pt: "Landorus",
		de: "Demeteros"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slap Push",
			fr: "Grande Claque",
			es: "Empujón con Bofetón",
			it: "Spintonata",
			pt: "Tapa Empurrão",
			de: "Stoß"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Smashing Edge",
			fr: "Tranchant Fracassant",
			es: "Filo Devastador",
			it: "Schiaccialama",
			pt: "Gume Esmagador",
			de: "Schmetterklinge"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card