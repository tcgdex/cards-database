import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アーケン",
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "とりポケモンの 祖先と 言われる。 飛ぶことは できず 枝から 枝へ 飛び移り 生活していたらしい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アクロバット" },
			damage: "30+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863694,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [566],
};

export default card;
