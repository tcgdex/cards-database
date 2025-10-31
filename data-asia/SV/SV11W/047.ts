import { Card } from "../../../interfaces";
import Set from "../SV11W";

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
			effect: { ja: "コインを2回投げ、オモテの数×30ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "古びたはねの化石",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [566],
};

export default card;
