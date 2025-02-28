import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "スピンロトム",
		id: "Rotom Kipas",
		th: "สปินโรตอม",
		'zh-tw': "旋轉洛托姆",
		'zh-cn': "旋轉洛托姆"
	},

	illustrator: "Toshinao Aoki",
	rarity: "None",
	category: "Pokemon",
	dexId: [479],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "ロトムが 入れる 家電製品は いくつか あるが いちばん 初めに 開発されたのは 扇風機だ。",
		id: "Terdapat beberapa perabotan elektronik yang dapat dimasuki Rotom, namun kipas angin adalah perabotan yang paling pertama dikembangkan.",
		th: "เครื่องใช้ไฟฟ้าในครัวเรือนที่โรตอมสามารถเข้าไปได้มีหลายชิ้น แต่เครื่องใช้ไฟฟ้าชิ้นแรกที่ได้รับการพัฒนาคือพัดลม",
		'zh-tw': "雖然能讓洛托姆鑽進去的 家電用品有好幾種， 但最先被研發出的是電風扇。",
		'zh-cn': "雖然能讓洛托姆鑽進去的 家電用品有好幾種， 但最先被研發出的是電風扇。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ファンコール",
			id: "Fan Call",
			th: "แฟนคอล",
			'zh-tw': "風扇呼喚",
			'zh-cn': "風扇呼喚"
		},

		effect: {
			ja: "最初の自分の番にだけ1回使える。自分の山札から、HPが「100」以下のポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。この番、すでに別の「ファンコール」を使っていたなら、この特性は使えない。",
			id: "Hanya dapat digunakan 1 kali pada giliran pertama sendiri. Pilih paling banyak 3 lembar Pokémon {Bening} dengan HP 100 atau kurang dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck. Jika pada giliran ini, Fan Call lainnya telah digunakan, Ability ini tidak dapat digunakan.",
			th: "ใช้ได้ 1 ครั้งในเทิร์นแรกสุดของฝ่ายเราเท่านั้น เลือกการ์ดโปเกมอน[ไร้สี]ที่มี HP น้อยกว่าหรือเท่ากับ [100] ได้สูงสุด 3 ใบ จากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด เทิร์นนี้ ถ้าใช้ [แฟนคอล] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้",
			'zh-tw': "只有在自己的最初回合可使用1次。從自己的牌庫選擇最多3張HP為「100」以下的【無】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。在這個回合，若已經使出了其他的「風扇呼喚」，則這個特性無法使用。",
			'zh-cn': "只有在自己的最初回合可使用1次。從自己的牌庫選擇最多3張HP為「100」以下的【無】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。在這個回合，若已經使出了其他的「風扇呼喚」，則這個特性無法使用。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "とつげきランディング",
			id: "Pendaratan Menyerang",
			th: "ลงจอดประจัญบาน",
			'zh-tw': "突擊著地",
			'zh-cn': "突擊著地"
		},

		damage: 70,

		effect: {
			ja: "場にスタジアムが出ていないなら、このワザは失敗。",
			id: "Jika tidak ada Stadium di Arena, serangan ini gagal.",
			th: "ถ้าไม่มีการ์ดสเตเดียมอยู่บนกระดาน ท่าต่อสู้นี้จะล้มเหลว",
			'zh-tw': "若場上沒有競技場卡，則這個招式失敗。",
			'zh-cn': "若場上沒有競技場卡，則這個招式失敗。"
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

	retreat: 1,
	regulationMark: "H"
}

export default card