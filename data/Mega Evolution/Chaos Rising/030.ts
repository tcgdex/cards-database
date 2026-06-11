import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "The energy made in its cheeks' electric pouches is stored inside its patagial membranes and released while it is gliding.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886422,
				tcgplayer: 693481
			}
		},
	],

	name: {
		en: "Emolga",
		fr: "Emolga",
		es: "Emolga",
		'es-mx': "Emolga",
		de: "Emolga",
		it: "Emolga",
		pt: "Emolga"
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
			en: "Minor Errand-Running",
			fr: "Rendez-Vous Mineur",
			es: "Recado Menor",
			'es-mx': "Pequeño Encargo",
			de: "Kleine Besorgung",
			it: "Lavoretto Rapido",
			pt: "Pequena Missão"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía Básica, muéstralas y ponlas en tu mano. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			en: "Sky Return",
			fr: "Retour Aérien",
			es: "Vuelta Celestial",
			'es-mx': "Retorno Celestial",
			de: "Himmelsgabe",
			it: "Aeroritorno",
			pt: "Retorno para o Céu"
		},

		cost: ["Lightning"],
		damage: 30,

		effect: {
			en: "Put this Pokémon and all attached cards into your hand.",
			fr: "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			'es-mx': "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			de: "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand.",
			it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card