import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 火焰鳥",
		ja: "ガラル ファイヤー"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "釋放著像火焰般燃起的邪惡氣場。這樣的外觀讓牠得到了火焰鳥之名。",
		ja: "邪悪な オーラを 炎のように 燃え上がらせる その 姿から ファイヤーと 名づけられた。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "邪惡充能",
			ja: "じゃあくチャージ"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張【惡】能量卡，附於這隻寶可夢身上。",
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札からエネルギーを2枚まで選び、このポケモンにつける。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "怒火中燒",
			ja: "もえあがるいかり"
		},

		effect: {
			'zh-tw': "增加對手已經獲得的獎賞卡的張數×50點傷害。",
			ja: "相手がすでにとったサイドの枚数×50ダメージ追加。"
		},

		damage: "20＋",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	dexId: [146],

	thirdParty: {
		cardmarket: 687498
	}
}

export default card