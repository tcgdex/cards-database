import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "かがやくヒスイ オオニューラ",
		'zh-tw': "光輝洗翠 大狃拉",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "他種圧倒する 身体能力と 猛毒 有し 寒冷なる 高地においては 敵なし。 群れ成さず 単独を良しとする 性質。",
		'zh-tw': "擁有凌駕其他物種之上的身體能力以及劇毒。在寒冷的高地上所向無敵。 偏好獨自行動，而不會集結成群。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ポイズンピーク",
				'zh-tw': "巔峰毒性",
			},
			effect: {
				ja: "このポケモンがいるかぎり、相手のバトルポケモンは、どくでのせるダメカンの数が2個多くなる。",
				'zh-tw': "只要這隻寶可夢在場上，對手的戰鬥寶可夢因【中毒】而放置的傷害指示物的數量增加2個。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "どくづき",
				'zh-tw': "毒擊",
			},
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656361,
				tcgplayer: 570709,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Radiant Rare",
	dexId: [903],
};

export default card;
