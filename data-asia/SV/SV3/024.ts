import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ガマガル",
		'zh-tw': "藍蟾蜍",
		th: "กามาการุ"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [536],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "きれいな 声で 鳴くこともある。 体の 突起が 大きいほど 広い 音域で 鳴けるのだ。",
		'zh-tw': "有時也會發出悅耳的叫聲。身上突起物越大的藍蟾蜍越能以更廣的音域來鳴叫。",
		th: "มีบางครั้งที่ร้องด้วยเสียงอันไพเราะ ปุ่มที่นูนออกตามตัวยิ่งใหญ่มากยิ่งส่งเสียงที่มีช่วงสูงต่ำได้กว้างมากขึ้น"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "みずかけ",
			'zh-tw': "潑水",
			th: "สาดน้ำ"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 723954
	}
}

export default card