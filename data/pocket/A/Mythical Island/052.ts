import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Liepard",
		'fr-fr': "Léopardus",
		'es-es': "Liepard",
		'it-it': "Liepard",
		'de-de': "Kleoparda",
		'pt-br': "Liepard",
		'ko-kr': "레파르다스"
	},

	illustrator: "GIDORA",
	category: "Pokemon",

	dexId: [510],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Purrloin"
	},

	description: {
		'en-us': "Don't be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon.",
		'fr-fr': "On se laisse facilement éblouir par son pelage\nmagnifique et son allure élégante, mais gare\nà son caractère imprévisible et agressif.",
		'es-es': "Bajo su hermoso pelaje y cautivador estilo,\nque puede llevar fácilmente a engaño, se\noculta un carácter imprevisible y agresivo.",
		'it-it': "Pokémon dalla magnifica pelliccia e dalle linee aggraziate,\ndietro cui si nasconde un carattere volubile e feroce.",
		'de-de': "Man wird schnell von seinem schönen Fell und\nseiner Anmut verleitet, aber es ist ein sehr\nlaunisches und gewalttätiges Pokémon.",
		'pt-br': "Não se deixe enganar pela sua pelugem fantástica e figura\nelegante. Este Pokémon é instável e perverso.",
		'ko-kr': "아름다운 털과 스타일에\n쉽게 매료되지만 변덕스럽고\n흉포한 포켓몬이다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'de-de': "Schlitzer",
			'pt-br': "Talho",
			'ko-kr': "베어가르기"
		},

		damage: 40,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
