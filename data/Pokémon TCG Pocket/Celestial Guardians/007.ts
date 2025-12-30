import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Phantump",
		fr: "Brocélôme",
		es: "Phantump",
		it: "Phantump",
		de: "Paragoni",
		'pt-br': "Phantump",
		ko: "나목령"
	},

	illustrator: "miki kudo",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [708],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "After a lost child perished in the forest, their spirit possessed a tree stump, causing the spirit's rebirth as this Pokémon.",
		fr: "Ce Pokémon prend vie lorsque l'âme\nd'un enfant disparu en forêt prend\npossession d'une souche d'arbre.",
		es: "Se dice que en realidad son almas de niños que\npasaron a mejor vida tras perderse en el bosque\ny se convirtieron en Pokémon al habitar un tocón.",
		it: "Questo Pokémon è nato quando l'anima di un bambino\nsmarritosi nel bosco è entrata nel ceppo di un albero.",
		de: "Die Seele eines Kindes, das sich im Wald verlief\nund dabei ums Leben kam, nistete sich in einem\nBaumstumpf ein und wurde zu diesem Pokémon.",
		'pt-br': "Quando uma criança perdida faleceu na floresta,\nseu espírito possuiu um toco de árvore e ressurgiu\ncomo este Pokémon.",
		ko: "숲속을 헤매다 목숨을 잃은\n아이의 영혼이 나무 그루터기에\n씌어 포켓몬으로 다시 태어났다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hook",
			fr: "Crochet",
			es: "Garfio",
			it: "Uncino",
			de: "Haken",
			'pt-br': "Gancho",
			ko: "걸기"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card