import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Koraidon",
		'fr-fr': "Koraidon",
		'es-es': "Koraidon",
		'es-mx': "Koraidon",
		'de-de': "Koraidon",
		'it-it': "Koraidon",
		'pt-br': "Koraidon"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1007],
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Battle Claw",
			'fr-fr': "Griffe de Combat",
			'es-es': "Garra Combativa",
			'es-mx': "Garra Combativa",
			'de-de': "Kampfkralle",
			'it-it': "Artiglio Lotta",
			'pt-br': "Garra de Batalha"
		},

		cost: ["Fighting"],

		damage: "30+",

		effect: {
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 30 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 30 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 30 puntos de daño más.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 30 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 30 pontos de dano a mais."
		}
	}, {
		name: {
			'en-us': "Gaia Impact",
			'fr-fr': "Impact de Gaïa",
			'es-es': "Impacto Gaia",
			'es-mx': "Impacto Gaia",
			'de-de': "Gaia-Einschlag",
			'it-it': "Impatto Gaia",
			'pt-br': "Impacto Gaia"
		},

		cost: ["Fighting", "Fighting", "Colorless"],

		damage: 190,

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895833,
				tcgplayer: 704804
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895833,
				tcgplayer: 704804
			}
		}
	],
}

export default card
