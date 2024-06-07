import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ワザマシン かじばのいっぱつ",
		'zh-tw': "招式學習器 火場一爆",
		th: "แมชชีนท่าต่อสู้ พลังแฝงรวดเดียว",
		id: "MJ Satu Serangan Saat Darurat"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、このカードに書かれているワザを使える。［ワザを使うためのエネルギーは必要。］\nポケモンについているこのカードは、自分の番の終わりにトラッシュする。",
		'zh-tw': "附有這張卡的寶可夢，可使用這張卡上寫的招式。[需要有足夠使用招式的能量。]將附於寶可夢身上的這張卡，在自己的回合結束時丟棄。",
		th: "โปเกมอนที่ติดการ์ดนี้อยู่ สามารถใช้ท่าต่อสู้ที่เขียนอยู่บนการ์ดนี้ได้ {จำเป็นต้องใช้พลังงานสำหรับใช้ท่าต่อสู้} การ์ดนี้ที่ติดอยู่กับโปเกมอน จะทิ้งที่ตำแหน่งทิ้งการ์ดเมื่อจบเทิร์นฝ่ายเรา",
		id: "Pokémon yang mengenakan kartu ini dapat menggunakan serangan yang tertulis pada kartu ini. [Pemain tetap membutuhkan Energi untuk menggunakan serangan tersebut.] Kartu ini yang dikenakan pada Pokémon dibuang ke Trash pada akhir giliran sendiri."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card