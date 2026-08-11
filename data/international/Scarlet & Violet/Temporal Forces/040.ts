import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [159],
	set: Set,

	name: {
		en: "Croconaw",
		fr: "Crocrodil",
		es: "Croconaw",
		it: "Croconaw",
		pt: "Croconaw",
		de: "Tyracroc"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		en: "Totodile",
		fr: "Kaiminus",
		es: "Totodile",
		it: "Totodile",
		pt: "Totodile",
		de: "Karnimani"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Reverse Thrust",
			fr: "Poussée Inverse",
			es: "Invertir Impulso",
			it: "Tornaindietro",
			pt: "Impulso Reverso",
			de: "Umkehrschub"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		en: "If it loses a fang, a new one grows back in its place. There are always 48 fangs lining its mouth.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760670,
				tcgplayer: 542784
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760670,
				tcgplayer: 542784
			}
		},
	],

	illustrator: "Jerky",

}

export default card