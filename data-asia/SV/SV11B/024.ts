import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ガマゲロゲ",
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		ja: "頭の コブから 神経を マヒさせる 液体を 飛ばす。 振動で 相手を 苦しめる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "りんしょう" },
			damage: "70x",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の場の、ワザ「りんしょう」を持つポケモンの数×70ダメージ。",
			},
		},
		{
			name: { ja: "ハイパーボイス" },
			damage: 160,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		ja: "ガマガル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [537],

	thirdParty: {
		cardmarket: 828472,
		tcgplayer: 636378,
	},
};

export default card;
