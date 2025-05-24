import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>超音蝠",
		'zh-cn': "<火箭隊的>超音蝠",
		ja: "ロケット団のズバット"
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		'zh-tw': "棲息在陽光照射不到的洞窟裡。 到了早上就會和夥伴相聚， 一邊互相取暖一邊睡覺。",
		'zh-cn': "棲息在陽光照射不到的洞窟裡。 到了早上就會和夥伴相聚， 一邊互相取暖一邊睡覺。",
		ja: "陽の 当たらない 洞窟に 棲む。 朝になると 仲間で 集まり 体を 温めあいながら 寝る。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "噴毒",
			'zh-cn': "噴毒",
			ja: "どくをとばす"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】。",
			ja: "相手のバトルポケモンをどくにする。"
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [41]
}

export default card