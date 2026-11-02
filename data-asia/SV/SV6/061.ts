import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ローブシン",
		'zh-tw': "修建老匠",
		th: "โรบูชิน",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "力に 頼らず 遠心力を うまく 活かして コンクリートを 振り回す 技を 使いこなせる。",
		'zh-tw': "能夠不憑蠻力， 而是巧妙利用離心力 來揮舞水泥柱使出招式。",
		th: "ใช้ท่าต่อสู้เหวี่ยงคอนกรีตโดยอาศัยแรงหนีศูนย์กลางแทนการใช้พลังได้อย่างคล่องแคล่วและช่ำชอง",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "あばれまわる",
				'zh-tw': "暴走",
				th: "อาละวาดไปทั่ว",
			},
			damage: 80,
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンをこんらんにする。",
				'zh-tw': "將這隻寶可夢【混亂】。",
				th: "ทำให้โปเกมอนนี้เป็นสภาวะ[สับสน]",
			},
		},
		{
			name: {
				ja: "ガッツスイング",
				'zh-tw': "堅毅橫掃",
				th: "กวัดแกว่งกล้าหาญ",
			},
			damage: 250,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザは、このポケモンが特殊状態なら、このワザを使うためのエネルギーがこのポケモンについていなくても、使える。",
				'zh-tw': "若這隻寶可夢處於特殊狀態，則使用這個招式所需的能量就算沒有附於這隻寶可夢身上，這個招式也可使用。",
				th: "ท่าต่อสู้นี้ ถ้าโปเกมอนนี้เป็นสภาวะผิดปกติ แม้โปเกมอนนี้ไม่มีพลังงานสำหรับใช้ท่าต่อสู้นี้ติดอยู่ ก็ใช้ได้",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767154,
				tcgplayer: 568051,
			},
		},
	],

	evolveFrom: {
		ja: "ドテッコツ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [534],
};

export default card;
