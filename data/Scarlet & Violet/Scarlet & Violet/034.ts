import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [229],
	set: Set,

	name: {
		en: "Houndoom",
		fr: "Démolosse",
		es: "Houndoom",
		it: "Houndoom",
		pt: "Houndoom",
		de: "Hundemon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Houndour"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Fire Blast",
			fr: "Déflagration",
			es: "Llamarada",
			it: "Fuocobomba",
			pt: "Rajada de Fogo",
			de: "Feuersturm"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card