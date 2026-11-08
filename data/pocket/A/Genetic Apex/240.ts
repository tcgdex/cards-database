import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nidoqueen",
		'fr-fr': "Nidoqueen",
		'es-es': "Nidoqueen",
		'it-it': "Nidoqueen",
		'de-de': "Nidoqueen",
		'pt-br': "Nidoqueen",
		'ko-kr': "니드퀸"
	},

	illustrator: "aoki",
	category: "Pokemon",

	dexId: [31],
	hp: 140,
	types: ["Darkness"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Nidorina"
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Lovestrike",
			'fr-fr': "Coup de Foudre",
			'es-es': "Flechazo",
			'it-it': "Colpo di Fulmine",
			'de-de': "Liebestaumel",
			'pt-br': "Ataque de Amor",
			'ko-kr': "러브러브어택"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each of your Benched Nidoking.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Nidoking sur votre Banc.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada uno de tus Nidoking en Banca.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Nidoking nella tua panchina.",
			'de-de': "Diese Attacke fügt für jedes Nidoking auf deiner Bank 50 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada um dos seus Nidoking no Banco.",
			'ko-kr': "자신의 벤치의 「니드킹」의 수 × 50데미지를 추가한다."
		},

		damage: "80+"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Star",

	description: {
		'en-us': "Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.",
		'fr-fr': "Il est plus doué pour se défendre que pour\nattaquer. Grâce à son blindage d'écailles,\nil protège ses petits de toute agression.",
		'es-es': "Su defensa destaca sobre la capacidad ofensiva.\nUsa las escamas del cuerpo como una coraza\npara proteger a su prole de cualquier ataque.",
		'it-it': "Più abile nella difesa che nell'attacco,\nprotegge i cuccioli da qualunque\nattacco grazie alla corazza di squame.",
		'de-de': "Sie sind eher defensiv als offensiv veranlagt.\nMit ihren panzerartigen Schuppen schützen sie\nihre Jungen vor jeglichen Angriffen.",
		'pt-br': "Nidoqueen é melhor na defensiva. Com suas\nescamas parecidas com uma armadura,\nprotege seus filhotes de qualquer ataque.",
		'ko-kr': "공격보다는 방어가 특기다.\n갑옷 같은 비늘로 어떠한\n공격에도 새끼를 지킨다."
	},

	boosters: ["pikachu"]
}

export default card
