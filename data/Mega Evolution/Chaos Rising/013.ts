import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		en: "Delphox",
		fr: "Goupelin",
		es: "Delphox",
		'es-mx': "Delphox",
		de: "Fennexis",
		it: "Delphox",
		pt: "Delphox"
	},

	illustrator: "Gemi",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [655],
	hp: 160,
	types: ["Fire"],

	evolveFrom: {
		en: "Braixen"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flaring Magic",
			fr: "Magie Flamboyante",
			es: "Magia Ígnea",
			'es-mx': "Magia Ígnea",
			de: "Feuerzauber",
			it: "Magia Fiammante",
			pt: "Magia Flamejante"
		},

		effect: {
			en: "Once during your turn, you may discard a Basic {R} Energy card from your hand in order to use this Ability. Draw cards until you have 7 cards in your hand.",
			fr: "Une fois pendant votre tour, vous pouvez défausser une carte Énergie {R} de base de votre main pour utiliser ce talent. Piochez des cartes jusqu'à en avoir 7 en main.",
			es: "Una vez durante tu turno, puedes descartar 1 carta de Energía {R} Básica de tu mano para poder usar esta habilidad. Roba cartas hasta tener 7 cartas en tu mano.",
			'es-mx': "Una vez durante tu turno, puedes descartar 1 carta de Energía {R} Básica de tu mano para usar esta Habilidad. Roba cartas hasta que tengas 7 cartas en tu mano.",
			de: "Einmal während deines Zuges kannst du 1 Basis-{R}-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast.",
			it: "Una sola volta durante il tuo turno, puoi scartare una carta Energia base {R} che hai in mano per usare questa abilità. Pesca fino ad avere sette carte in mano.",
			pt: "Uma vez durante o seu turno, você poderá descartar uma carta de Energia {R} Básica da sua mão para usar esta Habilidade. Compre cartas até ter 7 cartas na sua mão."
		}
	}],

	attacks: [{
		name: {
			en: "Energized Storm",
			fr: "Tempête Énergisée",
			es: "Tormenta Energética",
			'es-mx': "Tormenta Energética",
			de: "Energiegeladener Sturm",
			it: "Tempesta Energizzata",
			pt: "Tormenta Energizada"
		},

		cost: ["Fire", "Fire"],
		damage: "30×",

		effect: {
			en: "This attack does 30 damage for each Energy attached to all Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée à tous les Pokémon.",
			es: "Este ataque hace 30 puntos de daño por cada Energía unida a cada Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Energía unida a cada Pokémon.",
			de: "Diese Attacke fügt für jede an alle Pokémon angelegte Energie 30 Schadenspunkte zu.",
			it: "Questo attacco infligge 30 danni per ogni Energia assegnata a tutti i Pokémon.",
			pt: "Este ataque causa 30 pontos de dano para cada Energia ligada a todos os Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888552,
				tcgplayer: 693473
			}
		},
		{
			type: 'holo',
			stamp: ['set-logo'],
			thirdParty: {
				cardmarket: 886624
			}
		},
	],
}

export default card
