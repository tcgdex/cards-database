import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [146],
	set: Set,

	name: {
		en: "Team Rocket's Moltres ex",
		fr: "Sulfura-ex de la Team Rocket",
		de: "Team Rockets Lavados-ex",
		it: "Moltres-ex del Team Rocket",
		es: "Moltres ex del Team Rocket",
		pt: "Moltres ex da Equipe Rocket",
		'es-mx': "Moltres ex del Equipo Rocket"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Flame Screen",
			fr: "Barrière de Flammes",
			de: "Flammenschirm",
			it: "Muro di Fuoco",
			es: "Pantallama",
			pt: "Cortina de Chamas",
			'es-mx': "Pantallama"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			es: "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		},

		damage: 110
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Evil Incineration",
			fr: "Calcination Maléfique",
			de: "Boshafte Einäscherung",
			it: "Incenerimento Maligno",
			es: "Calcinación Malvada",
			pt: "Incineração do Mal",
			'es-mx': "Calcinación Malvada"
		},

		effect: {
			en: "Discard a Team Rocket's Energy from this Pokémon. If you do, discard your opponent's Active Pokémon and all attached cards.",
			fr: "Défaussez une Énergie de la Team Rocket de ce Pokémon. Dans ce cas, défaussez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées.",
			de: "Lege 1 Team Rockets Energie von diesem Pokémon auf deinen Ablagestapel. Wenn du das machst, lege das Aktive Pokémon deines Gegners und alle angelegten Karten auf seinen Ablagestapel.",
			it: "Scarta un'Energia del Team Rocket da questo Pokémon. Se lo fai, scarta il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate.",
			es: "Descarta 1 Energía del Team Rocket de este Pokémon. Si lo haces, descarta el Pokémon Activo de tu rival y todas las cartas unidas a él.",
			pt: "Descarte uma Energia da Equipe Rocket deste Pokémon. Se fizer isto, descarte o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele.",
			'es-mx': "Descarta 1 Energía del Equipo Rocket de este Pokémon. Si lo haces, descarta el Pokémon Activo de tu rival y todas las cartas unidas a él."
		}
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'holo'
		},
	]
}

export default card
