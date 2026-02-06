import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "キバニア",
		'zh-tw': "利牙魚",
		th: "คิบาเนีย"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [318],
	hp: 50,
	types: ["Water"],

	description: {
		ja: "獲物を 見つけても １匹のときは 襲わない。 仲間が 来るのを 待って 集団で 襲いかかる。",
		'zh-tw': "只有１隻時即使發現了獵物也不會發動攻擊。會等到 夥伴來之後，再結隊襲擊。",
		th: "เวลาอยู่ตัวเดียว ถึงแม้จะพบเหยื่อก็จะไม่เข้าจู่โจม แต่จะรอพวกพ้องมาก่อนแล้วจึงรุมเข้าจู่โจม"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スプラッシュ",
			'zh-tw': "飛濺",
			th: "สแปลช"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752771
	}
}

export default card