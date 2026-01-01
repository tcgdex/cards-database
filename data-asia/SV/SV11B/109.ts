import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ガマゲロゲ",
	},

	illustrator: "Shinji Kanda",
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

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ガマガル",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [537],
};

export default card;
