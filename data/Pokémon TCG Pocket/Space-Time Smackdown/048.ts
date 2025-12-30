import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Frost Rotom",
		fr: "Motisma Froid",
		es: "Rotom Frío",
		it: "Rotom Gelo",
		de: "Frost-Rotom",
		'pt-br': "Rotom Congelante",
		ko: "프로스트로토무"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [479],
	hp: 80,
	types: ["Water"],

	description: {
		en: "This Rotom has entered a refrigerator. It leaps around gleefully after it uses cold air to freeze the area around it.",
		fr: "Ce Motisma a pris possession d'un réfrigérateur.\nIl gèle les alentours grâce à l'air froid qu'il produit,\npuis il saute gaiement dans tous les sens.",
		es: "Asume esta forma cuando toma posesión de\nun frigorífico. Congela todo a su alrededor con\naire gélido para acto seguido brincar de alegría.",
		it: "Ha assunto questa forma entrando in un frigorifero. Congela ciò\nche ha intorno con aria ghiacciata per poi saltellare tutto contento.",
		de: "Dieses Rotom ist in einen Kühlschrank eingedrungen.\nMit eiskalter Luft friert es seine Umgebung ein und\nspringt dann fröhlich umher.",
		'pt-br': "Este Rotom entrou em uma geladeira. Salta alegremente\napós usar ar glacial para congelar a área ao redor.",
		ko: "냉장고에 들어간 모습.\n냉기로 주위를 얼려 놓고는\n유쾌하다는 듯이 통통 튄다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Blizzard",
			fr: "Blizzard",
			es: "Ventisca",
			it: "Bora",
			de: "Blizzard",
			'pt-br': "Nevasca",
			ko: "눈보라"
		},

		damage: 30,
		cost: ["Water", "Water"],

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
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
