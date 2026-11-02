import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "スナバァ",
		'zh-tw': "沙丘娃",
		'zh-cn': "沙丘娃",
	},

	illustrator: "Koji Nakata",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "獲物の 目を 砂で 潰し その隙に 近づこうとするが 動きが 遅いので 逃げられる。",
		'zh-tw': "會用沙子攻擊獵物的眼睛後 趁機接近，但卻總是因為 行動緩慢而讓獵物逃走。",
		'zh-cn': "會用沙子攻擊獵物的眼睛後 趁機接近，但卻總是因為 行動緩慢而讓獵物逃走。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "すなしぶき",
				'zh-tw': "沙沫",
				'zh-cn': "沙沫",
			},
			damage: 50,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793490,
				tcgplayer: 587636,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [769],
};

export default card;
