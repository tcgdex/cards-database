import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Maractus",
		fr: "Maracachi",
		es: "Maractus",
		it: "Maractus",
		de: "Maracamba",
		'pt-br': "Maractus",
		ko: "마라카치"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [556],
	hp: 90,
	types: ["Grass"],

	description: {
		en: "With noises that could be mistaken for the rattles of maracas, it creates an upbeat rhythm, startling bird Pokémon and making them fly off in a hurry.",
		fr: "Il produit un bruit de maracas. Quand il danse\nà un rythme enjoué, il surprend les Pokémon\noiseaux, qui s'enfuient alors à tire-d'aile.",
		es: "Emite un sonido parecido a unas maracas.\nSe mueve con un ritmo marchoso para sorprender\na los Pokémon pájaro, que huyen espantados.",
		it: "Emette un suono di maracas. Sfrutta il suo\nritmo vivace per prendere alla sprovvista i\nPokémon alati, che volano via in tutta fretta.",
		de: "Es erzeugt Laute, die dem Klang von Maracas ähneln,\nund weiß sich Vogel-Pokémon mit flotten Rhythmen\nvom Leib zu halten.",
		'pt-br': "Este Pokémon produz um ritmo animado com sons que\npoderiam ser confundidos com os de maracas, assustando\nos Pokémon pássaro, que saem voando imediatamente.",
		ko: "마라카스 같은 소리를 낸다.\n리듬이 경쾌해서 새포켓몬은\n깜짝 놀라 허둥지둥 날아가버린다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sting",
			fr: "Dard",
			es: "Aguijonazo",
			it: "Puntura",
			de: "Einstich",
			'pt-br': "Ferroada",
			ko: "따끔따끔찌르기"
		},

		damage: 40,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card