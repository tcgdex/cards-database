import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ポチエナ",
		'zh-tw': "土狼犬",
		th: "โปชิเอนา",
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "鋭い きゅうかくで ねらった 獲物は 絶対に 逃がさない。 とっても しつこい 性格だ。",
		'zh-tw': "有著敏銳的嗅覺，絕對不會放過自己盯上的獵物。 個性非常執著。",
		th: "ด้วยประสาทรับกลิ่นที่ดีเยี่ยม ไม่ปล่อยให้เหยื่อที่หมายตาไว้รอดไปได้ มีนิสัยชอบเซ้าซี้มาก",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かじる",
				'zh-tw': "咬",
				th: "แทะ",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ちょっとつっこむ",
				'zh-tw': "撞一下",
				th: "จุ้นจ้านหน่อย",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
				th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 10 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687643,
				tcgplayer: 571619,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577470,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "None",
	dexId: [261],
};

export default card;
