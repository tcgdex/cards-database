import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ダイノーズ",
		'zh-tw': "大朝北鼻",
		'zh-cn': "大朝北鼻",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "３個の チビノーズと 呼ばれる ユニットを 磁力で 操り ３方向から 相手を 仕留める。",
		'zh-tw': "會以磁力操縱３個 被稱為小朝北鼻的組件， 從３個方向解決對手。",
		'zh-cn': "會以磁力操縱３個 被稱為小朝北鼻的組件， 從３個方向解決對手。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "パワージェム",
				'zh-tw': "力量寶石",
				'zh-cn': "力量寶石",
			},
			damage: 40,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "マウンテンフォール",
				'zh-tw': "山岳墜落",
				'zh-cn': "山岳墜落",
			},
			damage: "70+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "場にスタジアムが出ているなら、70ダメージ追加。",
				'zh-tw': "若場上有競技場卡，則增加70點傷害。",
				'zh-cn': "若場上有競技場卡，則增加70點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821884,
				tcgplayer: 628693,
			},
		},
	],

	evolveFrom: {
		ja: "ノズパス",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [476],
};

export default card;
