import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼブライカ",
		'zh-tw': "雷電斑馬",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。",
		'zh-tw': "有著閃電般的爆發力。如果雷電斑馬全速奔馳，雷聲就會響徹雲霄。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "れんけいボルト",
				'zh-tw': "聯合伏特",
			},
			damage: "30+",
			cost: ["Colorless"],
			effect: {
				ja: "前の自分の番、このポケモン以外の「れんげき」のポケモンがワザを使っていたなら、90ダメージ追加。",
				'zh-tw': "在上個自己的回合，若這隻寶可夢以外的「連擊」寶可夢使用了招式，則增加90點傷害。",
			},
		},
		{
			name: {
				ja: "スパークラッシュ",
				'zh-tw': "電光衝刺",
			},
			damage: "90×",
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×90ダメージ。",
				'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560771,
				tcgplayer: 569250,
			},
		},
	],

	evolveFrom: {
		ja: "シママ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [523],
};

export default card;
