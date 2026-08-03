import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "ニダンギル",
		'zh-tw': "雙劍鞘",
		th: "นิดังกิล",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "２本の 剣は 攻撃と 防御が 目まぐるしく 入れ替わる 戦法で 獲物を しとめる。",
		'zh-tw': "２把劍會用令人眼花繚亂的速度不斷交替攻擊和防禦，藉以制服獵物。",
		th: "ดาบทั้งสองเล่มปราบเหยื่อลงได้ด้วยกลยุทธ์ในการต่อสู้แบบเปลี่ยนกันรุกและรับอย่างรวดเร็ว",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "きりおとす",
				'zh-tw': "切落",
				th: "ฟันขาด",
			},
			damage: 40,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
				th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว ทิ้งพลังงานที่ติดกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูกที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533482,
				tcgplayer: 569001,
			},
		},
	],

	evolveFrom: {
		ja: "ヒトツキ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [680],
};

export default card;
