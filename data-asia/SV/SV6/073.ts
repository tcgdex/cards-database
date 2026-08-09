import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ココドラ",
		'zh-tw': "可可多拉",
		th: "โคโคโดรา",
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "鉄鉱石や たまに 鉄道の レールを 食べて 体を 守る 鋼の 鎧が つくられる。",
		'zh-tw': "保護牠身體的鋼鐵盔甲， 是由牠吃下的鐵礦石以及 偶爾吃下的鐵軌所製成的。",
		th: "กินแร่เหล็กหรือบางครั้งก็รางรถไฟเพื่อสร้างเกราะเหล็กกล้าปกป้องร่างกาย",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "すてみタックル",
				'zh-tw': "捨身衝撞",
				th: "กระแทกสุดแรง",
			},
			damage: 20,
			cost: ["Metal"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
				th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767166,
				tcgplayer: 568063,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [304],
};

export default card;
