import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マシェード"
	},

	illustrator: "matazo",
	category: "Pokemon",
	dexId: [756],
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "点滅する 胞子の 光りで 獲物を おびき寄せて 眠らせる。 指先から 生気を 吸い取る。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "やすらぐひかり"
		},

		effect: {
			'ja-jp': "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをねむりにする。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "スパイラルラッシュ"
		},

		damage: "60＋",

		effect: {
			'ja-jp': "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788039,
				tcgplayer: 579448,
			},
		},
	],

	retreat: 2,
	rarity: "None",
}

export default card