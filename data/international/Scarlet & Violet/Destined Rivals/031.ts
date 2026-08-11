import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [146],
	set: Set,

	name: {
		'en-us': "Team Rocket's Moltres ex",
		'fr-fr': "Sulfura-ex de la Team Rocket",
		'de-de': "Team Rockets Lavados-ex",
		'it-it': "Moltres-ex del Team Rocket",
		'es-es': "Moltres ex del Team Rocket",
		'pt-br': "Moltres ex da Equipe Rocket",
		'es-mx': "Moltres ex del Equipo Rocket"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Flame Screen",
			'fr-fr': "Barrière de Flammes",
			'de-de': "Flammenschirm",
			'it-it': "Muro di Fuoco",
			'es-es': "Pantallama",
			'pt-br': "Cortina de Chamas",
			'es-mx': "Pantallama"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		},

		damage: 110
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Evil Incineration",
			'fr-fr': "Calcination Maléfique",
			'de-de': "Boshafte Einäscherung",
			'it-it': "Incenerimento Maligno",
			'es-es': "Calcinación Malvada",
			'pt-br': "Incineração do Mal",
			'es-mx': "Calcinación Malvada"
		},

		effect: {
			'en-us': "Discard a Team Rocket's Energy from this Pokémon. If you do, discard your opponent's Active Pokémon and all attached cards.",
			'fr-fr': "Défaussez une Énergie de la Team Rocket de ce Pokémon. Dans ce cas, défaussez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées.",
			'de-de': "Lege 1 Team Rockets Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, lege das Aktive Pokémon deines Gegners und alle angelegten Karten auf seinen Ablagestapel.",
			'it-it': "Scarta un'Energia del Team Rocket da questo Pokémon. Se lo fai, scarta il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate.",
			'es-es': "Descarta 1 Energía del Team Rocket de este Pokémon. Si lo haces, descarta el Pokémon Activo de tu rival y todas las cartas unidas a él.",
			'pt-br': "Descarte uma Energia da Equipe Rocket deste Pokémon. Se fizer isto, descarte o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele.",
			'es-mx': "Descarta 1 Energía del Equipo Rocket de este Pokémon. Si lo haces, descarta el Pokémon Activo de tu rival y todas las cartas unidas a él."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
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
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825904,
				tcgplayer: 630808
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 858284,
			}
		},
	],
}

export default card
