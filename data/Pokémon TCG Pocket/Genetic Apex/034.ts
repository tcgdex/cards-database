import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		de: "Glutexo",
		'pt-br': "Charmeleon",
		ko: "리자드"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	},

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
			es: "Garras de Fuego",
			it: "Artigli Infuocati",
			de: "Feuerkrallen",
			'pt-br': "Garras de Fogo",
			ko: "불꽃의발톱"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

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
