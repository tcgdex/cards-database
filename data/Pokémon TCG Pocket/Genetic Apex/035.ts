import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		es: "Charizard",
		it: "Charizard",
		de: "Glurak",
		'pt-br': "Charizard",
		ko: "리자몽"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",

	evolveFrom: {
		en: "Charmeleon"
	},

	attacks: [{
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Spin",
			fr: "Danse Flammes",
			es: "Giro Fuego",
			it: "Turbofuoco",
			de: "Feuerwirbel",
			'pt-br': "Chama Furacão",
			ko: "회오리불꽃"
		},

		effect: {
			en: "Discard 2 {R} Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies {R} de ce Pokémon.",
			es: "Descarta 2 Energías {R} de este Pokémon.",
			it: "Rimuovi 2 Energie {R} da questo Pokémon.",
			de: "Lege 2 {R}-Energien von diesem Pokémon ab.",
			'pt-br': "Descarte 2 Energias {R} deste Pokémon.",
			ko: "이 포켓몬에서 {R}에너지를 2개 트래쉬한다."
		},

		damage: "150"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
		fr: "Il est très brutal. En combat, il se sert de ses griffes acérées\net de sa queue enflammée pour mettre en pièces ses adversaires.",
		es: "Este Pokémon de naturaleza agresiva\nataca en combate con su cola llameante\ny hace trizas al rival con sus afiladas garras.",
		it: "Ha un'indole feroce. Usa la coda fiammeggiante come\nuna frusta e lacera l'avversario con gli artigli affilati.",
		de: "Es ist brutal veranlagt. Im Kampf schlägt es mit\nseinem brennenden Schweif um sich und schlitzt\nGegner mit seinen scharfen Klauen auf.",
		'pt-br': "Possui uma natureza bárbara. Em batalha, chicoteia\ncom sua cauda de fogo e corta com suas garras afiadas.",
		ko: "불타는 꼬리를 휘두르며\n날카로운 발톱으로 상대를\n베어 가르는 몹시 거친 성격이다."
	},

	boosters: ["charizard"]
}

export default card
