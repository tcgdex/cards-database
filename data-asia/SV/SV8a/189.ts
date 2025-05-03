import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "オルティガ",
		id: "Orto",
		'zh-tw': "奧爾迪加",
		'zh-cn': "奧爾迪加"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中から好きなカードを1枚選び、相手の山札の下にもどす。その後、相手はのぞむなら、山札を1枚引く。",
		id: "Lihat Kartu Pegangan lawan, pilih 1 kartu sesukanya di antaranya, lalu kembalikan ke bawah Deck lawan. Setelah itu, lawan dapat mengambil 1 kartu dari atas Deck.",
		'zh-tw': "查看對手的手牌，從其中任意選擇1張卡，放回對手的牌庫下方。然後，對手若希望，從牌庫抽出1張卡。",
		'zh-cn': "查看對手的手牌，從其中任意選擇1張卡，放回對手的牌庫下方。然後，對手若希望，從牌庫抽出1張卡。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card