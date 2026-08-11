import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [836],
	set: Set,

	name: {
		'en-us': "Boltund VMAX",
		'fr-fr': "Fulgudog VMAX",
		'es-es': "Boltund VMAX",
		'it-it': "Boltund VMAX",
		'pt-br': "Boltund VMAX",
		'de-de': "Bellektro VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Boltund V",
		'fr-fr': "Fulgudog-V",
		'es-es': "Boltund V",
		'it-it': "Boltund-V",
		'pt-br': "Boltund V",
		'de-de': "Bellektro-V"
	},

	stage: "VMAX",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "PLANETA Tsuji",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Bolt Storm",
			'fr-fr': "Tempête Éclair",
			'de-de': "Elektrosturm",
			'es-es': "Tormenta de Relámpagos",
			'pt-br': "Tempestade Relampejante",
			'it-it': "Fulmintempesta"
		},

		damage: "30+",

		effect: {
			'en-us': "This attack does 30 more damage for each {L} Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {L} attachée à tous vos Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte {L}-Energie 30 Schadenspunkte mehr zu.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía {L} unida a todos tus Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia {L} ligada a todos os seus Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia {L} assegnata ai tuoi Pokémon."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Max Bolt",
			'fr-fr': "Foudromax",
			'de-de': "Dyna-Elektroblitz",
			'es-es': "Maxirrelámpago",
			'pt-br': "Corisco Max",
			'it-it': "Dynafulmine"
		},

		damage: 230,

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Max Bolt.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Foudromax.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Dyna-Elektroblitz nicht einsetzen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Maxirrelámpago.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Corisco Max.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Dynafulmine."
		}
	}],


	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 583014,
				tcgplayer: 253174
			}
		},
	],
}

export default card
