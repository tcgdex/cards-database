import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロスター"
	},
	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	description: {
		ja: "体内ガスの力でハサミのお尻から水を噴射して６０ノットのスピードで泳ぐ。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "ウデッポウ"
	},
	abilities: [{
		type: "Ability",
		name: {
			ja: "バックリロード"
		},
		effect: {
			ja: "自分の番に、このポケモンがバトル場からベンチに戻ったとき、1回使える。自分の手札から「基本水エネルギー」を2枚まで選び、このポケモンにつける。"
		}
	}],
	attacks: [{
		name: {
			ja: "アクアランチャー"
		},
		damage: 210,
		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。"
		},
		cost: ["Water", "Water", "Water"]
	}],
	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [693]
}

export default card
