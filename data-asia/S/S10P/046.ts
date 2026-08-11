import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "タテトプス",
		'zh-tw': "盾甲龍",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "太古の 地層から 化石が 見つかるが 顔の 部分 以外が 発見 されたことは ない。",
		'zh-tw': "雖然在遠古時代的地層中 發現了牠的化石，但至今未曾 發現臉部以外的部分。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かたいずつき",
				'zh-tw': "堅硬頭錘",
			},
			damage: 30,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			},
		},
		{
			name: {
				ja: "がちんこ",
				'zh-tw': "正面對決",
			},
			damage: 100,
			cost: ["Metal", "Metal", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651105,
				tcgplayer: 569889,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [410],
};

export default card;
