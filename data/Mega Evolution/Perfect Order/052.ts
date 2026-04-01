import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Drapion",
		fr: "Drascore",
		es: "Drapion",
		'es-mx': "Drapion",
		de: "Piondragi",
		it: "Drapion",
		pt: "Drapion"
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Wrack Down",
			fr: "Réduire en Poussière",
			es: "Desmoronar",
			'es-mx': "Desmoronar",
			de: "Niederschleudern",
			it: "Abbattere",
			pt: "Desmoronar"
		},

		damage: 60
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Hazardous Tail",
			fr: "Queue Nocive",
			es: "Cola Nociva",
			'es-mx': "Cola Nociva",
			de: "Bedrohlicher Schweif",
			it: "Coda Insidiosa",
			pt: "Cauda Periculosa"
		},

		effect: {
			en: "This Pokémon also does 70 damage to itself. Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			fr: "Ce Pokémon s'inflige aussi 70 dégâts. Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			es: "Este Pokémon también se hace 70 puntos de daño a sí mismo. El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
			'es-mx': "Este Pokémon también se hace 70 puntos de daño a sí mismo. El Pokémon Activo de tu rival ahora está Envenenado y Paralizado.",
			de: "Dieses Pokémon fügt auch sich selbst 70 Schadenspunkte zu. Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet.",
			it: "Questo Pokémon infligge anche 70 danni a se stesso. Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
			pt: "Este Pokémon também causa 70 pontos de dano a si mesmo. O Pokémon Ativo do seu oponente agora está Envenenado e Paralisado."
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "J"
}

export default card