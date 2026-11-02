import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "かがやくアマージョ",
		'zh-tw': "光輝甜冷美后",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "すらりと 伸びた 脚と 残忍な 心を もち 恐れられている。 敵を 容赦なく 踏みにじる。",
		'zh-tw': "讓人畏懼的寶可夢。擁有苗條的雙腿和殘忍的心，會毫不留情地狠踩敵人。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "エレガントヒール",
				'zh-tw': "優雅治癒",
			},
			effect: {
				ja: "自分の番に1回使える。自分のポケモン全員のHPを、それぞれ「20」回復する。",
				'zh-tw': "在自己的回合時，可使用1次。將自己的所有寶可夢各恢復「20」HP。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "アロマシュート",
				'zh-tw': "芳香射擊",
			},
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンの特殊状態をすべて回復する。",
				'zh-tw': "將這隻寶可夢的特殊狀態全部恢復。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673006,
				tcgplayer: 570772,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Radiant Rare",
	dexId: [763],
};

export default card;
