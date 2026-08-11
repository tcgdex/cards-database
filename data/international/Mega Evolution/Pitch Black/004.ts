import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lurantis ex",
		'fr-fr': "Floramantis-ex",
		'es-es': "Lurantis ex",
		'es-mx': "Lurantis ex",
		'de-de': "Mantidea-ex",
		'it-it': "Lurantis-ex",
		'pt-br': "Lurantis ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [754],
	hp: 260,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Fomantis"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Lively Cutter",
			'fr-fr': "Lame Animée",
			'es-es': "Cuchilla Animada",
			'es-mx': "Corte Vivaracho",
			'de-de': "Rasante Schneide",
			'it-it': "Taglio Vispo",
			'pt-br': "Cortador Vigoroso"
		},

		cost: ["Grass"],

		damage: "60+",

		effect: {
			'en-us': "If this Pokémon was healed during this turn, this attack does 200 more damage.",
			'fr-fr': "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 200 dégâts supplémentaires.",
			'es-es': "Si este Pokémon ha sido curado durante este turno, este ataque hace 200 puntos de daño más.",
			'es-mx': "Si este Pokémon fue curado durante este turno, este ataque hace 200 puntos de daño más.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 200 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 200 danni in più.",
			'pt-br': "Se este Pokémon tiver sido curado durante este turno, este ataque causará 200 pontos de dano a mais."
		}
	}, {
		name: {
			'en-us': "Leaf Guard",
			'fr-fr': "Feuille Garde",
			'es-es': "Defensa Hoja",
			'es-mx': "Defensa Hoja",
			'de-de': "Floraschild",
			'it-it': "Fogliamanto",
			'pt-br': "Guarda Folha"
		},

		cost: ["Grass", "Colorless"],

		damage: 140,

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 50 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895792,
				tcgplayer: 704761
			}
		},
	],
}

export default card
