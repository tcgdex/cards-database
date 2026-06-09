import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Pachirisu ex",
		fr: "Pachirisu-ex",
		es: "Pachirisu ex",
		it: "Pachirisu-ex",
		de: "Pachirisu-ex",
		'pt-br': "Pachirisu ex",
		ko: "파치리스 ex"
	},

	illustrator: "Nurikabe",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [417],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Sparking Gadget",
			fr: "Gadget'incelles",
			es: "Aparato Chispeante",
			it: "Congegno Sfavillante",
			de: "Gerätefunken",
			'pt-br': "Engenhoca Cintilante",
			ko: "가젯스파크"
		},

		damage: "40+",
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
			es: "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 40 puntos de daño más.",
			it: "Se questo Pokémon ha un Oggetto Pokémon assegnato, questo attacco infligge 40 danni in più.",
			de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 40 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 40 pontos de dano a mais.",
			ko: "이 포켓몬에게 「포켓몬의 도구」가 붙어 있다면 40데미지를 추가한다."
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
