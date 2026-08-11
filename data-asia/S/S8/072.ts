import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "メルメタル",
		'zh-tw': "美錄梅塔",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	description: {
		ja: "鉄を 産み出す 力を 持つと 崇められていた。 ３０００年の 時を 経て なぜか 蘇った。",
		'zh-tw': "擁有產出鐵的力量，因而受到人們的崇拜。不知為何，在經過3000年的時間後甦醒過來。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "インゴットスイング",
				'zh-tw': "鐵塊橫掃",
			},
			damage: 80,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンは特性を持つポケモンからワザのダメージを受けない。",
				'zh-tw': "在下個對手的回合，這隻寶可夢不會受到擁有特性的寶可夢招式的傷害。",
			},
		},
		{
			name: {
				ja: "ブラストハンマー",
				'zh-tw': "爆破之錘",
			},
			damage: 150,
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575627,
				tcgplayer: 569573,
			},
		},
	],

	evolveFrom: {
		ja: "メルタン",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [809],
};

export default card;
