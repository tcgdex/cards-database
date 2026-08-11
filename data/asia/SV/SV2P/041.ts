import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウソッキー",
		'zh-tw': "樹才怪",
		'th-th': "อุซกกี",
		'id-id': "Sudowoodo"
	},

	illustrator: "Jerky",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [185],
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "いつも 木のふりを している。 体の つくりは 植物より 石や 岩などに 近いようだ。",
		'zh-tw': "總是偽裝成樹的樣子。身體構造比起植物來， 好像更接近石頭或岩石之類的東西。",
		'th-th': "แสร้งเป็นต้นไม้ตลอดเวลา โครงสร้างร่างกายเหมือนหินมากกว่าพืช",
		'id-id': "Sudowoodo selalu berpura-pura menjadi pohon. Struktur tubuh Pokémon ini lebih mirip dengan batu dan bebatuan lainnya daripada tumbuhan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "なぐってかくれる",
			'zh-tw': "打擊躲藏",
			'th-th': "ทุบตีแล้วหนีซ่อน",
			'id-id': "Memukul dan Bersembunyi"
		},

		damage: 20,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ひじうち",
			'zh-tw': "肘擊",
			'th-th': "ตีศอก",
			'id-id': "Menyikut"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 705274,
				tcgplayer: 567798,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card