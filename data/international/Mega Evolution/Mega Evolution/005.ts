import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'de-de': "Kokowei",
		'it-it': "Exeggutor",
		'es-es': "Exeggutor",
		'pt-br': "Exeggutor",
		'es-mx': "Exeggutor"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'de-de': "Owei",
		'it-it': "Exeggcute",
		'es-es': "Exeggcute",
		'pt-br': "Exeggcute",
		'es-mx': "Exeggcute"
	},
	stage: "Stage1",
	dexId: [103],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Guard Press",
			'fr-fr': "Pression de Garde",
			'de-de': "Schutzdruck",
			'it-it': "Pressadifesa",
			'es-es': "Presión de Guardia",
			'pt-br': "Aperto Protetor",
			'es-mx': "Prensa Guardiana"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 30 puntos de daño menos de ataques (después de aplicar Debilidad y Resistencia)."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Stomping Wood",
			'fr-fr': "Bois Piétinant",
			'de-de': "Holzstampfer",
			'it-it': "Legnopestone",
			'es-es': "Pisotón Madera",
			'pt-br': "Madeira Pisadeira",
			'es-mx': "Pisotón de Madera"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each {G} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {G} attachée à ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {G}-Energie 30 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia {G} assegnata a questo Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía {G} unida a este Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia {G} ligada a este Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada Energía {G} unida a este Pokémon."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851076,
				tcgplayer: 654344
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851076,
				tcgplayer: 654344
			}
		},
	],
}

export default card
