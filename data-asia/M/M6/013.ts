import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバーン",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "火山の 火口に 棲む。 １つの 火山には ひとつがいの ブーバーンしかいないと いわれる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "バディブースト" },
			effect: {
				ja: "自分の番に1回使える。自分の手札から「基本[R]エネルギー」と「基本[L]エネルギー」をそれぞれ1枚まで選び、自分の「エレキブル」または「ブーバーン」に好きなようにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒートスタンプ" },
			damage: 80,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899861,
				tcgplayer: 709169,
			},
		},
	],

	evolveFrom: {
		ja: "ブーバー",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [467],
};

export default card;
