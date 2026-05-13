import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "パッチール",
		'zh-tw': "晃晃斑",
		th: "พัทชีล",
		ko: "얼루기"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [327],
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "１匹ずつ ブチ模様は 異なる。 フラフラした 動きで 相手の 攻撃を 絶妙に かわすぞ。",
		'zh-tw': "每一隻身上的斑點都不一樣。會用搖搖晃晃的動作 巧妙地避開對手的攻擊。",
		th: "ลวดลายแต่ละตัวจะต่างกันออกไป จะหลบการโจมตีของคู่ต่อสู้ได้อย่างน่าประหลาดใจด้วยการส่ายตัว",
		ko: "개체마다 얼룩무늬가 다르다. 비틀거리는 움직임으로 상대의 공격을 절묘하게 피한다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ちどりあし",
			'zh-tw': "蹣跚",
			th: "เดินโซเซ",
			ko: "갈지자걸음"
		},

		effect: {
			ja: "このポケモンがこんらんなら、このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。",
			'zh-tw': "若這隻寶可夢【混亂】，則這隻寶可夢受到招式的傷害時，自己擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。",
			th: "ถ้าโปเกมอนนี้เป็นสภาวะ[สับสน] เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว โปเกมอนนี้จะไม่ได้รับแดเมจนั้น",
			ko: "이 포켓몬이 혼란이라면 이 포켓몬이 기술의 데미지를 받을 때 자신은 동전을 1번 던진다. 앞면이 나오면 이 포켓몬은 그 데미지를 받지 않는다."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "フラフラステップ",
			'zh-tw': "搖晃舞步",
			th: "สเต็ปโซเซ",
			ko: "흔들흔들스텝"
		},

		damage: 100,

		effect: {
			ja: "このポケモンをこんらんにする。",
			'zh-tw': "將這隻寶可夢【混亂】。",
			th: "ทำให้โปเกมอนนี้เป็นสภาวะ[สับสน]",
			ko: "이 포켓몬을 혼란으로 만든다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741445
	}
}

export default card