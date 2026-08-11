import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "The energy made in its cheeks' electric pouches is stored inside its patagial membranes and released while it is gliding.",
	},


	name: {
		'en-us': "Emolga",
		'fr-fr': "Emolga",
		'es-es': "Emolga",
		'es-mx': "Emolga",
		'de-de': "Emolga",
		'it-it': "Emolga",
		'pt-br': "Emolga"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Common",
	category: "Pokemon",
	dexId: [587],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Minor Errand-Running",
			'fr-fr': "Rendez-Vous Mineur",
			'es-es': "Recado Menor",
			'es-mx': "Pequeño Encargo",
			'de-de': "Kleine Besorgung",
			'it-it': "Lavoretto Rapido",
			'pt-br': "Pequena Missão"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía Básica, muéstralas y ponlas en tu mano. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			'en-us': "Sky Return",
			'fr-fr': "Retour Aérien",
			'es-es': "Vuelta Celestial",
			'es-mx': "Retorno Celestial",
			'de-de': "Himmelsgabe",
			'it-it': "Aeroritorno",
			'pt-br': "Retorno para o Céu"
		},

		cost: ["Lightning"],
		damage: 30,

		effect: {
			'en-us': "Put this Pokémon and all attached cards into your hand.",
			'fr-fr': "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			'es-mx': "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			'de-de': "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand.",
			'it-it': "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			'pt-br': "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886422,
				tcgplayer: 693481
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886422,
				tcgplayer: 693481
			}
		},
	],
}

export default card
