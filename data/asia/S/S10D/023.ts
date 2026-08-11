import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 火爆獸"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		'zh-tw': "據考察，牠是受到聳立於洗翠中心的靈山所發之氣的影響，才形成了現在的模樣。據說會用 自己的火焰淨化並超渡無處可去的靈魂。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "靈異彈"
		},

		effect: {
			'zh-tw': "在自己的回合，若從自己的手牌將1張【超】能量卡丟棄，則可使用1次。將對手的戰鬥寶可夢【灼傷】與【混亂】。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "影子束縛"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 90,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card