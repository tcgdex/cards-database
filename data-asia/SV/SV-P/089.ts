import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "スコヴィランex",
		'zh-tw': "鑰圈兒",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "からくちバインド",
				'zh-tw': "狙落",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。",
			},
		},
		{
			name: { ja: "ツーヘッドクラッシュ" },
			damage: 140,
			cost: ["Grass", "Grass"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、トラッシュする。相手の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723903,
				tcgplayer: 587847,
			},
		},
	],

	evolveFrom: {
		ja: "カプサイジ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [952],

	suffix: "EX",
};

export default card;
