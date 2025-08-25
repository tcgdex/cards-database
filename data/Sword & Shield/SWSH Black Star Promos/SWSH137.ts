import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [849],
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Light Toxtricity",
		fr: "Salarsen lumineux",
		de: "Helles Riffex",
		es: "Toxtricity Claro",
		pt: "Toxtricity Luminoso",
		it: "Light Toxtricity"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	evolveFrom: {
		fr: "Toxizap",
		de: "Toxel",
		es: "Toxel",
		pt: "Toxel",
		it: "Toxel",
		en: "Toxel"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Ballade Douce",
			de: "Langsame Ballade",
			es: "Balada Lenta",
			pt: "Balada Lenta",
			it: "Ballata Lenta",
			en: "Slow Ballad"
		},

		effect: {
			fr: "Soignez 30 dégâts des deux Pokémon Actifs.",
			de: "Heile 30 Schadenspunkte bei beiden Aktiven Pokémon.",
			es: "Cura 30 puntos de daño a ambos Pokémon Activos.",
			pt: "Cure 30 pontos de dano de ambos os Pokémon Ativos.",
			it: "Cura entrambi i Pokémon attivi da 30 danni.",
			en: "Heal 30 damage from both Active Pokémon."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Dérouillée Fracassante",
			de: "Niederprügelnder Schlag",
			es: "Golpe Aplastante",
			pt: "Surra Esmagadora",
			it: "Batosta Devastante",
			en: "Beatdown Smash"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Dérouillée Fracassante.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Niederprügelnder Schlag nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Aplastante.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Surra Esmagadora.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Batosta Devastante.",
			en: "During your next turn, this Pokémon can't use Beatdown Smash."
		},

		damage: 160
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 576736
	}
}

export default card