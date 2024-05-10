import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "トサキント",
		'zh-tw': "角金魚"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "saino misaki",
	dexId: [118],
	hp: 50,
	types: ["Water"],

	description: {
		ja: "背びれ 胸びれ 尾びれが 優雅に たなびくので 水の踊り子 と呼ばれる。",
		'zh-tw': "會優雅地搖擺 背鰭、胸鰭和尾鰭， 所以被稱為水中的舞者。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おまつりおんど",
			'zh-tw': "祭典樂舞"
		},

		effect: {
			ja: "場に「お祭り会場」が出ているなら、このポケモンは、持っているワザを2回連続で使える。（1回目のワザで相手のバトルポケモンがきぜつしたなら、次のバトルポケモンが出たあと、2回目のワザを使う。）",
			'zh-tw': "若場上有「祭典會場」，則這隻寶可夢可使用持有的招式2次。（若對手的戰鬥寶可夢因第1次的招式而【昏厥】了，則在下一隻寶可夢放置後，使用第2次的招式。）"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うずしお",
			'zh-tw': "潮旋"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card