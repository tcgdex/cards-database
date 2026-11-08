import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゴース",
		'zh-tw': "鬼斯",
		'th-th': "โกส",
		'ko-kr': "고오스",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "ガス状の 体で まとわりつき 獲物の 皮膚から 少しずつ 毒を 送り込んで 弱らせる。",
		'zh-tw': "會用氣體狀的身體纏住獵物，再從皮膚緩緩地注入毒素， 使對手變得虛弱。",
		'th-th': "ใช้ร่างกายที่เป็นแก๊สเกาะติดเหยื่อแล้วค่อย ๆ ส่งพิษผ่านเข้าผิวหนังไปทีละนิดจนเหยื่ออ่อนแอลง",
		'ko-kr': "가스로 된 몸으로 휘감은 다음 먹이의 피부를 통해 조금씩 독을 흘려보내어 약하게 만든다.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ふしぎなビーム",
				'zh-tw': "神秘光束",
				'th-th': "ลำแสงพิศวง",
				'ko-kr': "이상한빔",
			},
			cost: ["Darkness"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
				'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
				'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬에게 붙어 있는 에너지를 1개 선택해서 트래쉬한다.",
			},
		},
		{
			name: {
				'ja-jp': "ガスでつつむ",
				'zh-tw': "瓦斯包圍",
				'th-th': "ห่อหุ้มด้วยแก๊ส",
				'ko-kr': "가스로감싸기",
			},
			damage: 30,
			cost: ["Darkness", "Darkness"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752861,
				tcgplayer: 568414,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [92],
};

export default card;
