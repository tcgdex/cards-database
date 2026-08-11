import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
		'es-es': "Nidorino",
		'it-it': "Nidorino",
		'de-de': "Nidorino",
		'pt-br': "Nidorino",
		'ko-kr': "니드리노"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",

	dexId: [33],
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Nidoran♂"
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Horn Attack",
			'fr-fr': "Koud'Korne",
			'es-es': "Cornada",
			'it-it': "Incornata",
			'de-de': "Hornattacke",
			'pt-br': "Ataque de Chifre",
			'ko-kr': "뿔찌르기"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		'en-us': "With a horn that's harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.",
		'fr-fr': "Il erre à la recherche d'une Pierre Lune,\nbrisant tous les rochers sur son passage\navec sa corne plus solide qu'un diamant.",
		'es-es': "Dondequiera que va, parte rocas con su cuerno, más\nduro que un diamante, en busca de una Piedra Lunar.",
		'it-it': "Vaga alla ricerca di una Pietralunare frantumando\nrocce con il suo corno più duro del diamante.",
		'de-de': "Auf der Suche nach einem Mondstein\nzerstört es Felsen mit seinem Horn,\ndas härter ist als ein Diamant.",
		'pt-br': "Com um chifre mais duro que um diamente,\neste Pokémon sai por aí destruindo rochas\nenquanto busca por uma Pedra da Lua.",
		'ko-kr': "다이아몬드보다 단단한 뿔로\n암석을 부수며 다닌다.\n달의돌을 찾고 있는 것이다."
	},

	boosters: ["pikachu"]
}

export default card
