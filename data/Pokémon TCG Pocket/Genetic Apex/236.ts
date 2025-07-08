import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

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

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage2",

	evolveFrom: {
		en: "Kadabra"
	},

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			it: "Psichico",
			de: "Psychokinese",
			'pt-br': "Psíquico",
			ko: "사이코키네시스"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			ko: "상대 배틀 포켓몬의 에너지의 개수 × 30데미지를 추가한다."
		},

		damage: "60+"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Star",

	description: {
		en: "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
		fr: "Doué d'une intelligence hors du commun,\nce Pokémon serait capable de conserver tous\nses souvenirs, de sa naissance jusqu'à sa mort.",
		es: "Posee una capacidad intelectual fuera de\nlo común que le permite recordar todo lo\nsucedido desde el instante de su nacimiento.",
		it: "Possiede un intelletto estremamente elevato\ne si dice sia in grado di ricordare ogni evento\ndella sua vita, dalla nascita alla morte.",
		de: "Es verfügt über extrem hohe Intelligenz und soll\nsich an alles erinnern können, was zwischen seiner\nGeburt und seinem Tod passiert.",
		'pt-br': "Tem um nível de inteligência incrivelmente alto.\nAlguns dizem que Alakazam se lembra de tudo\nque acontece na sua vida, do nascimento até a morte.",
		ko: "매우 높은 지능을 지녔다.\n태어나서 죽을 때까지 일어나는 일을\n모두 기억한다고 한다."
	},

	boosters: ["charizard"]
}

export default card
