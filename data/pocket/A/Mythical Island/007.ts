import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Morelull",
		fr: "Spododo",
		es: "Morelull",
		it: "Morelull",
		de: "Bubungus",
		'pt-br': "Morelull",
		ko: "자마슈"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",

	dexId: [755],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Pokémon living in the forest eat the delicious caps on Morelull's head. The caps regrow overnight.",
		fr: "Ses chapeaux sont délicieux, et les Pokémon\nde la forêt s'en délectent. Heureusement pour lui,\nses couvre-chefs repoussent en une nuit.",
		es: "Sus sombrerillos tienen un sabor delicioso.\nAunque los Pokémon del bosque se los\ncoman, les vuelven a crecer al día siguiente.",
		it: "I cappelli sul suo capo sono molto gustosi e i\nPokémon che vivono nei boschi se ne cibano.\nPer fortuna, ricrescono nel giro di una notte.",
		de: "Sein Pilzhut ist sehr schmackhaft. Er wird zwar\nhäufig von den Pokémon des Waldes verspeist,\nwächst aber über Nacht wieder nach.",
		'pt-br': "Os Pokémon que vivem nas florestas se alimentam dos chapéus na\ncabeça de Morelull. Os chapéus crescem novamente durante a noite.",
		ko: "머리의 갓은 매우 맛있다.\n숲속의 포켓몬들에게 먹히지만\n하룻밤 만에 재생한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			de: "Ramme",
			'pt-br': "Aríete",
			ko: "부딪치기"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
