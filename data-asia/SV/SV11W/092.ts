import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "メブキジカ",
	},

	illustrator: "Yano Keiji",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "季節によって 住処を 変える。 人々は メブキジカの ツノで 季節の 移り変わりを 感じる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "つきとばす" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "ソーラービーム" },
			damage: 100,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "シキジカ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [586],
};

export default card;
