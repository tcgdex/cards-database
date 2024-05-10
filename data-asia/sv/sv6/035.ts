import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "イルカマン",
		'zh-tw': "海豚俠"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Ligton",
	dexId: [964],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "身体能力は ナミイルカと 変わらないが 仲間の ピンチには 変身して パワーアップするぞ。",
		'zh-tw': "體能與波普海豚不相上下， 但一旦夥伴陷入了危機， 就會變身來提高自己的力量。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マイティチェンジ",
			'zh-tw': "全能變身"
		},

		effect: {
			ja: "自分の番に、このポケモンがバトル場からベンチにもどったとき、1回使える。自分の山札から「イルカマンex」を1枚選び、このカードと入れ替える（ついているカード・ダメカン・特殊状態・効果などは、すべて引きつぐ）。入れ替えたなら、このカードは山札にもどす。そして山札を切る。",
			'zh-tw': "在自己的回合，這隻寶可夢從戰鬥場回到備戰區時，可使用1次。從自己的牌庫選擇1張「海豚俠【ex】」，與這張卡互換（所附加的卡・傷害指示物・特殊狀態・效果等全部保留）。若互換了，則這張卡放回牌庫。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "スプラッシュ",
			'zh-tw': "飛濺"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
