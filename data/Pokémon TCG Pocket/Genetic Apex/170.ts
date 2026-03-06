import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorino",
		fr: "Nidorino",
		es: "Nidorino",
		it: "Nidorino",
		de: "Nidorino",
		'pt-br': "Nidorino",
		ko: "니드리노"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",

	dexId: [33],
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	evolveFrom: {
		en: "Nidoran♂"
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Horn Attack",
			fr: "Koud'Korne",
			es: "Cornada",
			it: "Incornata",
			de: "Hornattacke",
			'pt-br': "Ataque de Chifre",
			ko: "뿔찌르기"
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
		en: "With a horn that's harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.",
		fr: "Il erre à la recherche d'une Pierre Lune,\nbrisant tous les rochers sur son passage\navec sa corne plus solide qu'un diamant.",
		es: "Dondequiera que va, parte rocas con su cuerno, más\nduro que un diamante, en busca de una Piedra Lunar.",
		it: "Vaga alla ricerca di una Pietralunare frantumando\nrocce con il suo corno più duro del diamante.",
		de: "Auf der Suche nach einem Mondstein\nzerstört es Felsen mit seinem Horn,\ndas härter ist als ein Diamant.",
		'pt-br': "Com um chifre mais duro que um diamente,\neste Pokémon sai por aí destruindo rochas\nenquanto busca por uma Pedra da Lua.",
		ko: "다이아몬드보다 단단한 뿔로\n암석을 부수며 다닌다.\n달의돌을 찾고 있는 것이다."
	},

	boosters: ["pikachu"]
}

export default card
