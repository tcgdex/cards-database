import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ズバット",
		'zh-tw': "超音蝠"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 40,
	types: ["Darkness"],

	description: {
		ja: "陽の 当たらない 洞窟に 棲む。 朝になると 仲間で 集まり 体を 温めあいながら 寝る。",
		'zh-tw': "棲息在陽光照射不到的洞窟裡。到了早上就會和夥伴相聚， 一邊互相取暖一邊睡覺。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "まるみえエコー",
			'zh-tw': "全景迴響"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手の手札を見る。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看對手的手牌。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card