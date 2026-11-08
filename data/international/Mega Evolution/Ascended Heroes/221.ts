import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Budew",
		'fr-fr': "Rozbouton",
		'es-es': "Budew",
		'es-mx': "Budew",
		'de-de': "Knospi",
		'it-it': "Budew",
		'pt-br': "Budew"
	},

	illustrator: "Yoko Hishida",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [406],
	hp: 30,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Itchy Pollen",
			'fr-fr': "Pollen Démangeant",
			'es-es': "Polen Picazón",
			'es-mx': "Polen Picazón",
			'de-de': "Juckende Pollen",
			'it-it': "Polline Urticante",
			'pt-br': "Comichão de Pólen"
		},

		effect: {
			'en-us': "During your opponent's next turn, they can't play any Item cards from their hand.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			'es-es': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'es-mx': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'de-de': "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen.",
			'it-it': "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			'pt-br': "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "H",

	description: {
		'en-us': "The pollen it releases contains poison. If this Pokémon is raised on clean water, the poison’s toxicity is increased.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869832,
				tcgplayer: 676033
			}
		}
	],
}

export default card
