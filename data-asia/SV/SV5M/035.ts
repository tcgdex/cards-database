import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノブジン",
		'zh-tw': "鐵武者",
		th: "นักรบเหล็ก",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "とある 探検記の中で テツノブジンという 名で 記された 物体の 可能性が ある。",
		'zh-tw': "牠有可能就是在某本探險記裡，以鐵武者這個 名字被記載下來的物體。",
		th: "มีโอกาสที่จะเป็นวัตถุที่เรียกว่านักรบเหล็กซึ่งระบุไว้ในบันทึกการสำรวจเล่มหนึ่ง",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "えんざん",
				'zh-tw': "演算",
				th: "คำนวณสูตร",
			},
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札を上から4枚見て、好きな順番に入れ替えて、山札の上にもどす。",
				'zh-tw': "查看自己的牌庫上方4張卡，以任意順序排列，放回牌庫上方。",
				th: "ดูการ์ด 4 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เรียงตามลำดับที่ชอบ ใส่กลับไปด้านบนของสำรับการ์ด",
			},
		},
		{
			name: {
				ja: "マジェスティソード",
				'zh-tw': "莊嚴之劍",
				th: "ดาบทรงอำนาจ",
			},
			damage: "100+",
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "この番、手札から「未来」のサポートを出して使っていたなら、100ダメージ追加。",
				'zh-tw': "在這個回合，若從手牌使出了「未來」支援者卡，則增加100點傷害。",
				th: "เทิร์นนี้ ถ้านำการ์ดซัพพอร์ต [อนาคต] จากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752916,
				tcgplayer: 566186,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [1006],
};

export default card;
