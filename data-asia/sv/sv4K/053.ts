import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "アラブルタケ",
		'zh-tw': "猛惡菇"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [986],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "ある本の中で アラブルタケと 記されていた 生物は このポケモンの 可能性がある。",
		'zh-tw': "某本書裡記載的一種叫做猛惡菇的生物， 有可能就是這隻寶可夢。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "もうどくふんじん",
			'zh-tw': "劇毒粉塵"
		},

		effect: {
			ja: "このポケモンに「ブーストエナジー 古代」がついているなら、自分の番に1回使える。おたがいのバトルポケモンを、それぞれどくにする。",
			'zh-tw': "若這隻寶可夢身上附有「驅勁能量 古代」，則在自己的回合時可使用1次。將雙方的戰鬥寶可夢【中毒】。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "あばれハンマー",
			'zh-tw': "暴亂之錘"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card