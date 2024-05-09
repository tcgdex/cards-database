import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "オーガポン みどりのめんex"
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
			ja: "みどりのまい"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「基本エネルギー」を1枚選び、このポケモンにつける。その後、自分の山札を1枚引く。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Grass"],

		name: {
			ja: "まんようしぐれ"
		},

		damage: "30＋",

		effect: {
			ja: "おたがいのバトルポケモンについているエネルギーの数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card
