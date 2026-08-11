import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "アママイコ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "硬いヘタで 守られているので とりポケモンとも 平気で 遊ぶ。 突かれまくるが 気に していない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おうふくビンタ" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×30ダメージ。",
			},
		},
		{
			name: { ja: "リーフステップ" },
			damage: 60,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543456,
			},
		},
	],

	evolveFrom: {
		ja: "アマカジ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "None",
	dexId: [762],
};

export default card;
