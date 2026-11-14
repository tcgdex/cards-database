import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Kilowattrel",
		fr: "Fulgulairo",
		de: "Voltrean",
		es: "Kilowattrel",
		it: "Kilowattrel",
		pt: "Kilowattrel",
		'es-mx': "Kilowattrel"
	},

	illustrator: "OKACHEKE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Raid",
			fr: "Razzia Obscure",
			de: "Überfall",
			es: "Raid Oscuro",
			it: "Raid",
			pt: "Reide",
			'es-mx': "Redada"
		},

		effect: {
			en: "If this Pokémon evolved from Wattrel during this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a évolué de Zapétrel pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			de: "Wenn sich dieses Pokémon während dieses Zuges aus Voltrel entwickelt hat, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			es: "Si este Pokémon ha evolucionado de Wattrel durante este turno, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon si è evoluto da Wattrel durante questo turno, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon evoluiu de Wattrel durante este turno, este ataque causará 90 pontos de dano a mais.",
			'es-mx': "Si este Pokémon evolucionó de Wattrel durante este turno, este ataque hace 90 puntos de daño más."
		},

		damage: "30+",
		cost: ["Lightning"]
	}, {
		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide",
			de: "Tempohechtsprung",
			es: "Picado Rápido",
			it: "Immersione Rapida",
			pt: "Mergulho Veloz",
			'es-mx': "Descenso Veloz"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 728021,
				cardmarket: 918858
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 728021,
				cardmarket: 918858
			}
		}
	],
}

export default card