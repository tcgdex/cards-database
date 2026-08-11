import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Empoleon",
		fr: "Pingoléon",
		es: "Empoleon",
		it: "Empoleon",
		de: "Impoleon",
		'pt-br': "Empoleon",
		ko: "엠페르트"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [395],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Prinplup"
	},

	description: {
		en: "It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice.",
		fr: "Il nage aussi vite qu'un hors-bord. Le tranchant de\nses ailes peut fendre un bloc de glace à la dérive.",
		es: "Nada tan rápido como un fueraborda. Con los\nafilados bordes de sus alas puede cortar el hielo.",
		it: "Nuota veloce come una moto d'acqua. Le estremità\ndelle ali sono aguzze e spaccano anche il ghiaccio.",
		de: "Es schwimmt so schnell wie ein Rennboot. Seine Flügel\nhaben scharfe Seiten und können Packeis schneiden.",
		'pt-br': "Movimenta-se tão rápido quanto uma lancha.\nAs suas asas afiadas são capazes de fatiar icebergs.",
		ko: "제트스키와 맞먹는 속도로\n헤엄친다. 날개 가장자리는\n날카롭게 유빙을 절단한다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Aqua Jet",
			fr: "Aqua-Jet",
			es: "Acua Jet",
			it: "Acquagetto",
			de: "Wasserdüse",
			'pt-br': "Aqua Jato",
			ko: "아쿠아제트"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "This attack also does 30 damage to 1 of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 30 dégâts à un des Pokémon de Banc de votre adversaire.",
			es: "Este ataque también hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 1마리에게도 30데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["palkia"]
}

export default card
