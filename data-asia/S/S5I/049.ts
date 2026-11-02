import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー",
		'zh-tw': "銅鏡怪",
		th: "โดมิเรอร์",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "磨けば 光り 真実を 映しだすとも いわれるが ドーミラーは とても 嫌がる。",
		'zh-tw': "雖然人們說把銅鏡怪打磨到發光，牠就能映照出真相，但其實牠非常討厭被打磨。",
		th: "ว่ากันว่าถ้าขัดเงาแล้วส่องประกายจะสะท้อนให้เห็นความจริงออกมา แต่โดมิเรอร์ไม่ชอบมาก ๆ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
				th: "กระแทก",
			},
			damage: 30,
			cost: ["Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533467,
				tcgplayer: 568998,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [436],
};

export default card;
