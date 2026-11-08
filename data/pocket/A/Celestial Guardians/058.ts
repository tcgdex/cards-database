import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Raichu ex",
		'fr-fr': "Raichud'Alola-ex",
		'es-es': "Raichude Alola ex",
		'it-it': "Raichudi Alola-ex",
		'de-de': "Alola-Raichu-ex",
		'pt-br': "Raichude Alola ex",
		'ko-kr': "알로라라이츄 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [26],
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Pikachu"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'de-de': "Psychokinese",
			'pt-br': "Psíquico",
			'ko-kr': "사이코키네시스"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'ko-kr': "상대 배틀 포켓몬의 에너지의 개수 × 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card
