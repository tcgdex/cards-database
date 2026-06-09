import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バオッキー",
		'zh-tw': "爆香猿",
		th: "บาอกกี",
		ko: "바오키"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [514],
	hp: 100,
	types: ["Fire"],

	description: {
		ja: "興奮すると 頭や 尻尾から 火の粉が 舞いあがって 熱くなる。 なぜか 甘いものが 大好物。",
		'zh-tw': "興奮的時候，頭部與尾巴就會變熱並飛出火花。不知為何最喜歡吃甜的。",
		th: "เมื่อตื่นตัว ผงไฟจากหัวและหางจะฟุ้งออกมาจนร้อนขึ้น แต่ไม่รู้ว่าทำไมของโปรดถึงเป็นของหวาน",
		ko: "흥분하면 머리나 꼬리에서 불티가 날아올라 뜨거워진다. 왜인지 달콤한 것을 매우 좋아한다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "モンキートリオ",
			'zh-tw': "三猴行",
			th: "มังกีทริโอ",
			ko: "멍키 트리오"
		},

		effect: {
			ja: "自分の場に「ヤナッキー」「バオッキー」「ヒヤッキー」がいるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。",
			'zh-tw': "若自己的場上有「花椰猿」「爆香猿」「冷水猿」，則這隻寶可夢使用招式所需的【無】能量全部消除。",
			th: "ถ้าบนกระดานฝ่ายเรามี [ยานักกี] [บาอกกี] [ฮิยักกี] อยู่ พลังงาน[ไร้สี]สำหรับใช้ท่าต่อสู้ของโปเกมอนนี้ ทั้งหมดจะหายไป",
			ko: "자신의 필드에 「야나키」「바오키」「앗차키」가 있다면 이 포켓몬이 기술을 사용하기 위한 (무색) 에너지는 모두 없어진다."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヒートタックル",
			'zh-tw': "熱力衝撞",
			th: "ฮีทแท็กเกิล",
			ko: "히트태클"
		},

		damage: 190,

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			ko: "이 포켓몬에게도 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741838
	}
}

export default card