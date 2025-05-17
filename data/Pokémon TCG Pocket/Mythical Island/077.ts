import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Mew ex",
		fr: "Mew-ex",
		es: "Mew ex",
		it: "Mew-ex",
		de: "Mew-ex",
		'pt-br': "Mew ex",
		ko: "뮤 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			es: "Disparo Psi",
			it: "Psicosparo",
			de: "Psychoschuss",
			'pt-br': "Tiro Psíquico",
			ko: "사이코숏"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Genome Hacking",
			fr: "Piratage de Génome",
			es: "Hackeo Genoma",
			it: "Hacking del Genoma",
			de: "Genom-Hacking",
			'pt-br': "Hackear Genoma",
			ko: "게놈핵"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			es: "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			it: "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
			ko: "상대의 배틀 포켓몬이 가지고 있는 기술을 1개 선택해서 이 기술로써 사용한다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Star"
}

export default card