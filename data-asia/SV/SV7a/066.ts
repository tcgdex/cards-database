import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "マシェード"
	},

	illustrator: "matazo",
	category: "Pokemon",
	dexId: [756],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "点滅する 胞子の 光りで 獲物を おびき寄せて 眠らせる。 指先から 生気を 吸い取る。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "やすらぐひかり"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをねむりにする。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "スパイラルラッシュ"
		},

		damage: "60＋",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	rarity: "None"
}

export default card