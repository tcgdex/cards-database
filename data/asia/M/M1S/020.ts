import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブロスター"
	},
	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	description: {
		'ja-jp': "体内ガスの力でハサミのお尻から水を噴射して６０ノットのスピードで泳ぐ。"
	},
	stage: "Stage1",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840571,
				tcgplayer: 647273,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ウデッポウ"
	},
	abilities: [{
		type: "Ability",
		name: {
			'ja-jp': "バックリロード"
		},
		effect: {
			'ja-jp': "自分の番に、このポケモンがバトル場からベンチに戻ったとき、1回使える。自分の手札から「基本水エネルギー」を2枚まで選び、このポケモンにつける。"
		}
	}],
	attacks: [{
		name: {
			'ja-jp': "アクアランチャー"
		},
		damage: 210,
		effect: {
			'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。"
		},
		cost: ["Water", "Water", "Water"]
	}],
	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [693]
}

export default card
