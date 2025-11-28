import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Excadrill",
		fr: "Minotaupe",
		es: "Excadrill",
		it: "Excadrill",
		de: "Stalobor",
		'pt-br': "Excadrill",
		ko: "몰드류"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [530],
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Drilbur"
	},

	description: {
		en: "It's not uncommon for tunnels that appear to have formed naturally to actually be a result of Excadrill's rampant digging.",
		fr: "On confond souvent les cavernes creusées\npar les Minotaupe avec des grottes naturelles.",
		es: "Se dice que muchas grutas que parecen naturales\nhan sido en realidad horadadas por los Excadrill.",
		it: "Si dice che le grotte all'apparenza naturali siano in realtà\nspesso il risultato degli scavi forsennati effettuati da Excadrill.",
		de: "Viele Tunnel, die aussehen, als wären sie natürlich\nentstanden, gehen wohl eigentlich auf Stalobor zurück,\ndie sich durch die Erde gegraben haben.",
		'pt-br': "Alguns túneis que parecem ter sido formados\nnaturalmente, na verdade, foram criados a partir\ndas escavações de Excadrill.",
		ko: "자연적으로 생긴 동굴로 보이지만\n사실은 몰드류가 파낸 흔적인\n경우는 흔히 있는 일이다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			de: "Schlitzer",
			'pt-br': "Talho",
			ko: "베어가르기"
		},

		damage: 50,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo", "lunala"]
}

export default card