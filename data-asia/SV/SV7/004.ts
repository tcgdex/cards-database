import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "搖籃百合",
		'zh-cn': "搖籃百合",
		ja: "ユレイドル"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'zh-tw': "雖然腳短且走得慢，但 脖子和觸手能伸長３倍 去捕捉在遠處的獵物。",
		'zh-cn': "雖然腳短且走得慢，但 脖子和觸手能伸長３倍 去捕捉在遠處的獵物。",
		ja: "脚が 短く 歩みは 遅いが 首と 触手が ３倍 伸びて 遠くにいる 獲物を 捕まえる。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "瘴氣之風",
			'zh-cn': "瘴氣之風",
			ja: 'しょうきのかぜ'
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢處於特殊狀態的數量×100點傷害。",
			'zh-cn': "造成對手的戰鬥寶可夢處於特殊狀態的數量×100點傷害。",
			ja: '相手のバトルポケモンが受けている特殊状態の数×100ダメージ。'
		},

		damage: "100×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [346],

	abilities: [{
		type: "Ability",

		name: {
			ja: "よりどりねんえき",
			'zh-tw': "‌[特性]任選黏液",
			'zh-cn': "‌[特性]任選黏液",
		},

		effect: {
			ja: "自分の番に1回使える。コインを1回投げオモテなら、どく・やけど・こんらんの中から1つ選び、相手のバトルポケモンをその状態にする。",
				'zh-tw': "在自己的回合時可使用1次。擲1次硬幣若為正面，則從【中毒】・【灼傷】・【混亂】中選擇1種，將對手的戰鬥寶可夢處於那個狀態。",
				'zh-cn': "在自己的回合時可使用1次。擲1次硬幣若為正面，則從【中毒】・【灼傷】・【混亂】中選擇1種，將對手的戰鬥寶可夢處於那個狀態。"
		}
	}],

	thirdParty: {
		cardmarket: 778997
	}
}

export default card
