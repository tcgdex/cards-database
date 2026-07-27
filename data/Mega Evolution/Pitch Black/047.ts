import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Koraidon",
		fr: "Koraidon",
		es: "Koraidon",
		'es-mx': "Koraidon",
		de: "Koraidon",
		it: "Koraidon",
		pt: "Koraidon"
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
			en: "Battle Claw",
			fr: "Griffe de Combat",
			es: "Garra Combativa",
			'es-mx': "Garra Combativa",
			de: "Kampfkralle",
			it: "Artiglio Lotta",
			pt: "Garra de Batalha"
		},

		cost: ["Fighting"],

		damage: "30+",

		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 30 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 30 puntos de daño más.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 30 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 30 pontos de dano a mais."
		}
	}, {
		name: {
			en: "Gaia Impact",
			fr: "Impact de Gaïa",
			es: "Impacto Gaia",
			'es-mx': "Impacto Gaia",
			de: "Gaia-Einschlag",
			it: "Impatto Gaia",
			pt: "Impacto Gaia"
		},

		cost: ["Fighting", "Fighting", "Colorless"],

		damage: 190,

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			'es-mx': "Descarta todas las Energías de este Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon."
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
			type: "normal",
			thirdParty: {
				cardmarket: 895833,
				tcgplayer: 704804
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895833,
				tcgplayer: 704804
			}
		},
	],
}

export default card
