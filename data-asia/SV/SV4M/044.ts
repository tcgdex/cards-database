import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ニダンギル",
		'zh-tw': "雙劍鞘",
		th: "นิดังกิล",
		ko: "쌍검킬"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [680],
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "２本の 剣は 攻撃と 防御が 目まぐるしく 入れ替わる 戦法で 獲物を しとめる。",
		'zh-tw': "２把劍會用令人眼花繚亂的速度不斷交替攻擊和防禦，藉以制服獵物。",
		th: "ดาบทั้งสองเล่มปราบเหยื่อลงได้ด้วยกลยุทธ์ในการต่อสู้แบบเปลี่ยนกันรุกและรับอย่างรวดเร็ว",
		ko: "2자루의 검이 공격과 방어를 어지러울 정도로 빠르게 바꾸는 전법으로 먹이의 숨통을 끊는다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "つるぎのまい",
			'zh-tw': "劍舞",
			th: "ระบำดาบ",
			ko: "칼춤"
		},

		effect: {
			ja: "次の自分の番、このポケモンの「スライスブレード」のダメージは「+80」される。",
			'zh-tw': "在下個自己的回合，這隻寶可夢「利刃切割」的傷害「+80」點。",
			th: "เทิร์นถัดไปของฝ่ายเรา แดเมจจาก [สไลซ์เบลด] ของโปเกมอนนี้จะถูก [+80]",
			ko: "자신의 다음 차례에 이 포켓몬의 「슬라이스 블레이드」의 데미지는 「+80」이 된다."
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			ja: "スライスブレード",
			'zh-tw': "利刃切割",
			th: "สไลซ์เบลด",
			ko: "슬라이스 블레이드"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741871
	}
}

export default card