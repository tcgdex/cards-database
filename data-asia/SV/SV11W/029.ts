import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ゼブライカ",
	},

	illustrator: "Mugi Hamada",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。",
	},

	stage: "Stage1",

	attacks: [
		{ name: { ja: "けとばす" }, damage: 30, cost: ["Colorless"] },
		{
			name: { ja: "エレキバレット" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	evolveFrom: {
		ja: "シママ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [523],
	thirdParty: {
		cardmarket: 829031,
		tcgplayer: 636582,
	},
};

export default card;
