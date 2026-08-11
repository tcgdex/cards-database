import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバー",
		'zh-tw': "鴨嘴火獸",
		th: "บูเบอร์",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "炎で 獲物を しとめる。 ついつい 焼きすぎて 黒コゲに してしまい 後悔する。",
		'zh-tw': "會用火焰解決獵物。但是一不留神就會把獵物 燒得太焦，然後才後悔。",
		th: "จัดการเหยื่อด้วยเปลวเพลิง เผลอทีไรก็จะเผาเสียจนไหม้เกรียมและรู้สึกเสียใจภายหลัง",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "けたぐり",
				'zh-tw': "踢倒",
				th: "เตะเลียด",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ほのおパンチ",
				'zh-tw': "火拳",
				th: "หมัดอัคคี",
			},
			damage: 70,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687496,
				tcgplayer: 571554,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577444,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "None",
	dexId: [126],
};

export default card;
