import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "レアコイル",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "謎の 電波を 発信 しており レアコイルが 棲んでいる 場所では 精密機器が 故障してしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ピッカリだま" },
			damage: 20,
			cost: ["Lightning"],
		},
		{
			name: { ja: "トライアタック" },
			damage: "40×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数×40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557222,
			},
		},
	],

	evolveFrom: {
		ja: "コイル",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [82],
};

export default card;
