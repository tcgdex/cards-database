import { Card } from "models/database/card";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドロンチ",
		'zh-tw': "多龍奇",
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "飛行速度は 時速２００キロ。 ドラメシヤと いっしょに 戦い 無事に 進化するまで 世話をする。",
		'zh-tw': "飛行速度為每小時２００公里。與多龍梅西亞一起戰鬥， 到牠進化為止都會細心照顧。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ホロウショット",
				'zh-tw': "陰森射擊",
			},
			damage: 40,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667928,
				tcgplayer: 569984,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドラメシヤ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [886],
};

export default card;
