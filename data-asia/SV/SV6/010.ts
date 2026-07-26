import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴリランダー",
		'zh-tw': "轟擂金剛猩",
		th: "กอริลลันดา",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	description: {
		ja: "特別な 切り株の パワーを ドラミングで コントロール。 根っこを 操って 戦う。",
		'zh-tw': "能夠透過打鼓來控制 特別的樹樁中的力量， 操縱樹根進行戰鬥。",
		th: "ควบคุมพลังของตอไม้พิเศษด้วยการตีกลอง บังคับตอไม้เพื่อต่อสู้",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ドラムアタック",
				'zh-tw': "鼓擊",
				th: "ดรัมแอทแทก",
			},
			damage: 60,
			cost: ["Grass"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、ワザを使うためのエネルギーとにげるためのエネルギーが、それぞれ[C]エネルギー1個ぶん多くなる。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量與【撤退】所需的能量，各增加1個【無】能量。",
				th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ พลังงานสำหรับใช้ท่าต่อสู้กับพลังงานสำหรับ[หนี] แต่ละอย่างจะใช้พลังงาน[ไร้สี]เพิ่มขึ้น 1 ลูก",
			},
		},
		{
			name: {
				ja: "ウッドハンマー",
				'zh-tw': "木槌",
				th: "วู้ดแฮมเมอร์",
			},
			damage: 180,
			cost: ["Grass", "Grass"],
			effect: {
				ja: "このポケモンにも50ダメージ。",
				'zh-tw': "這隻寶可夢也受到50點傷害。",
				th: "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 766978,
				tcgplayer: 568000,
			},
		},
	],

	evolveFrom: {
		ja: "バチンキー",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [812],
};

export default card;
