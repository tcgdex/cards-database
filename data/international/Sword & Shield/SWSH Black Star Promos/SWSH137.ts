import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [849],
	set: Set,
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		'en-us': "Light Toxtricity",
		'fr-fr': "Salarsen lumineux",
		'de-de': "Helles Riffex",
		'es-es': "Toxtricity Claro",
		'pt-br': "Toxtricity Luminoso",
		'it-it': "Light Toxtricity"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		'fr-fr': "Toxizap",
		'de-de': "Toxel",
		'es-es': "Toxel",
		'pt-br': "Toxel",
		'it-it': "Toxel",
		'en-us': "Toxel"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Ballade Douce",
			'de-de': "Langsame Ballade",
			'es-es': "Balada Lenta",
			'pt-br': "Balada Lenta",
			'it-it': "Ballata Lenta",
			'en-us': "Slow Ballad"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts des deux Pokémon Actifs.",
			'de-de': "Heile 30 Schadenspunkte bei beiden Aktiven Pokémon.",
			'es-es': "Cura 30 puntos de daño a ambos Pokémon Activos.",
			'pt-br': "Cure 30 pontos de dano de ambos os Pokémon Ativos.",
			'it-it': "Cura entrambi i Pokémon attivi da 30 danni.",
			'en-us': "Heal 30 damage from both Active Pokémon."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Dérouillée Fracassante",
			'de-de': "Niederprügelnder Schlag",
			'es-es': "Golpe Aplastante",
			'pt-br': "Surra Esmagadora",
			'it-it': "Batosta Devastante",
			'en-us': "Beatdown Smash"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Dérouillée Fracassante.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Niederprügelnder Schlag nicht einsetzen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Aplastante.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Surra Esmagadora.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Batosta Devastante.",
			'en-us': "During your next turn, this Pokémon can't use Beatdown Smash."
		},

		damage: 160
	}],

	retreat: 2,

	description: {
		'en-us': "When this Pokémon sounds as if it's strumming a guitar, it's actually clawing at the protrusions on its chest to generate electricity.",
	},

	thirdParty: {
		cardmarket: 576736
	}
}

export default card
