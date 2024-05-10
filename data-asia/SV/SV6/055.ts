import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "マシマシラ",
		'zh-tw': "願增猿"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "kodama",
	dexId: [1015],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "安全な 場所から 強烈な めまいを 引き起こす 念力を 放って 敵を 翻弄する。",
		'zh-tw': "會從安全的地方釋放出 能引起強烈頭暈的念力， 把敵手戲弄得團團轉。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アドレナブレイン",
			'zh-tw': "腎上腺腦力"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、自分の番に1回使える。自分の場のポケモン1匹にのっているダメカンを3個まで選び、相手の場のポケモン1匹にのせ替える。",
			'zh-tw': "若這隻寶可夢身上附有【惡】能量卡，則在自己的回合時可使用1次。選擇最多3個自己的1隻場上寶可夢身上放置的傷害指示物，改放於對手的1隻場上寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "サイコトリップ",
			'zh-tw': "精神歪曲"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card