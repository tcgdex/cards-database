import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magnezone",
		'fr-fr': "Magnézone",
		'de-de': "Magnezone",
		'it-it': "Magnezone",
		'es-es': "Magnezone",
		'pt-br': "Magnezone",
		'es-mx': "Magnezone"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
		'de-de': "Magneton",
		'it-it': "Magneton",
		'es-es': "Magneton",
		'pt-br': "Magneton",
		'es-mx': "Magneton"
	},
	stage: "Stage2",
	dexId: [462],

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Upper Spark",
			'fr-fr': "Étincelle Supérieure",
			'de-de': "Entwicklungsfunke",
			'it-it': "Scintilla Crescente",
			'es-es': "Chispa Superior",
			'pt-br': "Centelha Superior",
			'es-mx': "Chispa Superior"
		},

		effect: {
			'en-us': "If this Pokémon evolved from Magneton during this turn, this attack does 120 more damage.",
			'fr-fr': "Si ce Pokémon a évolué de Magnéton pendant ce tour, cette attaque inflige 120 dégâts supplémentaires.",
			'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Magneton entwickelt hat, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon si è evoluto da Magneton durante questo turno, questo attacco infligge 120 danni in più.",
			'es-es': "Si este Pokémon ha evolucionado de Magneton durante este turno, este ataque hace 120 puntos de daño más.",
			'pt-br': "Se este Pokémon evoluiu de Magneton durante este turno, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si este Pokémon evolucionó de Magneton durante este turno, este ataque hace 120 puntos de daño más."
		},

		damage: "50+"
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Flashing Bolt",
			'fr-fr': "Éclair Aveuglant",
			'de-de': "Leuchtblitz",
			'it-it': "Bolide Abbagliante",
			'es-es': "Rayo Destellante",
			'pt-br': "Raio Piscante",
			'es-mx': "Rayo Destellante"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Flashing Bolt.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Éclair Aveuglant.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Leuchtblitz nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Bolide Abbagliante.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Rayo Destellante.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Raio Piscante.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Rayo Destellante."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851118,
				tcgplayer: 654386
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851118,
				tcgplayer: 654386
			}
		},
	],
}

export default card
