import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Delphox",
		'fr-fr': "Goupelin",
		'es-es': "Delphox",
		'es-mx': "Delphox",
		'de-de': "Fennexis",
		'it-it': "Delphox",
		'pt-br': "Delphox"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Promo",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],
	stage: "Stage2",
	dexId: [655],

	evolveFrom: {
		'en-us': "Braixen",
		'fr-fr': "Roussil",
		'es-es': "Braixen",
		'es-mx': "Braixen",
		'de-de': "Rutena",
		'it-it': "Braixen",
		'pt-br': "Braixen"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Flaring Magic",
			'fr-fr': "Magie Flamboyante",
			'es-es': "Magia Ígnea",
			'es-mx': "Magia Ígnea",
			'de-de': "Feuerzauber",
			'it-it': "Magia Fiammante",
			'pt-br': "Magia Flamejante"
		},

		effect: {
			'en-us': "Once during your turn, you may discard a Basic Fire Energy card from your hand in order to use this Ability. Draw cards until you have 7 cards in your hand.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez défausser une carte Énergie Fire de base de votre main pour utiliser ce talent. Piochez des cartes jusqu'à en avoir 7 en main.",
			'es-es': "Una vez durante tu turno, puedes descartar 1 carta de Energía Fire Básica de tu mano para poder usar esta habilidad. Roba cartas hasta tener 7 cartas en tu mano.",
			'es-mx': "Una vez durante tu turno, puedes descartar 1 carta de Energía Fire Básica de tu mano para poder usar esta habilidad. Roba cartas hasta tener 7 cartas en tu mano.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-Fire-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast.",
			'it-it': "Una sola volta durante il tuo turno, puoi scartare una carta Energia base Fire che hai in mano per usare questa abilità. Pesca fino ad avere sette carte in mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá descartar uma carta de Energia Fire Básica da sua mão para usar esta Habilidade. Compre cartas até ter 7 cartas na sua mão."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Energized Storm",
			'fr-fr': "Tempête Énergisée",
			'es-es': "Tormenta Energética",
			'es-mx': "Tormenta Energética",
			'de-de': "Energiegeladener Sturm",
			'it-it': "Tempesta Energizzata",
			'pt-br': "Tormenta Energizada"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Energy attached to all Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie attachée à tous les Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía unida a cada Pokémon.",
			'es-mx': "Este ataque hace 30 puntos de daño por cada Energía unida a cada Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon angelegte Energie 30 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia assegnata a tutti i Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia ligada a todos os Pokémon."
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 884752,
				tcgplayer: 694679

			}
		},
		{
			type: "holo",
			stamp: ["set-logo","staff"],
			thirdParty: {
				cardmarket: 884753,
				tcgplayer: 694680

			}
		},
	],
}

export default card
