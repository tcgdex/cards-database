import { Card } from "models/database/card";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バニリッチ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'ja-jp': "暑い 日には 身体が 溶ける。 凍らせれば 元に 戻るけど 身体の 形は 少し 歪む。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こおりのつぶて" },
			damage: "30+",
			cost: ["Water"],
			effect: {
				'ja-jp': "相手のバトルポケモンが[闘]ポケモンなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561484,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "バニプッチ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [583],
};

export default card;
