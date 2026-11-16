import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ドレディアVSTAR",
		'zh-tw': "洗翠 裙兒小姐VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Triple Rare",
	category: "Pokemon",
	dexId: [549],
	hp: 260,
	types: ["Grass"],

	evolveFrom: {
		ja: "ヒスイ ドレディアV"
	},

	stage: "VSTAR",

	abilities: [{
		type: "Ability",

		name: {
			ja: "スターパフューム",
			'zh-tw': "星星芬香"
		},

		effect: {
			ja: "自分の番に使える。自分の山札から{G}ポケモンと{G}エネルギーを合計5枚まで選び、相手に見せて、手札に加える。そして山札を切る。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			'zh-tw': "在自己的回合時可使用。從自己的牌庫選擇【草】寶可夢卡與【草】能量卡合計最多5張，在給對手看過後加入手牌。並且重洗牌庫。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			ja: "キャメルスピン",
			'zh-tw': "燕式旋轉"
		},

		effect: {
			ja: "のぞむなら、このポケモンについているエネルギーを1個選び、手札にもどす。その場合、100ダメージ追加。",
			'zh-tw': "若希望，選擇1個這隻寶可夢身上附加的能量，放回手牌。這個情況下，增加100點傷害。"
		},

		damage: "130+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 650968,
				tcgplayer: 569763,
				cardtrader: 234074,
			},
		},
	]
}

export default card