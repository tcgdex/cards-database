import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "テーブルシティ",
		'zh-tw': "桌台市",
		th: "เทเบิลซิตี้",
		id: "Kota Mesa"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、コインを1回投げてよい。オモテなら、自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可擲1次硬幣。若為正面， 從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		th: "ผู้เล่นทั้งสองฝ่าย ในแต่ละเทิร์นของตัวเองทำได้ 1 ครั้ง จะทอยเหรียญ 1 ครั้งก็ได้ ถ้าออกหัว เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายตัวเอง ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
		id: "Kedua pemain 1 kali pada tiap gilirannya sendiri dapat melempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card