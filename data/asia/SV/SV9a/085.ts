import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "メガヤンマex",
		'zh-tw': "遠古巨蜓ex",
		'zh-cn': "遠古巨蜓ex"
	},

	illustrator: "Tonji Matsuno",
	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "バズブースト",
			'zh-tw': "振翅高飛",
			'zh-cn': "振翅高飛"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の山札から「基本エネルギー」を3枚まで選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "在自己的回合，從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。從自己的牌庫選擇最多3張「基本【草】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。",
			'zh-cn': "在自己的回合，從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。從自己的牌庫選擇最多3張「基本【草】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			ja: "ジェットサイクロン",
			'zh-tw': "噴射旋風",
			'zh-cn': "噴射旋風"
		},

		damage: 210,

		effect: {
			ja: "このポケモンについているエネルギーを3個選び、ベンチポケモン1匹につけ替える。",
			'zh-tw': "選擇3個這隻寶可夢身上附加的能量，改附於1隻備戰寶可夢身上。",
			'zh-cn': "選擇3個這隻寶可夢身上附加的能量，改附於1隻備戰寶可夢身上。"
		}
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
	regulationMark: "I"
}

export default card