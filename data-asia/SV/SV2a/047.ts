import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "パラセクト",
		'zh-tw': "派拉斯特",
		th: "พาราเซ็คท์",
		id: "Parasect",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ムシの 方は ほぼ 死んでいて 本体は 背中の キノコだ。 もげると もう 動かなくなる。",
		'zh-tw': "本體是背上的蘑菇，底下的蟲子幾乎已經死亡。 一旦蘑菇脫落，牠就再也不會動了。",
		th: "ส่วนที่เป็นแมลงเกือบจะตายแล้ว ส่วนตัวจริงของมันคือเห็ดที่อยู่บนหลัง ถ้าเด็ดออกจะเคลื่อนไหวไม่ได้อีก",
		id: "Tubuh serangga sudah hampir mati dan tubuh asli Parasect adalah jamur di punggung serangga tersebut. Begitu jamur tercabut, Pokémon ini tak akan bergerak lagi.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "きんしをばらまく",
				'zh-tw': "散佈菌絲",
				th: "กระจายเส้นใยรา",
				id: "Menebar Hifa",
			},
			cost: ["Grass"],
			effect: {
				ja: "コインを2回投げ、オモテの数ぶんまで、自分の山札から[G]ポケモンを選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "擲2次硬幣，從自己的牌庫選擇最多與正面出現的次數相同數量的【草】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				th: "ทอยเหรียญ 2 ครั้ง เลือกการ์ดโปเกมอน[หญ้า]จากสำรับการ์ดฝ่ายเรา ได้สูงสุดไม่เกินจำนวนครั้งที่ออกหัว วางบนเบนช์ แล้วสับสำรับการ์ด",
				id: "Lempar koin 2 kali. Pilih Pokémon {Daun} dari Deck sendiri paling banyak sejumlah lemparan dengan hasil sisi depan, lalu masukkan ke Cadangan. Kemudian, kocok Deck.",
			},
		},
		{
			name: {
				ja: "ツメできりさく",
				'zh-tw': "利爪劈擊",
				th: "กรงเล็บฉีกร่าง",
				id: "Cakar Penyayat",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719489,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837311,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837312,
			},
		},
	],

	evolveFrom: {
		ja: "パラス",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [47],
};

export default card;
