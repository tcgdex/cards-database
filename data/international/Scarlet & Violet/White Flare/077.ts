import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [626],
	set: Set,

	name: {
		'en-us': "Bouffalant ex",
		'fr-fr': "Frison-ex",
		'de-de': "Bisofank-ex",
		'it-it': "Bouffalant-ex",
		'pt-br': "Bouffalant ex",
		'es-es': "Bouffalant ex",
		'es-mx': "Bouffalant ex"
	},

	suffix: "ex",
	illustrator: "PLANETA Tsuji",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Bouffer",
			'fr-fr': "Touffe Protectrice",
			'de-de': "Bisopuffer",
			'it-it': "Ammortizzatore",
			'pt-br': "Bouffer",
			'es-es': "Amortiguación",
			'es-mx': "Taurodefensa"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Gold Breaker",
			'fr-fr': "Goliastruction",
			'de-de': "Goldbrecher",
			'it-it': "Rompioro",
			'pt-br': "Quebrador de Ouro",
			'es-es': "Golpe de Oro",
			'es-mx': "Rompeoro"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex, this attack does 100 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 100 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 100 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 100 pontos de dano a mais.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 100 puntos de daño más."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836042,
				tcgplayer: 642190
			}
		},
	],
}

export default card
