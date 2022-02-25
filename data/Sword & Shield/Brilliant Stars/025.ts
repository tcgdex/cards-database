import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
		es: "Monferno",
		it: "Monferno",
		pt: "Monferno",
		de: "Panpyro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Chimchar",
		fr: "Ouisticram",
		es: "Chimchar",
		it: "Chimchar",
		pt: "Chimchar",
		de: "Panflam"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			it: "Fiammata",
			pt: "Chama",
			de: "Flackern"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
			es: "Lanzallamas",
			it: "Lanciafiamme",
			pt: "Lança-chamas",
			de: "Flammenwurf"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card