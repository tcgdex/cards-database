import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ウネルミナモex",
		ko: "굽이치는물결 ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こんぺきはとう",
			ko: "감벽 파도"
		},

		effect: {
			ja: "このポケモンが使うワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			ko: "이 포켓몬이 사용하는 기술의 데미지는 상대의 배틀 포켓몬에게 걸려 있는 효과를 계산하지 않는다."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "カタルシスロアー",
			ko: "카타르시스 로어"
		},

		damage: "120＋",

		effect: {
			ja: "相手のバトルポケモンが特殊状態なら、120ダメージ追加。",
			ko: "상대의 배틀 포켓몬이 특수 상태라면 120데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card