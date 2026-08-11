import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ポチエナ",
		'zh-tw': "土狼犬",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "鋭い きゅうかくで ねらった 獲物は 絶対に 逃がさない。 とっても しつこい 性格だ。",
		'zh-tw': "有著敏銳的嗅覺，絕對不會放過自己盯上的獵物。個性非常執著。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かじる",
				'zh-tw': "咬",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ちょっとつっこむ",
				'zh-tw': "撞一下",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687770,
				tcgplayer: 571746,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [261],
};

export default card;
