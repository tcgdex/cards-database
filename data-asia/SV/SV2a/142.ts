import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "プテラ",
		'zh-tw': "化石翼龍",
		th: "พเทอรา",
		id: "Aerodactyl"
	},

	illustrator: "Shinji Kanda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [142],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "のこぎりの ような キバは はがねポケモンの 皮膚さえ ズタズタに 切り裂いてしまう。",
		'zh-tw': "擁有像鋸子般的牙齒，就連鋼屬性寶可夢的 皮膚都能撕裂成碎片。",
		th: "ฟันเขี้ยวดุจใบเลื่อยนั้นแม้จะเป็นผิวของโปเกมอนโลหะก็สามารถกัดฉีกเป็นชิ้น ๆ ได้",
		id: "Taring Aerodactyl yang bagaikan gergaji dapat mengoyak dan menyayat kulit Pokémon logam sekalipun."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かっくう",
			'zh-tw': "滑翔",
			th: "ถลาลม",
			id: "Melayang Rendah"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たいかこうせん",
			'zh-tw': "退化光線",
			th: "ลำแสงย้อนวิวัฒนาการ",
			id: "Sinar Degradasi"
		},

		damage: 100,

		effect: {
			ja: "相手の進化しているバトルポケモンから、「進化カード」を1枚はがして退化させる。はがしたカードは、相手の手札にもどす。",
			'zh-tw': "從對手的進化的戰鬥寶可夢身上，移除1張「進化卡」使其退化。將移除的卡放回對手的手牌。",
			th: "ถอด [การ์ดวิวัฒนาการ] 1 ใบออกจากโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามที่วิวัฒนาการแล้ว และทำให้วิวัฒนาการย้อนกลับ การ์ดที่ถอดออกมา นำกลับขึ้นมือฝ่ายตรงข้าม",
			id: "Turunkan tingkat evolusi Pokémon Bertarung lawan yang telah berevolusi dengan melepas 1 kartu evolusi yang dikenakan. Kartu yang dilepas dikembalikan ke Kartu Pegangan lawan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719595
	}
}

export default card