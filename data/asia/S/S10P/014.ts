import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒードランV",
		'zh-tw': "席多藍恩V",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ねつでこがす",
				'zh-tw': "熱灼燒",
			},
			damage: 30,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			},
		},
		{
			name: {
				ja: "マグマフォール",
				'zh-tw': "熔岩墜落",
			},
			damage: "90+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "場に自分のスタジアムが出ているなら、90ダメージ追加。",
				'zh-tw': "若場上有自己的競技場卡，則增加90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651073,
				tcgplayer: 569857,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [485],
};

export default card;
