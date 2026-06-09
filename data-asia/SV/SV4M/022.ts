import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "エレキッド",
		'zh-tw': "電擊怪",
		th: "เอเลคิด",
		ko: "에레키드"
	},

	illustrator: "aoki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [239],
	hp: 30,
	types: ["Lightning"],

	description: {
		ja: "まだ 電気を 溜めるのが 下手。 電気を 食べるために 民家に 忍びこみ コンセントを 探す。",
		'zh-tw': "還不擅長儲存電力。為了吸食電力，會偷偷潛入民宅尋找插座。",
		th: "ยังไม่ถนัดในการเก็บสะสมไฟฟ้า แอบลอบเข้าไปในบ้านคนและตามหาเต้าเสียบปลั๊กไฟเพื่อกินไฟฟ้า",
		ko: "아직 전기를 모으는 게 서툴다. 전기를 먹기 위해 민가에 숨어들어 콘센트를 찾는다."
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "バリバリショット",
			'zh-tw': "啪啪射擊",
			th: "ช็อตเปรี๊ยะ ๆ",
			ko: "팡팡샷"
		},

		effect: {
			ja: "相手のポケモン1匹に、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจ 30 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "상대의 포켓몬 1마리에게 30데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741849
	}
}

export default card