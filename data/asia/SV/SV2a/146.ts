import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ファイヤー",
		'zh-tw': "火焰鳥",
		th: "ไฟเยอร์",
		id: "Moltres",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "美しく 燃えあがる 翼で 山道を 照らし 遭難者を 助けたと 言い伝えられている。",
		'zh-tw': "相傳牠會以美麗燃燒的翅膀照亮山路，救助在 山中遇險的人。",
		th: "เล่าต่อกันมาว่ามันใช้ปีกที่ลุกโชนอันสวยงามส่องเส้นทางภูเขาให้สว่างและช่วยเหลือผู้ประสบภัยในป่า",
		id: "Disampaikan bahwa Moltres pernah menolong orang yang tersesat dengan menerangi jalan gunung menggunakan sayapnya yang berkobar dengan cantik.",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "フレアフロート",
				'zh-tw': "閃焰浮游",
				th: "แฟลร์โฟลต",
				id: "Flare Float",
			},
			effect: {
				ja: "このポケモンに[R]エネルギーがついているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
				'zh-tw': "若這隻寶可夢身上附有【火】能量卡，則這隻寶可夢【撤退】所需的能量全部消除。",
				th: "ถ้าโปเกมอนนี้มีพลังงาน[ไฟ]ติดอยู่ พลังงานสำหรับ[หนี]ของโปเกมอนนี้ ทั้งหมดจะหายไป",
				id: "Jika Pokémon ini mengenakan Energi {Api}, Pokémon ini menjadi tidak membutuhkan Energi untuk Mundur.",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "えんじょうひこう",
				'zh-tw': "爆燃飛行",
				th: "ลุกไหม้โบยบิน",
				id: "Terbang Terbakar",
			},
			cost: ["Fire", "Fire", "Fire"],
			effect: {
				ja: "このポケモンについている[R]エネルギーを2個トラッシュし、相手のベンチポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "將2個這隻寶可夢身上附加的【火】能量丟棄，對手的1隻備戰寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
				th: "ทิ้งพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูกที่ตำแหน่งทิ้งการ์ด ทำแดเมจ 120 กับโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
				id: "Buang 2 Energi {Api} yang dikenakan pada Pokémon ini ke Trash, serangan ini memberikan kerusakan sejumlah 120 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719599,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837514,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837515,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [146],
};

export default card;
