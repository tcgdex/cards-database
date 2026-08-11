import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Dondozo",
		fr: "Oyacata",
		es: "Dondozo",
		it: "Dondozo",
		de: "Heerashai",
		'pt-br': "Dondozo",
		ko: "어써러셔"
	},

	illustrator: "Tomowaka",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [977],
	hp: 120,
	types: ["Water"],

	description: {
		en: "This Pokémon is a glutton, but it's bad at getting food. It teams up with a Tatsugiri to catch prey.",
		fr: "Comme il n'est pas très doué pour attraper ses proies,\nce Pokémon vorace fait équipe avec Nigirigon pour chasser.",
		es: "Le gusta mucho comer, pero no se le da bien cazar, por lo\nque aúna fuerzas con Tatsugiri con el fin de capturar presas.",
		it: "È un Pokémon vorace, ma non è molto abile\nnel procacciarsi il cibo. Cattura le sue prede\ncollaborando con il Tatsugiri che è con lui.",
		de: "Es ist zwar ein Vielfraß, doch die Jagd liegt\nihm nicht. Deshalb schließt es sich mit\nNigiragi zusammen, um Beute zu fangen.",
		'pt-br': "Este Pokémon é guloso, mas não é nada\nbom em conseguir comida. Alia-se a\nTatsugiri para pegar suas presas.",
		ko: "대식가지만 먹이를 잡는 것이 서툴다.\n싸리용과 콤비를 이뤄\n먹이를 사냥한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ocean Cyclone",
			fr: "Cyclone Océanique",
			es: "Ciclón Oceánico",
			it: "Ciclone Oceanico",
			de: "Meeressturm",
			'pt-br': "Ciclone Oceânico",
			ko: "오션사이클론"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless", "Colorless"],

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 10 dégâts à chaque Pokémon de Banc de votre adversaire.",
			es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 전원에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card