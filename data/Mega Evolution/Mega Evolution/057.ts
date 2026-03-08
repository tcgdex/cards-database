import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Jynx",
		fr: "Lippoutou",
		de: "Rossana",
		it: "Jynx",
		es: "Jynx",
		pt: "Jynx",
		'es-mx': "Jynx"
	},

	illustrator: "Minahamu",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [124],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			de: "Psychokinese",
			it: "Psichico",
			es: "Psíquico",
			pt: "Psíquico",
			'es-mx': "Fuerza Psíquica"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654396,
		cardmarket: 851128
	}
}

export default card