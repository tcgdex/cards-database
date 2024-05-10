import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "フォレトスex",
		'zh-tw': "佛烈托斯ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ばくれつエナジー",
			'zh-tw': "爆裂能量"
		},

		effect: {
			ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。自分の山札から「基本エネルギー」を5枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			'zh-tw': "在自己的回合時可使用1次，若使用，則將這隻寶可夢【昏厥】。從自己的牌庫選擇最多5張「基本【草】能量」卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "ガードプレス",
			'zh-tw': "防守壓制"
		},

		damage: 120,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card