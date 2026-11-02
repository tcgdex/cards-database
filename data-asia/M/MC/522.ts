import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ダイオウドウ",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	description: {
		ja: "プライドが 高く 気難しい。 鮮やかな 緑の 皮膚の ものが 仲間の 尊敬を 集める。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 100,
			cost: ["Metal", "Metal", "Colorless"],
		},
		{
			name: { ja: "メガインパクト" },
			damage: 160,
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863824,
			},
		},
	],

	evolveFrom: {
		ja: "ゾウドウ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "None",
	dexId: [879],
};

export default card;
