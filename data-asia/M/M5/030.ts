import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ルージュラ",
	},

	illustrator: "Yoshimoto Yoshimon",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "人間の 言葉のような 不思議な 鳴き声。 ルージュラに 歌わせる 曲を 作る 音楽家もいる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きょうれつキッス" },
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番の終わりに、このワザを受けたポケモンと、ついているすべてのカードを、トラッシュする。",
			},
		},
		{
			name: { ja: "ねんりき" },
			damage: 50,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [124],

	thirdParty: {
		cardmarket: 888273,
	},
};

export default card;
