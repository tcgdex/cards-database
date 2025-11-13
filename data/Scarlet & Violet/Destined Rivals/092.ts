import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [979],
	set: Set,

	name: {
		en: "Annihilape",
		fr: "Courrousinge",
		de: "Epitaff",
		it: "Annihilape",
		es: "Annihilape",
		pt: "Annihilape",
		'es-mx': "Annihilape"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		en: "Primeape",
		fr: "Colossinge",
		de: "Rasaff",
		it: "Primeape",
		es: "Primeape",
		pt: "Primeape",
		'es-mx': "Primeape"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lose Cool",
			fr: "Perte de Sang-Froid",
			de: "Fassung verlieren",
			it: "Perdicalma",
			es: "Perder la Calma",
			pt: "Com a Macaca",
			'es-mx': "Fuera de Quicio"
		},

		effect: {
			en: "If this Pokémon has 2 or more damage counters on it, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Si ce Pokémon a au moins 2 marqueurs de dégâts, les attaques utilisées par ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			de: "Wenn auf diesem Pokémon 2 oder mehr Schadensmarken liegen, fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Se questo Pokémon ha due o più segnalini danno, gli attacchi usati da questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			es: "Si este Pokémon tiene 2 contadores de daño o más sobre él, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			pt: "Se este Pokémon tiver 2 ou mais contadores de dano nele, os ataques usados por este Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Si este Pokémon tiene 2 contadores de daño o más sobre él, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Impact Blow",
			fr: "Coup à Impact",
			de: "Einschlag",
			it: "Colpoimpatto",
			es: "Golpe Impactante",
			pt: "Golpe Impactante",
			'es-mx': "Golpe Impactante"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Impact Blow.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup à Impact.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Einschlag nicht einsetzen.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpoimpatto.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Impactante.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	]
}

export default card
