import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Crabominable ex",
		'fr-fr': "Crabominable-ex",
		'es-es': "Crabominable ex",
		'it-it': "Crabominable-ex",
		'de-de': "Krawell-ex",
		'pt-br': "Crabominable ex",
		'ko-kr': "모단단게 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [740],
	hp: 160,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Crabrawler"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Insatiable Striking",
			'fr-fr': "Tacle Insatiable",
			'es-es': "Aporreo Insaciable",
			'it-it': "Colpi Irrefrenabili",
			'de-de': "Unersättliches Prügeln",
			'pt-br': "Golpe Insaciável",
			'ko-kr': "더욱더욱봄버"
		},

		damage: 40,
		cost: ["Water"],

		effect: {
			'en-us': "During your next turn, this Pokémon's Insatiable Striking attack does +40 damage.",
			'fr-fr': "Pendant votre prochain tour, l'attaque Tacle Insatiable de ce Pokémon inflige + 40 dégâts.",
			'es-es': "Durante tu próximo turno, el ataque Aporreo Insaciable de este Pokémon hace Insatiable Striking+40 puntos[/Ctrl:NoBreak] de daño.",
			'it-it': "Durante il tuo prossimo turno, l'attacco Colpi Irrefrenabili di questo Pokémon infligge +40 danni.",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Unersättliches Prügeln von diesem Pokémon + 40 Schadenspunkte zu.",
			'pt-br': "Durante o seu próximo turno, o ataque Golpe Insaciável deste Pokémon causará + 40 pontos de dano.",
			'ko-kr': "자신의 다음 차례에 이 포켓몬의 「더욱더욱봄버」의 데미지를 +40한다."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo"]
}

export default card