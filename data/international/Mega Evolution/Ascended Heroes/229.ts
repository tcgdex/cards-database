import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Heliolisk",
		'fr-fr': "Iguolta",
		'es-es': "Heliolisk",
		'es-mx': "Heliolisk",
		'de-de': "Elezard",
		'it-it': "Heliolisk",
		'pt-br': "Heliolisk"
	},

	evolveFrom: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
		'es-es': "Helioptile",
		'es-mx': "Helioptile",
		'de-de': "Eguana",
		'it-it': "Helioptile",
		'pt-br': "Helioptile",
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [695],
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Frilled Generator",
			'fr-fr': "Générateur Collerette",
			'es-es': "Generador Expuesto",
			'es-mx': "Generador Plegado",
			'de-de': "Generatorkragen",
			'it-it': "Collargeneratore",
			'pt-br': "Gerador Babado"
		},

		effect: {
			'en-us': "Once during your turn, if you played Canari from your hand this turn, you may use this Ability. Search your deck for up to 2 Basic {L} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Une fois pendant votre tour, si vous avez joué Narica de votre main pendant ce tour, vous pouvez utiliser ce talent. Cherchez dans votre deck jusqu'à 2 cartes Énergie {L} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Una vez durante tu turno, si has jugado Naria de tu mano en este turno, puedes usar esta habilidad. Busca en tu baraja hasta 2 cartas de Energía {L} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'es-mx': "Una vez durante tu turno, si jugaste Naria de tu mano en este turno, puedes usar esta Habilidad. Busca en tu mazo hasta 2 cartas de Energía {L} Básica y únelas a este Pokémon. Después, baraja tu mazo.",
			'de-de': "Einmal während deines Zuges, wenn du Canary während dieses Zuges aus deiner Hand gespielt hast, kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach bis zu 2 Basis-{L}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Una sola volta durante il tuo turno, se hai giocato Canary dalla tua mano durante questo turno, puoi usare questa abilità. Cerca nel tuo mazzo fino a due carte Energia base {L} e assegnale a questo Pokémon. Poi rimischia il tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, se você jogou Canari da sua mão neste turno, você poderá usar esta Habilidade. Procure por até 2 cartas de Energia {L} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Powerful Bolt",
			'fr-fr': "Éclair Massif",
			'es-es': "Rayo Potente",
			'es-mx': "Rayo Poderoso",
			'de-de': "Starker Blitz",
			'it-it': "Fulmine Potente",
			'pt-br': "Centelha Suprema"
		},

		effect: {
			'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 70 damage for each heads.",
			'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 70 puntos de daño por cada cara.",
			'es-mx': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 70 puntos de daño por cada cara.",
			'de-de': "Wirf 1 Münze für jede an dieses Pokémon angelegte Energie. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda para cada Energia ligada a este Pokémon. Este ataque causa 70 pontos de dano para cada cara."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "They flare their frills and generate energy. A single Heliolisk can generate sufficient electricity to power a skyscraper.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869840,
				tcgplayer: 676041
			}
		}
	],
}

export default card
