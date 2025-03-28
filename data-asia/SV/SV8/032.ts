import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "パオジアン",
		'zh-tw': "古劍豹",
		'zh-cn': "古劍豹"
	},

	illustrator: "Yuya Oka",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1002],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "大昔に 剣によって 露と消えた 者たちの 憎しみが 雪を まとい ポケモンになった。",
		'zh-tw': "遙遠過去喪命於劍下者 的憎恨之情纏繞在雪上， 變成了寶可夢。",
		'zh-cn': "遙遠過去喪命於劍下者 的憎恨之情纏繞在雪上， 變成了寶可夢。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ゆきにしずめる",
			'zh-tw': "‌‌沉雪",
			'zh-cn': "‌‌沉雪"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。場に出ているスタジアムをトラッシュする。",
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。將場上的競技場卡丟棄。",
			'zh-cn': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。將場上的競技場卡丟棄。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "アイシクルループ",
			'zh-tw': "冰柱閉環",
			'zh-cn': "冰柱閉環"
		},

		damage: 120,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、手札にもどす。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，放回手牌。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，放回手牌。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card