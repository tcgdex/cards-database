import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Arven's Mabosstiff ex",
		fr: "Dogrino-ex de Pepper",
		de: "Peppers Mastifioso-ex",
		it: "Mabosstiff-ex di Pepe",
		es: "Mabosstiff ex de Damián",
		pt: "Mabosstiff ex do Arven",
		'es-mx': "Mabosstiff ex de Damián"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Vigorous Tackle",
			fr: "Charge Vigoureuse",
			de: "Energischer Tackle",
			it: "Azione Vigorosa",
			es: "Placaje Rotundo",
			pt: "Investida Vigorosa",
			'es-mx': "Tacleada Vigorosa"
		},

		effect: {
			en: "If this Pokémon has no damage counters on it, this attack does 120 more damage.",
			fr: "Si ce Pokémon n'a aucun marqueur de dégâts, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Wenn auf diesem Pokémon keine Schadensmarken liegen, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon non ha segnalini danno, questo attacco infligge 120 danni in più.",
			es: "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque hace 120 puntos de daño más.",
			pt: "Se este Pokémon não tiver nenhum contador de dano nele, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque hace 120 puntos de daño más."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Boss Headbutt",
			fr: "Coup d'Boule du Boss",
			de: "Kopfnuss vom Boss",
			it: "Bottintesta del Boss",
			es: "Cabezazo del Jefazo",
			pt: "Cabeçada do Chefão",
			'es-mx': "Cabezazo del Jefe"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Boss Headbutt.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup d'Boule du Boss.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Kopfnuss vom Boss nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Bottintesta del Boss.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Cabezazo del Jefazo.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Cabeçada do Chefão.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Cabezazo del Jefe."
		},

		damage: 210
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: 'holo'
		},
	]
}

export default card
