import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "シャリタツ",
		'zh-tw': "米立龍"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Jerky",
	dexId: [978],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "非常に 悪賢い ポケモン。 弱ったふりで 獲物を おびき寄せ 仲間の ポケモンに 襲わせる。",
		'zh-tw': "極為奸詐狡猾的寶可夢。 會假裝虛弱來吸引獵物接近， 接著讓同夥的寶可夢發動攻擊。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きゃくよせ",
			'zh-tw': "集客"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を上から6枚見て、その中からサポートを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看自己的牌庫上方6張卡，從其中選擇1張支援者卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Water"],

		name: {
			ja: "なみのり",
			'zh-tw': "衝浪"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card