import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火炎獅",
		ja: "カエンジシ"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "能吐出攝氏６０００度的氣息， 但不會用在獵物身上， 因為牠比較喜歡吃生肉。",
		ja: "摂氏 ６０００度の 息を 吐くが 獲物には 使わない。 肉は 生のほうが 好み だから。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "灼熱氣場",
			ja: "しゃくねつオーラ"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手的戰鬥寶可夢因【灼傷】而放置的傷害指示物的數量改為4個。",
			ja: "このポケモンがいるかぎり、相手のバトルポケモンは、やけどでのせるダメカンの数が4個になる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "火焰牙",
			ja: "ほのおのキバ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【灼傷】。",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。"
		},

		damage: 90,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [668],

	thirdParty: {
		cardmarket: 609725
	}
}

export default card