import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mew ex",
		'fr-fr': "Mew-ex",
		'es-es': "Mew ex",
		'it-it': "Mew-ex",
		'de-de': "Mew-ex",
		'pt-br': "Mew ex",
		'ko-kr': "뮤 ex"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",

	dexId: [151],
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'es-es': "Disparo Psi",
			'it-it': "Psicosparo",
			'de-de': "Psychoschuss",
			'pt-br': "Tiro Psíquico",
			'ko-kr': "사이코숏"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Genome Hacking",
			'fr-fr': "Piratage de Génome",
			'es-es': "Hackeo Genoma",
			'it-it': "Hacking del Genoma",
			'de-de': "Genom-Hacking",
			'pt-br': "Hackear Genoma",
			'ko-kr': "게놈핵"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
			'ko-kr': "상대의 배틀 포켓몬이 가지고 있는 기술을 1개 선택해서 이 기술로써 사용한다."
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