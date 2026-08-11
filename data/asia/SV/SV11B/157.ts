import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チラーミィ",
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "尻尾で お互いの 体を なでて あいさつ。 尻尾の 手入れを 欠かさず いつも きれいにしている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "スイープビンタ" },
			damage: "20x",
			cost: ["Colorless"],
			effect: { ja: "コインを2回投げ、オモテの数×20ダメージ。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [572],

	thirdParty: {
		cardmarket: 829416,
		tcgplayer: 636511,
	},
};

export default card;
