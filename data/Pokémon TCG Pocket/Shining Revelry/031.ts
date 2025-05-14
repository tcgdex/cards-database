import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Alakazam",
		fr: "Alakazam",
		es: "Alakazam",
		it: "Alakazam",
		de: "Simsala",
		'pt-br': "Alakazam",
		ko: "후딘"
	},

	illustrator: "Mousho",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Kadabra"
	},

	description: {
		en: "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
		fr: "Doué d'une intelligence hors du commun,\nce Pokémon serait capable de conserver tous\nses souvenirs, de sa naissance jusqu'à sa mort.",
		es: "Posee una capacidad intelectual fuera de\nlo común que le permite recordar todo lo\nsucedido desde el instante de su nacimiento.",
		it: "Possiede un intelletto estremamente elevato\ne si dice sia in grado di ricordare ogni evento\ndella sua vita, dalla nascita alla morte.",
		de: "Es verfügt über extrem hohe Intelligenz und soll\nsich an alles erinnern können, was zwischen seiner\nGeburt und seinem Tod passiert.",
		'pt-br': "Tem um nível de inteligência incrivelmente alto.\nAlguns dizem que Alakazam se lembra de tudo\nque acontece na sua vida, do nascimento até a morte.",
		ko: "매우 높은 지능을 지녔다.\n태어나서 죽을 때까지 일어나는 일을\n모두 기억한다고 한다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Psychic Suppression",
			fr: "Suppression Psychique",
			es: "Represión Psíquica",
			it: "Oppressione Psichica",
			de: "Psychounterdrückung",
			'pt-br': "Supressão Psíquica",
			ko: "사이코 서프레션"
		},

		damage: 80,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "This attack also does 20 damage to each of your opponent's Benched Pokémon that has any Energy attached.",
			fr: "Cette attaque inflige aussi 20 dégâts à chacun des Pokémon de Banc de votre adversaire auxquels au moins une Énergie est attachée.",
			es: "Este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival que tenga alguna Energía unida a él.",
			it: "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella panchina del tuo avversario che ha delle Energie assegnate.",
			de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners, an das mindestens 1 Energie angelegt ist, 20 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente que tiver alguma Energia ligada a ele.",
			ko: "에너지가 붙어 있는 상대의 벤치 포켓몬 전원에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card