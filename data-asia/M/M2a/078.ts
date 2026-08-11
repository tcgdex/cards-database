import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのオーロット",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "根っこを 神経の かわりにして 森の 木を 操る。 体に 棲みついた ポケモンには 親切。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ホラーリベンジ" },
			damage: "30+",
			cost: ["Colorless"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分の「ホップのポケモン」がきぜつしていたなら、100ダメージ追加。",
			},
		},
		{
			name: { ja: "おいつめる" },
			damage: 90,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861321,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861652,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 861653,
			},
		},
	],

	evolveFrom: {
		ja: "ホップのボクレー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [709],
};

export default card;
