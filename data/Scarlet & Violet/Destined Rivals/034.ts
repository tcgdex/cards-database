import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Houndoom",
		fr: "Démolosse",
		de: "Hundemon",
		it: "Houndoom",
		es: "Houndoom",
		pt: "Houndoom"
	},

	illustrator: "hncl",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			de: "Scharfe Fänge",
			it: "Zannaffilata",
			es: "Colmillo Afilado",
			pt: "Presa Afiada"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Fire Blast",
			fr: "Déflagration",
			de: "Feuersturm",
			it: "Fuocobomba",
			es: "Llamarada",
			pt: "Rajada de Fogo"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte uma Energia deste Pokémon."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card