import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Pupitar",
		fr: "Ymphect",
		es: "Pupitar",
		it: "Pupitar",
		de: "Pupitar",
		'pt-br': "Pupitar",
		ko: "데기라스"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		en: "Larvitar"
	},

	description: {
		en: "Its shell is as hard as bedrock, and it is also very strong. Its thrashing can topple a mountain.",
		fr: "Il est très fort, et sa carapace est aussi\ndure que la pierre. Lorsqu'il est furieux,\nses coups peuvent raser une montagne.",
		es: "Su caparazón es duro como una piedra y muy\nresistente. Sus golpes pueden derribar montañas.",
		it: "Il suo corpo è ricoperto da un guscio duro come\nla roccia ed è molto forte. Quando si infuria, è\ncapace di abbattere persino una montagna.",
		de: "Es ist sehr stark und hat einen steinharten Panzer.\nGerät es außer Kontrolle, kann es Berge dem\nErdboden gleichmachen.",
		'pt-br': "Seu casco é duro como rocha e muito forte.\nSuas pancadas podem derrubar uma montanha.",
		ko: "암반 같은 단단한 껍질로\n둘러싸여 있지만 힘이 강해서\n난동을 부리면 산도 무너져 버린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Speed Attack",
			fr: "Attaque Rapide",
			es: "Ataque Fugaz",
			it: "Attacco Veloce",
			de: "Tempoangriff",
			'pt-br': "Ataque em Velocidade",
			ko: "스피드어택"
		},

		damage: 50,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
