import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ゾロアーク",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "相手を 化かす ことで 群れの 安全を 守ってきた ポケモン。 仲間同士の 結束が 固い。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "マインドジャック" },
			damage: "30x",
			cost: ["Darkness"],
			effect: { ja: "相手のベンチポケモンの数×30ダメージ。" },
		},
		{
			name: { ja: "イカサマ" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが持つワザを1つ選び、このワザとして使う。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	variants: [
		{
			type: "holo",
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
		ja: "ゾロア",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [571],
	thirdParty: {
		cardmarket: 829062,
		tcgplayer: 636612,
	},
};

export default card;
