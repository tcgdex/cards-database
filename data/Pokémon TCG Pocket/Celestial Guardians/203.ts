import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Raichu ex",
		fr: "Raichud'Alola-ex",
		es: "Raichude Alola ex",
		it: "Raichudi Alola-ex",
		de: "Alola-Raichu-ex",
		'pt-br': "Raichude Alola ex",
		ko: "알로라라이츄 ex"
	},

	illustrator: "Yoshimi Miyoshi",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [26],
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		en: "Pikachu"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			it: "Psichico",
			de: "Psychokinese",
			'pt-br': "Psíquico",
			ko: "사이코키네시스"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			ko: "상대 배틀 포켓몬의 에너지의 개수 × 30데미지를 추가한다."
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
