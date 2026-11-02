import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "サイホーン",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "頭は 悪いが 力が 強く 高層ビルも 体当たりで コナゴナに 粉砕する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきとばす" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557405,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [111],
};

export default card;
