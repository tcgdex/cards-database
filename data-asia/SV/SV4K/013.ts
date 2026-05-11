import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "カルボウ",
		'zh-tw': "炭小侍",
		th: "คาร์โบ",
		ko: "카르본"
	},

	illustrator: "kantaro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [935],
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
		'zh-tw': "生命寄宿在燃燒的木炭上變成了寶可夢。即使敵人再強， 也會以燃燒的鬥志迎面而戰。",
		th: "เป็นโปเกมอนที่เกิดจากถ่านไม้ที่ลุกไหม้ มีจิตวิญญาณการต่อสู้ที่เร่าร้อน กล้าเผชิญหน้าแม้กับศัตรูที่แข็งแกร่ง",
		ko: "불탄 숯에 영혼이 깃들어서 포켓몬이 되었다. 타오르는 투지로 강한 상대에게도 싸움을 건다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "まもる",
			'zh-tw': "守住",
			th: "ป้องกันตัว",
			ko: "방어"
		},

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "マグマパンチ",
			'zh-tw': "熔岩拳",
			th: "แม็กมาพันช์",
			ko: "마그마펀치"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card