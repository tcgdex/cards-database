import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ オオニューラ",
		'zh-tw': "洗翠 大狃拉",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "他種圧倒する 身体能力と 猛毒 有し 寒冷なる 高地においては 敵なし。 群れ成さず 単独を良しとする 性質。",
		'zh-tw': "擁有凌駕其他物種之上的身體能力以及劇毒。在寒冷的高地上所向無敵。 偏好獨自行動，而不會集結成群。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "キャリークライム",
				'zh-tw': "搬運攀爬",
			},
			effect: {
				ja: "このポケモンがベンチにいるかぎり、自分のバトルポケモンのにげるためのエネルギーは、2個ぶん少なくなる。",
				'zh-tw': "只要這隻寶可夢在備戰區，自己的戰鬥寶可夢【撤退】所需的能量減少2個。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ツメできりさく",
				'zh-tw': "利爪劈擊",
			},
			damage: 60,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651102,
				tcgplayer: 569886,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ ニューラ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [903],
};

export default card;
