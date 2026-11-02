import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミカルゲ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "邪悪なる 念にて 祟り もたらす。 百と八つの 悪しき 魂 集いて 生じたと 記されし ポケモン。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "のろいのことづけ" },
			effect: {
				ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ひとだまれんさ" },
			damage: "10+",
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "自分のトラッシュにある「ミカルゲ」の枚数×60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657055,
				tcgplayer: 570739,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [442],
};

export default card;
