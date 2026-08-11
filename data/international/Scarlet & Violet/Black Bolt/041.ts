import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [606],
	set: Set,

	name: {
		'en-us': "Beheeyem",
		'fr-fr': "Neitram",
		'de-de': "Megalon",
		'it-it': "Beheeyem",
		'pt-br': "Beheeyem",
		'es-es': "Beheeyem",
		'es-mx': "Beheeyem"
	},

	illustrator: "Apios",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
		'de-de': "Pygraulon",
		'it-it': "Elgyem",
		'pt-br': "Elgyem",
		'es-es': "Elgyem",
		'es-mx': "Elgyem"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Calm Mind",
			'fr-fr': "Plénitude",
			'de-de': "Gedankengut",
			'it-it': "Calmamente",
			'pt-br': "Mente Calma",
			'es-es': "Paz Mental",
			'es-mx': "Paz Mental"
		},

		effect: {
			'en-us': "Heal 40 damage from this Pokémon.",
			'fr-fr': "Soignez 40 dégâts de ce Pokémon.",
			'de-de': "Heile 40 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 40 danni.",
			'pt-br': "Cure 40 pontos de dano deste Pokémon.",
			'es-es': "Cura 40 puntos de daño a este Pokémon.",
			'es-mx': "Cura 40 puntos de daño a este Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'de-de': "Psychokinese",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'es-es': "Psíquico",
			'es-mx': "Fuerza Psíquica"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival."
		},

		damage: "80+"
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835989,
				tcgplayer: 642493
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835989,
				tcgplayer: 642493
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836362,
				tcgplayer: 642737
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836364,
				tcgplayer: 642664
			}
		}
	]
}

export default card
