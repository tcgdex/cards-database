import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッポ",
		'zh-tw': "波波",
		th: "ป็อปโปะ",
		id: "Pidgey",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "戦いを 好まない おとなしい 性格だが 下手に 手を 出すと 強烈に 反撃されるぞ。",
		'zh-tw': "雖然性情溫和不愛戰鬥， 但要是隨意對牠出手的話， 就會受到牠強烈的反擊。",
		th: "มีนิสัยสงบเสงี่ยม ไม่ชอบต่อสู้ แต่ถ้าเผลอไปหาเรื่องมันเข้าล่ะก็ จะถูกโต้กลับอย่างรุนแรงเอานะ",
		id: "Meski Pidgey berkepribadian tenang dan tidak menyukai pertikaian, ia akan melawan balik dengan ganas jika diganggu.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なかまをよぶ",
				'zh-tw': "呼朋引伴",
				th: "เรียกเพื่อน",
				id: "Memanggil Teman",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
				id: "Pilih paling banyak 2 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck.",
			},
		},
		{
			name: {
				ja: "たいあたり",
				'zh-tw': "撞擊",
				th: "พุ่งเข้าชน",
				id: "Serudukan",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719458,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837254,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837255,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [16],
};

export default card;
