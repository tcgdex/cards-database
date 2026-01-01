import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "チラーミィ",
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "尻尾で お互いの 体を なでて あいさつ。 尻尾の 手入れを 欠かさず いつも きれいにしている。",
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [572],
};

export default card;
