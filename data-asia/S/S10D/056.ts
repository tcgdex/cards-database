import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ウォーグル",
		'zh-tw': "洗翠 勇士雄鷹"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [628],
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		ja: "ワシボン"
	},

	description: {
		ja: "鬼気迫る 鬨の声を 上げ 狩りをする 猛き 大鳥。 湖水に 衝撃波を 放ち 水面に 浮かびし 獲物を 捕る。",
		'zh-tw': "勇猛的大鳥。狩獵時會發出氣勢駭人的戰吼，朝湖水發出 衝擊波，捕捉浮出水面的獵物。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "サイコウェーブ",
			'zh-tw': "精神波"
		},

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ。",
			'zh-tw': "造成對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		},

		damage: "30×",
		cost: []
	}, {
		name: {
			ja: "スラッシュダウン",
			'zh-tw': "猛擊在地"
		},

		effect: {
			ja: "次の自分の番、このポケモンは「スラッシュダウン」が使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「猛擊在地」。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
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
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651024,
				tcgplayer: 569811,
				cardtrader: 234192,
			},
		},
	]
}

export default card