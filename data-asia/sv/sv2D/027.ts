import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "プクリン",
		'zh-tw': "胖可丁",
		th: "พูคูริน",
		id: "Wigglytuff"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [40],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "キメ細やかな 毛皮の 持ち主。 怒らせると どんどん ふくらみ のしかかってくるので 注意。",
		'zh-tw': "擁有細緻的毛皮。小心別惹牠生氣，否則牠會 不斷膨脹並朝著你壓過來。",
		th: "มีขนละเอียด พอโกรธจะค่อย ๆ พองตัวแล้วเอนทับอีกฝ่าย ให้ระวังตัวด้วย",
		id: "Pokémon ini memiliki bulu yang halus. Tubuh Wigglytuff akan terus membesar dan menindih siapa pun yang membuatnya marah, jadi berhati-hatilah."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "バルーンセラピー",
			'zh-tw': "氣球治療",
			th: "บอลลูนเทอราปี",
			id: "Balloon Therapy"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「セラピーエネルギー」を1枚選び、自分のポケモンにつける。",
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇1張「治療能量」卡，附於自己的寶可夢身上。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [เทอราปีเอนเนอร์จี้] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Terapi dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon sendiri."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "マジカルショット",
			'zh-tw': "魔法射擊",
			th: "เมจิคัลช็อต",
			id: "Magical Shot"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card