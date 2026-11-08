import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [80],
	set: Set,

	name: {
		'fr-fr': "Flagadoss",
		'en-us': "Slowbro",
		'es-es': "Slowbro",
		'it-it': "Slowbro",
		'pt-br': "Slowbro",
		'de-de': "Lahmus"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Ramoloss",
		'en-us': "Slowpoke",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Gros Bâillement",
			'en-us': "Big Yawn",
			'es-es': "Gran Bostezo",
			'it-it': "Gransbadiglio",
			'pt-br': "Grande Bocejo",
			'de-de': "Großer Gähner"
		},

		effect: {
			'fr-fr': "Les deux Pokémon Actifs sont maintenant Endormis.",
			'en-us': "Both Active Pokémon are now Asleep.",
			'es-es': "Ambos Pokémon Activos pasan a estar Dormidos.",
			'it-it': "Entrambi i Pokémon attivi vengono addormentati.",
			'pt-br': "Ambos os Pokémon Ativos agora estão Adormecidos.",
			'de-de': "Beide Aktiven Pokémon schlafen jetzt."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Charge Relaxe",
			'en-us': "Laid-Back Tackle",
			'es-es': "Placaje Relajado",
			'it-it': "Azione Rilassata",
			'pt-br': "Investida Relaxada",
			'de-de': "Träger Tackle"
		},

		effect: {
			'fr-fr': "Si ce Pokémon a évolué pendant ce tour, cette attaque ne fait rien.",
			'en-us': "If this Pokémon evolved during this turn, this attack does nothing.",
			'es-es': "Si este Pokémon ha evolucionado durante este turno, este ataque no hace nada.",
			'it-it': "Se questo Pokémon si è evoluto durante questo turno, questo attacco non ha effetto.",
			'pt-br': "Se este Pokémon evoluiu durante este turno, este ataque não fará nada.",
			'de-de': "Wenn sich dieses Pokémon während dieses Zuges entwickelt hat, hat diese Attacke keine Auswirkungen."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "When a Slowpoke went hunting in the sea, its tail was bitten by a Shellder. That made it evolve into Slowbro.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733675,
				tcgplayer: 516651,
				cardtrader: 261218
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733675,
				tcgplayer: 516651,
				cardtrader: 261218
			}
		},
	],

	illustrator: "OKACHEKE",

	
}

export default card
