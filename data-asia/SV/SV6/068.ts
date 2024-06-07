import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "フシデ",
		'zh-tw': "百足蜈蚣"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Tomokazu Komiya",
	dexId: [543],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "ヤクデは 種類の 近い 仲間だが おたがいが 出会うと 大げんかに なるぞ。",
		'zh-tw': "雖然和燒火蚣屬於種類 相近的夥伴，但是彼此 撞見時就會大打一架喔。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "どくえき",
			'zh-tw': "毒液"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "かいてんアタック",
			'zh-tw': "迴轉攻擊"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card