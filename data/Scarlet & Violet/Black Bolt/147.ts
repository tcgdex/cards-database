import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [612],
	set: Set,

	name: {
		en: "Haxorus",
		fr: "Tranchodon",
		de: "Maxax",
		it: "Haxorus",
		pt: "Haxorus",
		es: "Haxorus",
		'es-mx': "Haxorus"
	},

	illustrator: "akagi",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
		de: "Sharfax",
		it: "Fraxure",
		pt: "Fraxure",
		es: "Fraxure",
		'es-mx': "Fraxure"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Cross-Cut",
			fr: "Coupe Transversale",
			de: "Überkreuzzerschneider",
			it: "Fendente Incrociato",
			pt: "Corte em Cruz",
			es: "Atajar",
			'es-mx': "Corte Cruzado"
		},

		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 80 pontos de dano a mais.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 80 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 80 puntos de daño más."
		},

		damage: "80+"
	}, {
		cost: ["Fighting", "Metal", "Colorless"],

		name: {
			en: "Axe Blast",
			fr: "Explosion de Haches",
			de: "Axtplosion",
			it: "Scure Esplosiva",
			pt: "Estrondo de Machado",
			es: "Hachazo Explosivo",
			'es-mx': "Hachazo Explosivo"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Basic Pokémon, it is Knocked Out.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, il est mis K.O.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, ist es kampfunfähig.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, viene messo KO.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, ele será Nocauteado.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, queda Fuera de Combate.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon Básico, queda Fuera de Combate."
		}
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836217
			}
		},
	]
}

export default card
