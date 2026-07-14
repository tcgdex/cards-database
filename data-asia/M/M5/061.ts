import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		ja: "古い お墓から みつかる。 背中の 模様には 神秘的な 力が 宿っていると いわれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ミラーアタック" },
			damage: "10+",
			cost: ["Metal"],
			effect: {
				ja: "相手のバトルポケモンが[M]ポケモンなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [{ type: "normal" }],

	retreat: 3,
	regulationMark: "J",
	rarity: "Common",
	dexId: [436],

	thirdParty: {
		cardmarket: 888324,
	},
};

export default card;
