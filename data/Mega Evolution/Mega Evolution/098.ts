import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkaton",
		fr: "Forgelina",
		de: "Granforgita",
		it: "Tinkaton",
		es: "Tinkaton",
		pt: "Tinkaton",
		'es-mx': "Tinkaton"
	},

	illustrator: "toriyufu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],
	stage: "Stage2",
	dexId: [959],

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Windup Swing",
			fr: "Frappe Tournoyante",
			de: "Aufziehschwung",
			it: "Colpo Caricato",
			es: "Impacto Mecánico",
			pt: "Impulsão de Corda",
			'es-mx': "Tremendo Impacto"
		},

		effect: {
			en: "This attack does 60 less damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 60 dégâts de moins pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 60 Schadenspunkte weniger zu.",
			it: "Questo attacco infligge 60 danni in meno per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			es: "Este ataque hace 60 puntos de daño menos por cada Energía unida al Pokémon Activo de tu rival.",
			pt: "Este ataque causa 60 pontos de dano a menos para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 60 puntos de daño menos por cada Energía unida al Pokémon Activo de tu rival."
		},

		damage: "240-"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654437
	}
}

export default card