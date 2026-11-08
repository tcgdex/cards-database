import { Card } from "models/database/card";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "プテラV",
		'zh-tw': "化石翼龍V",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "かみつく",
				'zh-tw': "咬住",
			},
			damage: 40,
			cost: ["Fighting", "Colorless"],
		},
		{
			name: {
				'ja-jp': "ロッククラッシュ",
				'zh-tw': "岩石細碎",
			},
			damage: 120,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667931,
				tcgplayer: 569987,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [142],
};

export default card;
