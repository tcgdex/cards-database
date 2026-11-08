import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ペラップ",
		'zh-tw': "聒噪鳥",
		'th-th': "เพแรป",
		'ko-kr': "페라페",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "相手と 同じ 鳴き声を 出す ことで 仲間と 思いこませて 襲われないように しているのだ。",
		'zh-tw': "會發出與對手相同的叫聲，讓對方相信自己是同伴， 藉此避免遭到襲擊。",
		'th-th': "จะส่งเสียงร้องเลียนแบบฝ่ายตรงข้าม ทำให้นึกว่าเป็นพวกเดียวกัน เพื่อไม่ให้ตัวเองถูกจู่โจม",
		'ko-kr': "상대와 같은 울음소리를 내서 동료라고 굳게 믿게 하여 습격당하지 않도록 하고 있다.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "アカペラ",
				'zh-tw': "無伴奏合唱",
				'th-th': "อะแคปเปลลา",
				'ko-kr': "아카펠라",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札からたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				'th-th': "เลือกการ์ดโปเกมอน[พื้นฐาน]ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
				'ko-kr': "자신의 덱에서 기본 포켓몬을 3장까지 선택해서 벤치로 내보낸다. 그리고 덱을 섞는다.",
			},
		},
		{
			name: {
				'ja-jp': "かぜおこし",
				'zh-tw': "起風",
				'th-th': "เรียกลม",
				'ko-kr': "바람일으키기",
			},
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752862,
				tcgplayer: 568415,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [441],
};

export default card;
