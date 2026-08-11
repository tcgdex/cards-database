import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのオーロット",
	},

	illustrator: "Tomowaka",
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
			type: "holo",
			thirdParty: {
				cardmarket: 861447,
			},
		},
	],

	evolveFrom: {
		ja: "ホップのボクレー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [709],
};

export default card;
