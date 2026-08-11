import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [979],
	set: Set,

	name: {
		'en-us': "Annihilape",
		'fr-fr': "Courrousinge",
		'de-de': "Epitaff",
		'it-it': "Annihilape",
		'es-es': "Annihilape",
		'pt-br': "Annihilape",
		'es-mx': "Annihilape"
	},


	illustrator: "Shiburingaru",

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'de-de': "Rasaff",
		'it-it': "Primeape",
		'es-es': "Primeape",
		'pt-br': "Primeape",
		'es-mx': "Primeape"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lose Cool",
			'fr-fr': "Perte de Sang-Froid",
			'de-de': "Fassung verlieren",
			'it-it': "Perdicalma",
			'es-es': "Perder la Calma",
			'pt-br': "Com a Macaca",
			'es-mx': "Fuera de Quicio"
		},

		effect: {
			'en-us': "If this Pokémon has 2 or more damage counters on it, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Si ce Pokémon a au moins 2 marqueurs de dégâts, les attaques utilisées par ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Wenn auf diesem Pokémon 2 oder mehr Schadensmarken liegen, fügen die von diesem Pokémon eingesetzten Attacken dem Aktiven Pokémon deines Gegners 120 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Se questo Pokémon ha due o più segnalini danno, gli attacchi usati da questo Pokémon infliggono 120 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'es-es': "Si este Pokémon tiene 2 contadores de daño o más sobre él, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Se este Pokémon tiver 2 ou mais contadores de dano nele, os ataques usados por este Pokémon causarão 120 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Si este Pokémon tiene 2 contadores de daño o más sobre él, los ataques usados por este Pokémon hacen 120 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Impact Blow",
			'fr-fr': "Coup à Impact",
			'de-de': "Einschlag",
			'it-it': "Colpoimpatto",
			'es-es': "Golpe Impactante",
			'pt-br': "Golpe Impactante",
			'es-mx': "Golpe Impactante"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Impact Blow.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup à Impact.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Einschlag nicht einsetzen.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpoimpatto.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Impactante.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825966,
				tcgplayer: 632901
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825966,
				tcgplayer: 632901
			}
		},
	],
}

export default card
