import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "アマカジ",
		'zh-tw': "甜竹竹",
		th: "อมาคาจิ",
		ko: "달콤아"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [761],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "果物を 煮詰めたような 甘い 汗を かくため 甘味の 少ない 昔は とても 重宝された。",
		'zh-tw': "汗水帶著像是經過熬煮的水果甜味，在過去甜食尚少 的時代相當受到人們珍視。",
		th: "เพราะเหงื่อหวานราวกับน้ำผลไม้ที่เคี่ยว เลยมีค่ามากในอดีตที่ขนมยังมีน้อย",
		ko: "과일을 졸인 것만 같은 달콤한 땀을 흘리기 때문에, 달콤한 음식이 적었던 옛날에는 매우 귀하게 여겨졌다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "クイックアタック",
			'zh-tw': "快速攻擊",
			th: "ควิกแอทแทก",
			ko: "퀵어택"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			ko: "동전을 1번 던져서 앞면이 나오면 20데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741215
	}
}

export default card