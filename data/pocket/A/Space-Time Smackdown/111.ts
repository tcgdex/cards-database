import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'es-es': "Skarmory",
		'it-it': "Skarmory",
		'de-de': "Panzaeron",
		'pt-br': "Skarmory",
		'ko-kr': "무장조"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [227],
	hp: 80,
	types: ["Metal"],

	description: {
		'en-us': "People fashion swords from Skarmory's shed feathers, so this Pokémon is a popular element in heraldic designs.",
		'fr-fr': "Ce Pokémon orne souvent les blasons, car les plumes\nqu'il perd sont utilisées pour forger des épées.",
		'es-es': "Aparece a menudo en escudos heráldicos, pues se\npueden forjar espadas a partir de las plumas que pierde.",
		'it-it': "Le piume perse da Skarmory sono utilizzate\nper produrre spade. Per questo è molto\napprezzato come motivo degli stemmi nobiliari.",
		'de-de': "Es wird gern als Vorlage für Wappenmotive\ngenutzt, da aus den Federn, die ihm ausfallen,\nSchwerter hergestellt werden.",
		'pt-br': "As pessoas forjam espadas com as penas que caíram\nde Skarmory, por isso, a imagem deste Pokémon é\num elemento popular em brasões.",
		'ko-kr': "빠진 깃털로 검을\n만들 수 있어서 문장\n도안으로 인기가 많다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Metal Arms",
			'fr-fr': "Bras Métalliques",
			'es-es': "Extremidades Metálicas",
			'it-it': "Arti Metallici",
			'de-de': "Metallarme",
			'pt-br': "Braços Metálicos",
			'ko-kr': "메탈암즈"
		},

		damage: "20+",
		cost: ["Metal"],

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 30 more damage.",
			'fr-fr': "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 30 puntos de daño más.",
			'it-it': "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 30 danni in più.",
			'de-de': "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 30 pontos de dano a mais.",
			'ko-kr': "이 포켓몬에게 「포켓몬의 도구」가 붙어 있다면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
