import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ベトベター",
		'zh-tw': "臭泥",
		th: "เบโตเบตา",
		id: "Grimer",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "ヘドロが ポケモンになった。 汚い 場所に 集まって 体の ばい菌を 増やしていく。",
		'zh-tw': "污泥變成的寶可夢。會聚集在骯髒的地方 來繁殖身體的細菌。",
		th: "โคลนสกปรกกลายเป็นโปเกมอน รวมตัวกันในที่สกปรกเพื่อเพิ่มจำนวนเชื้อโรคในร่างกาย",
		id: "Limbah yang berubah menjadi Pokémon. Grimer berkumpul di tempat-tempat kotor dan menambahkan bakteri ke tubuhnya.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "べっとりプレス",
				'zh-tw': "緊貼壓制",
				th: "อัดเหนียวหนืด",
				id: "Tekanan Lengket",
			},
			damage: 10,
			cost: ["Darkness"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげるためのエネルギーが、1個ぶん多くなる。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢【撤退】所需的能量增加1個。",
				th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ พลังงานสำหรับ[หนี] จะเพิ่มขึ้น 1 ลูก",
				id: "Pada giliran lawan berikutnya, Energi yang dibutuhkan oleh Pokémon yang menerima serangan ini untuk Mundur bertambah 1 Energi.",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719530,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837404,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837405,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [88],
};

export default card;
