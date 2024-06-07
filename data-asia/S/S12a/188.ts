import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 閃電鳥",
		ja: "ガラル サンダー"
	},

	illustrator: "Rianti Hidayat",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "擁有能夠一腳踢毀砂石車的強勁腳力。據說能以時速３００公里在山中奔跑。",
		ja: "ひと蹴りで ダンプカーを 粉々に する 脚力を もつ。 時速 ３００キロで 山を 駆けるという。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "健腳充能",
			ja: "けんきゃくチャージ"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張【鬥】能量卡，附於這隻寶可夢身上。",
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札からエネルギーを2枚まで選び、このポケモンにつける。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "閃踢",
			ja: "ザッパーキック"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢身上附加的能量全部丟棄。這個情況下，將對手的戰鬥寶可夢【麻痺】。",
			ja: "のぞむなら、このポケモンについているエネルギーを、すべてトラッシュする。その場合、相手のバトルポケモンをマヒにする。"
		},

		damage: 70,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E",
	dexId: [145]
}

export default card