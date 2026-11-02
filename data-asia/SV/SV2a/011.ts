import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "トランセル",
		'zh-tw': "鐵甲蛹",
		th: "ทรานเซล",
		id: "Metapod",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "硬い 殻に 包まれているが 中身は 軟らかいので 強い 攻撃には 耐えられない。",
		'zh-tw': "雖然有堅硬的外殼，但因為殼裡的身體很軟， 所以無法抵抗強力的攻擊。",
		th: "ถูกห่อหุ้มอยู่ในเปลือกแข็งแต่ว่าลำตัวนุ่มนิ่มก็เลยไม่สามารถทนต่อการโจมตีรุนแรงได้",
		id: "Metapod dilindungi oleh cangkang yang keras, tapi bagian dalam tubuhnya lunak sehingga tidak dapat menahan serangan yang kuat.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
				th: "พุ่งเข้าชน",
				id: "Serudukan",
			},
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: {
				ja: "ぼうぎょしせい",
				'zh-tw': "防禦姿勢",
				th: "ตั้งท่าป้องกัน",
				id: "Posisi Bertahan",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。",
				th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้",
				id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan.",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719453,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837244,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837245,
			},
		},
	],

	evolveFrom: {
		ja: "キャタピー",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Common",
	dexId: [11],
};

export default card;
