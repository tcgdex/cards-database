import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "キバニア",
		'zh-tw': "利牙魚",
		th: "คิบาเนีย",
		ko: "샤프니아",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "獲物を 見つけても １匹のときは 襲わない。 仲間が 来るのを 待って 集団で 襲いかかる。",
		'zh-tw': "只有１隻時即使發現了獵物也不會發動攻擊。會等到 夥伴來之後，再結隊襲擊。",
		th: "เวลาอยู่ตัวเดียว ถึงแม้จะพบเหยื่อก็จะไม่เข้าจู่โจม แต่จะรอพวกพ้องมาก่อนแล้วจึงรุมเข้าจู่โจม",
		ko: "먹이를 발견해도 혼자일 때는 공격하지 않는다. 동료가 오는 것을 기다린 다음 집단으로 공격한다.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "スプラッシュ",
				'zh-tw': "飛濺",
				th: "สแปลช",
				ko: "스플래시",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752771,
				tcgplayer: 568350,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [318],
};

export default card;
