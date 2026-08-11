import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アオキのウォーグル",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "仲間の ためなら どれだけ 傷つこうとも 戦いを やめない 勇敢な 大空の 戦士。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "わしづかみ" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
		{
			name: { ja: "ブレイブバード" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863911,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アオキのワシボン",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [628],
};

export default card;
