import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドクイン",
		'zh-tw': "尼多后",
		'th-th': "นิโดควีน",
		'id-id': "Nidoqueen",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		'ja-jp': "背中の 棘の 隙間に 子どもを 乗せて あやす。 そのときに 毒が 出ることは けっして ないのだ。",
		'zh-tw': "會把孩子放在背上的刺與刺之間來哄牠們。 這時候絕對不會釋放毒素。",
		'th-th': "ปลอบประโลมลูกด้วยการยกขึ้นวางระหว่างหนามบนหลัง ในระหว่างนั้นไม่มีทางที่พิษจะไหลออกมา",
		'id-id': "Nidoqueen menaikkan anaknya ke celah duri di punggungnya agar tenang. Pada saat itu, racun pasti tidak akan keluar dari duri tersebut.",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "クイーンプレス",
				'zh-tw': "皇后壓制",
				'th-th': "ควีนเพรส",
				'id-id': "Queen Press",
			},
			damage: 90,
			cost: ["Darkness", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
				'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。",
				'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[พื้นฐาน]",
				'id-id': "Pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon Basic.",
			},
		},
		{
			name: {
				'ja-jp': "つきたおし",
				'zh-tw': "撞倒",
				'th-th': "พุ่งชน",
				'id-id': "Mendorong Jatuh",
			},
			damage: 160,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719473,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837283,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837284,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ニドリーナ",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [31],
};

export default card;
