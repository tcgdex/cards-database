import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "コジオ",
		'zh-tw': "鹽石寶",
		th: "โคจีโอ",
		ko: "베베솔트"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [932],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "地底の 岩塩層で 生まれた。 貴重な 塩を 分けてくれるため 昔は とくに 大事にされた。",
		'zh-tw': "出生在地底的岩鹽層。會願意分享貴重的鹽巴， 因此在過去更是受到重視。",
		th: "เกิดในชั้นหินเกลือใต้ดิน ในสมัยก่อนมีผู้ให้ความสำคัญกับมันเป็นอย่างมากเพราะมันแบ่งปันเกลือที่แสนล้ำค่าให้",
		ko: "땅속의 암염층에서 태어났다. 귀한 소금을 나눠 주기 때문에 옛날에는 특히 더 귀하게 여겨졌다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "おいつめる",
			'zh-tw': "窮追不捨",
			th: "ไล่ต้อน",
			ko: "몰아붙이기"
		},

		damage: 10,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			ko: "상대의 다음 차례에 이 기술을 받은 포켓몬은 후퇴할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card