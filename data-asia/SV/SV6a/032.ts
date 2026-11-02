import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロアーク",
		'zh-tw': "索羅亞克",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "いっぺんに 大勢の 人を 化かす 力を 持つ。 幻の 景色を 見せて 棲み処を 守る。",
		'zh-tw': "有著一口氣迷惑許多人的力量。 會讓人看見虛幻的景色， 以保護自己的居所。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "げんえいジャック",
				'zh-tw': "幻影劫持",
			},
			damage: "60×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の場の「ポケモンex・V」の数×60ダメージ。",
				'zh-tw': "造成對手的場上的「寶可夢【ex】・【V】」的數量×60點傷害。",
			},
		},
		{
			name: {
				ja: "ツメできりさく",
				'zh-tw': "利爪劈擊",
			},
			damage: 110,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773781,
				tcgplayer: 566283,
			},
		},
	],

	evolveFrom: {
		ja: "ゾロア",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [571],
};

export default card;
