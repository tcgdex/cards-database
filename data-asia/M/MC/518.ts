import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "メルメタル",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	description: {
		ja: "寿命が 尽きると 体が 錆びて 崩れる。 やがて 小さな 破片が メルタンに 復活する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 120,
			cost: ["Metal", "Metal", "Colorless"],
		},
		{
			name: { ja: "アイアンバッシュ" },
			damage: 230,
			cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863820,
			},
		},
	],

	evolveFrom: {
		ja: "メルタン",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [809],
};

export default card;
