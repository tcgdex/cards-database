import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ボスゴドラ",
		'zh-tw': "波士可多拉",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "鋼の ツノで 硬い 岩盤を 突き崩しながら 食料の 鉄を 探して トンネルを 掘る。",
		'zh-tw': "會一邊用鋼角撞塌堅硬的岩盤，一邊挖掘隧道尋找鐵礦，用來作為自己的食物。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ガードプレス",
				'zh-tw': "防守壓制",
			},
			damage: 100,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			},
		},
		{
			name: {
				ja: "ちきゅうわり",
				'zh-tw': "劈地球",
			},
			damage: 240,
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
			effect: {
				ja: "自分のポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "自己的所有寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560466,
				tcgplayer: 569182,
			},
		},
	],

	evolveFrom: {
		ja: "コドラ",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [306],
};

export default card;
