import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドクケイル",
		th: "โดคุเคล",
		'zh-tw': "毒粉蛾",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "闇夜の かがり火に 誘われる 習性。 毒性の強き 鱗粉 ばら撒くゆえ 集落より 追い払うのに 難儀す。",
		th: "มีนิสัยชอบเข้าใกล้กองไฟในยามค่ำคืนอันมืดมิด โปรยเกล็ดปีกที่มีพิษรุนแรง จนต้องลำบากในการไล่มันออกไปจากหมู่บ้าน",
		'zh-tw': "有著被黑暗中的篝火吸引的習性。會散布毒性猛烈的鱗粉，令人們 為了將牠們驅離村落而煞費苦心。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "どんぞこパウダー",
				th: "ผงย่ำแย่",
				'zh-tw': "谷底粉",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくとこんらんにする。このどくでのせるダメカンの数は8個になる。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]และ[สับสน] ด้วย[พิษ]นี้ จำนวนตัวนับแดเมจที่วางจะเป็น 8 ตัว",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】與【混亂】。因這個【中毒】而放置的傷害指示物的數量改為8個。",
			},
		},
		{
			name: {
				ja: "カッターウインド",
				th: "คัตเตอร์วินด์",
				'zh-tw': "利刃之風",
			},
			damage: 110,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656229,
				tcgplayer: 570671,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577095,
			},
		},
	],

	evolveFrom: {
		ja: "マユルド",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [269],
};

export default card;
