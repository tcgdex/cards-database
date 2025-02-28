import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "シャリタツ",
		id: "Tatsugiri",
		th: "ชาริทัตสึ",
		'zh-tw': "米立龍",
		'zh-cn': "米立龍"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "None",
	category: "Pokemon",
	dexId: [978],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "非常に 悪賢い ポケモン。 弱ったふりで 獲物を おびき寄せ 仲間の ポケモンに 襲わせる。",
		id: "Pokémon yang sangat licik. Tatsugiri pura-pura melemah untuk memancing mangsanya, lalu memerintah Pokémon rekannya untuk menyerang mangsa tersebut.",
		th: "โปเกมอนที่เจ้าเล่ห์เป็นอย่างมาก แสร้งทำเป็นอ่อนแอเพื่อดึงดูดให้เหยื่อเข้ามาใกล้ แล้วให้โปเกมอนที่เป็นพวกพ้องโจมตีใส่",
		'zh-tw': "極為奸詐狡猾的寶可夢。 會假裝虛弱來吸引獵物接近， 接著讓同夥的寶可夢發動攻擊。",
		'zh-cn': "極為奸詐狡猾的寶可夢。 會假裝虛弱來吸引獵物接近， 接著讓同夥的寶可夢發動攻擊。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きゃくよせ",
			id: "Memanggil Pelanggan",
			th: "ดึงดูดลูกค้า",
			'zh-tw': "集客",
			'zh-cn': "集客"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札を上から6枚見て、その中からサポートを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Arena Bertarung. Lihat 6 kartu dari atas Deck sendiri, pilih 1 lembar Supporter di antaranya, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kocok kembali sisa kartu ke Deck.",
			th: "ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ด 6 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดซัพพอร์ต 1 ใบจากในนั้น ให้ฝ่ายตรงข้ามดู นำขึ้นมือ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ",
			'zh-tw': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看自己的牌庫上方6張卡，從其中選擇1張支援者卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
			'zh-cn': "若這隻寶可夢在戰鬥場上，則在自己的回合時可使用1次。查看自己的牌庫上方6張卡，從其中選擇1張支援者卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Water"],

		name: {
			ja: "なみのり",
			id: "Berselancar",
			th: "โต้คลื่น",
			'zh-tw': "衝浪",
			'zh-cn': "衝浪"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card