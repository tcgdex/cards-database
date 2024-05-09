import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "イーユイ"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1004],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "３０００度の 炎を 操る。 岩や 砂利を 溶かして 作った マグマの海を ゆうゆうと 泳ぐ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "フレアブリング"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。"
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "ねたみのごうか"
		},

		damage: "50＋",

		effect: {
			ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card