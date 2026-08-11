import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pachirisu ex",
		'fr-fr': "Pachirisu-ex",
		'es-es': "Pachirisu ex",
		'it-it': "Pachirisu-ex",
		'de-de': "Pachirisu-ex",
		'pt-br': "Pachirisu ex",
		'ko-kr': "파치리스 ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [417],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Sparking Gadget",
			'fr-fr': "Gadget'incelles",
			'es-es': "Aparato Chispeante",
			'it-it': "Congegno Sfavillante",
			'de-de': "Gerätefunken",
			'pt-br': "Engenhoca Cintilante",
			'ko-kr': "가젯스파크"
		},

		damage: "40+",
		cost: ["Lightning", "Lightning"],

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.",
			'fr-fr': "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 40 puntos de daño más.",
			'it-it': "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 40 danni in più.",
			'de-de': "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 40 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 40 pontos de dano a mais.",
			'ko-kr': "이 포켓몬에게 「포켓몬의 도구」가 붙어 있다면 40데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
