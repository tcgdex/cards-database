import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン みどりのめんex",
		'zh-tw': "厄鬼椪 碧草面具ex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "5ban Graphics",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みどりのまい",
			'zh-tw': "碧綠之舞"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「基本エネルギー」を1枚選び、このポケモンにつける。その後、自分の山札を1枚引く。",
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【草】能量」卡，附於這隻寶可夢身上。然後，從自己的牌庫抽出1張卡。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Grass"],

		name: {
			ja: "まんようしぐれ",
			'zh-tw': "萬葉陣雨"
		},

		damage: "30+",

		effect: {
			ja: "おたがいのバトルポケモンについているエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加雙方的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
