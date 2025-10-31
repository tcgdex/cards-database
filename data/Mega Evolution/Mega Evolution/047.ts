import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Magnezone",
		fr: "Magnézone",
		de: "Magnezone",
		it: "Magnezone",
		es: "Magnezone",
		pt: "Magnezone",
		'es-mx': "Magnezone"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	stage: "Stage2",
	dexId: [462],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Upper Spark",
			fr: "Étincelle Supérieure",
			de: "Entwicklungsfunke",
			it: "Scintilla Crescente",
			es: "Chispa Superior",
			pt: "Centelha Superior",
			'es-mx': "Chispa Superior"
		},

		effect: {
			en: "If this Pokémon evolved from Magneton during this turn, this attack does 120 more damage.",
			fr: "Si ce Pokémon a évolué de Magnéton pendant ce tour, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Wenn sich dieses Pokémon während dieses Zuges aus Magneton entwickelt hat, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon si è evoluto da Magneton durante questo turno, questo attacco infligge 120 danni in più.",
			es: "Si este Pokémon ha evolucionado de Magneton durante este turno, este ataque hace 120 puntos de daño más.",
			pt: "Se este Pokémon evoluiu de Magneton durante este turno, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si este Pokémon evolucionó de Magneton durante este turno, este ataque hace 120 puntos de daño más."
		},

		damage: "50+"
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Flashing Bolt",
			fr: "Éclair Aveuglant",
			de: "Leuchtblitz",
			it: "Bolide Abbagliante",
			es: "Rayo Destellante",
			pt: "Raio Piscante",
			'es-mx': "Rayo Destellante"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Flashing Bolt.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Éclair Aveuglant.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Leuchtblitz nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Bolide Abbagliante.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Rayo Destellante.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Raio Piscante.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Rayo Destellante."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654386,
		cardmarket: 851118
	}
}

export default card