import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジヘッド",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'ja-jp': "縄張りの エサを 食べつくすと ほかの 土地へ 移動する。 ２つの 頭は 仲が 悪い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダブルアタック" },
			damage: "40x",
			cost: ["Colorless", "Colorless"],
			effect: { ja: "コインを2回投げ、オモテの数×40ダメージ。" },
		},
		{
			name: { ja: "しっこくのキバ" },
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		'ja-jp': "モノズ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [634],
	thirdParty: {
		cardmarket: 829502,
		tcgplayer: 636696,
	},
};

export default card;
