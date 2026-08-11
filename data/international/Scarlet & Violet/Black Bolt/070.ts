import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [612],
	set: Set,

	name: {
		'en-us': "Haxorus",
		'fr-fr': "Tranchodon",
		'de-de': "Maxax",
		'it-it': "Haxorus",
		'pt-br': "Haxorus",
		'es-es': "Haxorus",
		'es-mx': "Haxorus"
	},

	illustrator: "Taiga Kasai",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
		'de-de': "Sharfax",
		'it-it': "Fraxure",
		'pt-br': "Fraxure",
		'es-es': "Fraxure",
		'es-mx': "Fraxure"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Cross-Cut",
			'fr-fr': "Coupe Transversale",
			'de-de': "Überkreuzzerschneider",
			'it-it': "Fendente Incrociato",
			'pt-br': "Corte em Cruz",
			'es-es': "Atajar",
			'es-mx': "Corte Cruzado"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 80 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 80 pontos de dano a mais.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 80 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 80 puntos de daño más."
		},

		damage: "80+"
	}, {
		cost: ["Fighting", "Metal", "Colorless"],

		name: {
			'en-us': "Axe Blast",
			'fr-fr': "Explosion de Haches",
			'de-de': "Axtplosion",
			'it-it': "Scure Esplosiva",
			'pt-br': "Estrondo de Machado",
			'es-es': "Hachazo Explosivo",
			'es-mx': "Hachazo Explosivo"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Basic Pokémon, it is Knocked Out.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de base, il est mis K.O.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, ist es kampfunfähig.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Base, viene messo KO.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, ele será Nocauteado.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Básico, queda Fuera de Combate.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon Básico, queda Fuera de Combate."
		}
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836050,
				tcgplayer: 642521
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836050,
				tcgplayer: 642521
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836452,
				tcgplayer: 642762
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836453,
				tcgplayer: 642689
			}
		}
	]
}

export default card
