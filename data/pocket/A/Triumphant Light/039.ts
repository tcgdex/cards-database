import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		it: "Larvitar",
		de: "Larvitar",
		'pt-br': "Larvitar",
		ko: "애버라스"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [246],
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "Born deep underground, this Pokémon becomes a pupa after eating enough dirt to make a mountain.",
		fr: "Il naît dans les profondeurs terrestres. Après\navoir englouti une quantité de terre équivalente\nà une montagne, il se transforme en chrysalide.",
		es: "Nacido en las profundidades subterráneas,\neste Pokémon se convierte en pupa al comer\nla cantidad de tierra equivalente a una montaña.",
		it: "Nasce nel profondo sottosuolo e dopo\naver mangiato una montagna di terra\nsi trasforma in una crisalide.",
		de: "Es wird tief im Erdreich geboren. Hat es einen Berg\nErde gefressen, verpuppt sich dieses Pokémon.",
		'pt-br': "Este Pokémon nasce no subsolo e se torna uma pupa\napós comer terra o suficiente para fazer uma montanha.",
		ko: "땅속 깊은 곳에서 태어나\n산을 이룰 정도의 흙을 먹고 나면\n몸을 만들기 위해 번데기가 된다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			de: "Korkenzieherhieb",
			'pt-br': "Soco Saca-rolha",
			ko: "쥐어박기"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
