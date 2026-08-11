import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [1008],
	set: Set,

	name: {
		'en-us': "Miraidon ex",
		'fr-fr': "Miraidon-ex",
		'es-es': "Miraidon ex",
		'it-it': "Miraidon-ex",
		'pt-br': "Miraidon ex",
		'de-de': "Miraidon-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Psychic"],

		name: {
			'en-us': "Repulsion Bolt",
			'fr-fr': "Écrou Répulsion",
			'es-es': "Rayo Aversión",
			'it-it': "Lampo Respingente",
			'pt-br': "Raio de Repulsão",
			'de-de': "Abstoßender Blitz"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 100 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}, {
		cost: ["Lightning", "Psychic", "Colorless"],

		name: {
			'en-us': "Cyber Drive",
			'fr-fr': "Conduite Cybernétique",
			'es-es': "Impulso Cibernético",
			'it-it': "Propulsione Cibernetica",
			'pt-br': "Ciberdireção",
			'de-de': "Cyber-Antrieb"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Cyber Drive.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Conduite Cybernétique.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Impulso Cibernético.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Propulsione Cibernetica.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Ciberdireção.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Cyber-Antrieb nicht einsetzen."
		},

		damage: 220
	}],

	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760752,
				tcgplayer: 542866
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

}

export default card