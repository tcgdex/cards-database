import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ウェーニバル",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		ja: "異国情緒 溢れる ダンスで 見るものを 魅了し 水でできた 飾り羽根を 振りまわし 切り裂く。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アップテンポ" },
			effect: {
				ja: "自分の番に、自分の手札を1枚山札の下にもどすなら、1回使える。自分の手札が5枚になるように、山札を引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハイドロスプラッシュ" },
			damage: 120,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863509,
			},
		},
	],

	evolveFrom: {
		ja: "ウェルカモ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [914],
};

export default card;
