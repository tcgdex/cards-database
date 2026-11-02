import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "シンボラー",
		'zh-tw': "象徵鳥",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "シンボラーが 飛ぶ 砂漠の下を 調査すると 古代の 都市と 思われる 名残りが 見つかった。",
		'zh-tw': "人們在象徵鳥飛過的沙漠地下進行調查，結果在那裡發現了疑似古代都市的遺跡。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ねらいおとす",
				'zh-tw': "狙落",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
				'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。",
			},
		},
		{
			name: {
				ja: "エネリフレクト",
				'zh-tw': "能量反射",
			},
			damage: 60,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571596,
				tcgplayer: 569337,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [561],
};

export default card;
