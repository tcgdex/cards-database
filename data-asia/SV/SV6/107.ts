import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "願增猿"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "會從安全的地方釋放出 能引起強烈頭暈的念力， 把敵手戲弄得團團轉。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "腎上腺腦力"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【惡】能量卡，則在自己的回合時可使用1次。選擇最多3個自己的1隻場上寶可夢身上放置的傷害指示物，改放於對手的1隻場上寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神歪曲"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
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