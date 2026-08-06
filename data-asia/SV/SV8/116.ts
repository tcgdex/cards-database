import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ダグトリオ",
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "金属質の 髭は 重いので 素早さは いまいちだが 硬い 岩盤も 掘りぬくパワーを 持つ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スリービンゴ" },
			damage: 120,
			cost: [],
			effect: {
				ja: "自分の手札が3枚でないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793580,
				tcgplayer: 587723,
			},
		},
	],

	evolveFrom: {
		ja: "アローラディグダ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [51],
};

export default card;
