import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [610],
	set: Set,

	name: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
		'de-de': "Milza",
		'it-it': "Axew",
		'pt-br': "Axew",
		'es-es': "Axew",
		'es-mx': "Axew"
	},

	illustrator: "Taiga Kasai",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gather Strength",
			'fr-fr': "Pouvoir Collecté",
			'de-de': "Kraftsammler",
			'it-it': "Radunaforze",
			'pt-br': "Reunir Força",
			'es-es': "Reunir Fuerzas",
			'es-mx': "Reunir Fuerzas"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía Básica, muéstralas y ponlas en tu mano. Después, baraja las cartas de tu mazo."
		}
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836047,
				tcgplayer: 642519
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836047,
				tcgplayer: 642519
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836448,
				tcgplayer: 642760
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836449,
				tcgplayer: 642687
			}
		}
	]
}

export default card
