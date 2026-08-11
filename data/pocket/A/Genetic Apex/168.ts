import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
		es: "Nidoqueen",
		it: "Nidoqueen",
		de: "Nidoqueen",
		'pt-br': "Nidoqueen",
		ko: "니드퀸"
	},

	illustrator: "nagimiso",
	category: "Pokemon",

	dexId: [31],
	hp: 140,
	types: ["Darkness"],
	stage: "Stage2",

	evolveFrom: {
		en: "Nidorina"
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Lovestrike",
			fr: "Coup de Foudre",
			es: "Flechazo",
			it: "Colpo di Fulmine",
			de: "Liebestaumel",
			'pt-br': "Ataque de Amor",
			ko: "러브러브어택"
		},

		effect: {
			en: "This attack does 50 more damage for each of your Benched Nidoking.",
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Nidoking sur votre Banc.",
			es: "Este ataque hace 50 puntos de daño más por cada uno de tus Nidoking en Banca.",
			it: "Questo attacco infligge 50 danni in più per ogni Nidoking nella tua panchina.",
			de: "Diese Attacke fügt für jedes Nidoking auf deiner Bank 50 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada um dos seus Nidoking no Banco.",
			ko: "자신의 벤치의 「니드킹」의 수 × 50데미지를 추가한다."
		},

		damage: "80+"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.",
		fr: "Il est plus doué pour se défendre que pour\nattaquer. Grâce à son blindage d'écailles,\nil protège ses petits de toute agression.",
		es: "Su defensa destaca sobre la capacidad ofensiva.\nUsa las escamas del cuerpo como una coraza\npara proteger a su prole de cualquier ataque.",
		it: "Più abile nella difesa che nell'attacco,\nprotegge i cuccioli da qualunque\nattacco grazie alla corazza di squame.",
		de: "Sie sind eher defensiv als offensiv veranlagt.\nMit ihren panzerartigen Schuppen schützen sie\nihre Jungen vor jeglichen Angriffen.",
		'pt-br': "Nidoqueen é melhor na defensiva. Com suas\nescamas parecidas com uma armadura,\nprotege seus filhotes de qualquer ataque.",
		ko: "공격보다는 방어가 특기다.\n갑옷 같은 비늘로 어떠한\n공격에도 새끼를 지킨다."
	},

	boosters: ["pikachu"]
}

export default card
