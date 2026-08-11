import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [591],
	set: Set,

	name: {
		'en-us': "Amoonguss",
		'fr-fr': "Gaulet",
		'de-de': "Hutsassa",
		'it-it': "Amoonguss",
		'pt-br': "Amoonguss",
		'es-es': "Amoonguss",
		'es-mx': "Amoonguss"
	},

	illustrator: "Kurata So",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
		'de-de': "Tarnpignon",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'es-es': "Foongus",
		'es-mx': "Foongus"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dangerous Reaction",
			'fr-fr': "Réaction Dangereuse",
			'de-de': "Gefährliche Reaktion",
			'it-it': "Reazione Pericolosa",
			'pt-br': "Reação Perigosa",
			'es-es': "Reacción Peligrosa",
			'es-mx': "Reacción Peligrosa"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 120 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 120 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 120 pontos de dano a mais.",
			'es-es': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 120 puntos de daño más."
		},

		damage: "30+"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'de-de': "Samenbomben",
			'it-it': "Semebomba",
			'pt-br': "Bomba de Sementes",
			'es-es': "Bomba Germen",
			'es-mx': "Bomba Semilla"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835922,
				tcgplayer: 642460
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835922,
				tcgplayer: 642460
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836278,
				tcgplayer: 642705
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836280,
				tcgplayer: 642633
			}
		}
	],
}

export default card
