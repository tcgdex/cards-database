import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [626],
	set: Set,

	name: {
		en: "Bouffalant ex",
		fr: "Frison-ex",
		de: "Bisofank-ex",
		it: "Bouffalant-ex",
		pt: "Bouffalant ex",
		es: "Bouffalant ex",
		'es-mx': "Bouffalant ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Bouffer",
			fr: "Touffe Protectrice",
			de: "Bisopuffer",
			it: "Ammortizzatore",
			pt: "Bouffer",
			es: "Amortiguación",
			'es-mx': "Taurodefensa"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Gold Breaker",
			fr: "Goliastruction",
			de: "Goldbrecher",
			it: "Rompioro",
			pt: "Quebrador de Ouro",
			es: "Golpe de Oro",
			'es-mx': "Rompeoro"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 100 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 100 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 100 pontos de dano a mais.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 100 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 100 puntos de daño más."
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card