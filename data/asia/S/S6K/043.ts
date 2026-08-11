import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "オトスパス",
		'zh-tw': "八爪武師",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "おのれの腕を 試すべく 陸に 上がり 対戦相手を 探す。 戦い終えると 海に 帰る。",
		'zh-tw': "會為了試自己的身手而登上陸地尋找對手。戰鬥結束後就會回到海裡。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "しめわざのたつじん",
				'zh-tw': "絞技達人",
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンのにげるためのエネルギーは、2個ぶん多くなる。",
				'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢【撤退】所需的能量增加2個。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "シンクロバスター",
				'zh-tw': "同步光炮",
			},
			damage: "80+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "自分の手札と相手の手札が同じ枚数なら、80ダメージ追加。",
				'zh-tw': "若自己的手牌的張數與對手的手牌的張數相同，則增加80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560819,
				tcgplayer: 569271,
			},
		},
	],

	evolveFrom: {
		ja: "タタッコ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [853],
};

export default card;
