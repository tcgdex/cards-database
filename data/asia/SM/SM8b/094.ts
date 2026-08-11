import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ディアンシー",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 90,
	types: ["Fairy"],

	description: {
		'ja-jp': "メレシーの 突然変異。 ピンク色に 輝く 体は 世界一 美しいと 言われる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きらめくいのり" },
			cost: ["Fairy"],
			effect: {
				'ja-jp': "自分の場のポケモン1匹から進化するカードを、自分の山札から1枚選び、そのポケモンにのせて進化させる。そして山札を切る。",
			},
		},
		{
			name: { ja: "ダイヤストーム" },
			damage: 30,
			cost: ["Fairy", "Colorless"],
			effect: {
				'ja-jp': "自分の[妖]ポケモン全員のHPを、それぞれ「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550966,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [719],
};

export default card;
