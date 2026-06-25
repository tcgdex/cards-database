import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "トドロクツキex",
		ko: "고동치는달 ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "くるいえぐる",
			ko: "사납게 도려내기"
		},

		effect: {
			ja: "相手のバトルポケモンをきぜつさせる。その後、このポケモンに200ダメージ。",
			ko: "상대의 배틀 포켓몬을 기절시킨다. 그 뒤, 이 포켓몬에게 200데미지를 준다."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "カラミティストーム",
			ko: "컬래머티스톰"
		},

		damage: "100＋",

		effect: {
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。その場合、120ダメージ追加。",
			ko: "원한다면 필드에 나와 있는 스타디움을 트래쉬한다. 그 경우, 120데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card