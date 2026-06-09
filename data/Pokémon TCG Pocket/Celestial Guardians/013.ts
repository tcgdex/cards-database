import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		it: "Grubbin",
		de: "Mabula",
		'pt-br': "Grubbin",
		ko: "턱지충이"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [736],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Its natural enemies, like Rookidee, may flee rather than risk getting caught in its large mandibles that can snap thick tree branches.",
		fr: "Ses mandibules peuvent briser de très grosses\nbranches. Même Minisange, son ennemi\nnaturel, s'enfuit à tire-d'aile devant lui.",
		es: "Con sus potentes mandíbulas puede hacer trizas las ramas más\ngruesas y ahuyentar incluso a los Rookidee, su enemigo natural.",
		it: "Può spezzare grossi rami con le robuste mandibole, che\nmettono in fuga persino il suo nemico naturale, Rookidee.",
		de: "Sein großer Kiefer ist stark genug, um selbst\ndicke Äste zu zerbrechen. Damit treibt es auch\nseinen natürlichen Feind Meikro in die Flucht.",
		'pt-br': "Às vezes, seus inimigos naturais, como Rookidee,\npreferem fugir a encarar suas mandíbulas enormes,\nque podem rachar galhos espessos.",
		ko: "커다란 턱은 굵은 가지를 부러뜨릴\n정도의 위력을 가졌다. 천적인\n파라꼬도 견디지 못하고 도망친다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			de: "Nagen",
			'pt-br': "Roída",
			ko: "갉기"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lunala"]
}

export default card