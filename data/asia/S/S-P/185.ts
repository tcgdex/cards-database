import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バンギラスV",
		'zh-tw': "快龍V",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 230,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "やまなだれ",
				'zh-tw': "破壞光線",
			},
			damage: 60,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の山札を上から2枚トラッシュする。",
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			},
		},
		{
			name: {
				'ja-jp': "いちげきクラッシュ",
				'zh-tw': "光炮尾",
			},
			damage: 240,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を上から4枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 564163,
				tcgplayer: 597383,
			},
		},
	],

	retreat: 3,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [248],
};

export default card;
