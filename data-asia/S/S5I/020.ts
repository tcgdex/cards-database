import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "パルスワン",
		'zh-tw': "逐電犬",
		th: "พัลส์วัน",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "電気の 力で 脚力を 増強。 トップスピードは 時速 ９０キロを 軽く 超える。",
		'zh-tw': "電力增強了牠的腳力。當以最高速度奔跑時，時速可以輕易超過９０公里。",
		th: "เพิ่มกำลังขาให้แข็งแรงขึ้นด้วยพลังไฟฟ้า วิ่งเร็วสูงสุดเกิน 90 กิโลเมตรต่อชั่วโมงได้สบาย ๆ",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "おいつめる",
				'zh-tw': "窮追不捨",
				th: "ไล่ต้อน",
			},
			damage: 30,
			cost: ["Lightning"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
				th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะหนีไม่ได้",
			},
		},
		{
			name: {
				ja: "まけんきスパーク",
				'zh-tw': "不服輸電光",
				th: "สปาร์คไม่ยอมแพ้",
			},
			damage: 130,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このワザは、このポケモンにダメカンがのっているなら、[雷]エネルギー1個で使える。",
				'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則這個招式只需要1個【雷】能量即可使用。",
				th: "ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ สามารถใช้ท่าต่อสู้นี้ด้วยพลังงาน [สายฟ้า] 1 ลูกได้",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533322,
				tcgplayer: 568969,
			},
		},
	],

	evolveFrom: {
		ja: "ワンパチ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [836],
};

export default card;
