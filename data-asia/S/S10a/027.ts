import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "かがやくサーナイト",
		'zh-tw': "光輝沙奈朵",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "未来を 予知する 力を もつ。 トレーナーを 守る ときに 最大 パワーを 発揮する。",
		'zh-tw': "有著預知未來的能力。在保護訓練家的時候， 會發揮出最強的力量。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "じあいのヴェール",
				'zh-tw': "慈藹之幕",
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分のポケモン全員が、相手の「ポケモンV」から受けるワザのダメージは「-20」される。",
				'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的「寶可夢【V】」招式的傷害「-20」點。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "サイコキネシス",
				'zh-tw': "精神強念",
			},
			damage: "70+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656328,
				tcgplayer: 570690,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Radiant Rare",
	dexId: [282],
};

export default card;
