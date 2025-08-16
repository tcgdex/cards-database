import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [768],
	set: Set,

	name: {
		en: "Golisopod ex",
		fr: "Sarmuraï-ex",
		es: "Golisopod ex",
		it: "Golisopod-ex",
		pt: "Golisopod ex",
		de: "Tectass-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Aqua Blade",
			fr: "Hydrolame",
			es: "Hoja Agua",
			it: "Idrolama",
			pt: "Lâmina de Água",
			de: "Aquaklinge"
		},

		damage: 70
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Swing and Skedaddle",
			fr: "Coup et Fuite",
			es: "Tajo y Huida",
			it: "Stangata e Fuga",
			pt: "Girar e Zarpar",
			de: "Haudrauf und Reißaus"
		},

		effect: {
			en: "Discard an Energy from this Pokémon. If you do, switch it with 1 of your Benched Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon. Dans ce cas, échangez-le contre l'un de vos Pokémon de Banc.",
			es: "Descarta 1 Energía de este Pokémon. Si lo haces, cámbialo por uno de tus Pokémon en Banca.",
			it: "Scarta un'Energia da questo Pokémon. Se lo fai, scambialo con uno della tua panchina.",
			pt: "Descarte uma Energia deste Pokémon. Se fizer isto, troque-o por 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, tausche es gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 170
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "N-DESIGN Inc.",

	thirdParty: {
		cardmarket: 740535
	}
}

export default card