import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "オンバーンex",
		'zh-tw': "音波龍ex",
		th: "ออนเวิร์นex",
		id: "Noivern ex"
	},

	illustrator: "Nisota Niso",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "おんみつひこう",
			'zh-tw': "隱密飛行",
			th: "บินซ่อนเร้น",
			id: "Terbang Gaib"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[พื้นฐาน]",
			id: "Pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon Basic."
		}
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			ja: "ドミネートエコー",
			'zh-tw': "制控迴響",
			th: "ดอมิเนตเอคโค",
			id: "Dominate Echo"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、相手は手札から特殊エネルギーを出してつけられず、スタジアムも出せない。",
			'zh-tw': "在下個對手的回合，對手無法從手牌附上特殊能量卡，也無法使出競技場卡。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม ฝ่ายตรงข้ามไม่สามารถนำการ์ดพลังงานพิเศษจากบนมือออกมาติดได้ และไม่สามารถนำการ์ดสเตเดียมออกมาได้ด้วยเช่นกัน",
			id: "Pada giliran lawan berikutnya, lawan tidak dapat mengenakan Energi Spesial maupun memasukkan Stadium dari Kartu Pegangan."
		}
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card