import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886402,
				tcgplayer: 693500
			}
		},
	],

	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
		es: "Ho-Oh",
		'es-mx': "Ho-Oh",
		de: "Ho-Oh",
		it: "Ho-Oh",
		pt: "Ho-Oh"
	},

	illustrator: "Takumi Wada",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [250],
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Flames of Revival",
			fr: "Flammes de Rappel",
			es: "Llamas Revitalizantes",
			'es-mx': "Llamas Vitales",
			de: "Flammen der Erneuerung",
			it: "Fiamme della Vitalità",
			pt: "Chamas do Reviver"
		},

		cost: ["Fire"],

		effect: {
			en: "Put up to 3 Basic Pokémon from your discard pile onto your Bench.",
			fr: "Placez jusqu'à 3 Pokémon de base de votre pile de défausse sur votre Banc.",
			es: "Pon hasta 3 Pokémon Básicos de tu pila de descartes en tu Banca.",
			'es-mx': "Pon hasta 3 Pokémon Básicos de tu pila de descartes en tu Banca.",
			de: "Lege bis zu 3 Basis-Pokémon aus deinem Ablagestapel auf deine Bank.",
			it: "Prendi fino a tre Pokémon Base dalla tua pila degli scarti e mettili nella tua panchina.",
			pt: "Coloque até 3 Pokémon Básicos da sua pilha de descarte no seu Banco."
		}
	}, {
		name: {
			en: "Bright Wing",
			fr: "Ailes Lumineuses",
			es: "Ala Brillante",
			'es-mx': "Ala Brillante",
			de: "Strahlenschwinge",
			it: "Ala di Luce",
			pt: "Asa Brilhante"
		},

		cost: ["Fire", "Fire", "Fire"],
		damage: 130,

		effect: {
			en: "Discard a {R} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {R} de ce Pokémon.",
			es: "Descarta 1 Energía {R} de este Pokémon.",
			'es-mx': "Descarta 1 Energía {R} de este Pokémon.",
			de: "Lege 1 {R}-Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia {R} da questo Pokémon.",
			pt: "Descarte uma Energia {R} deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card