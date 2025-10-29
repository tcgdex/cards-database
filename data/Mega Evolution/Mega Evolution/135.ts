import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		de: "Kokowei",
		it: "Exeggutor",
		es: "Exeggutor",
		pt: "Exeggutor",
		'es-mx': "Exeggutor"
	},

	illustrator: "Yukihiro Tada",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage1",
	dexId: [103],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
			de: "Schutzdruck",
			it: "Pressadifesa",
			es: "Presión de Guardia",
			pt: "Aperto Protetor",
			'es-mx': "Prensa Guardiana"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 30 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia)."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Stomping Wood",
			fr: "Bois Piétinant",
			de: "Holzstampfer",
			it: "Legnopestone",
			es: "Pisotón Madera",
			pt: "Madeira Pisadeira",
			'es-mx': "Pisotón de Madera"
		},

		effect: {
			en: "This attack does 30 more damage for each {G} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {G} attachée à ce Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {G}-Energie 30 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia {G} assegnata a questo Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía {G} unida a este Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia {G} ligada a este Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada Energía {G} unida a este Pokémon."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654474,
		cardmarket: 851206
	}
}

export default card