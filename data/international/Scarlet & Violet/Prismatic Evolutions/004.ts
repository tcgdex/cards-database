import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [406],
	set: Set,

	name: {
		'en-us': "Budew",
		'fr-fr': "Rozbouton",
		'es-es': "Budew",
		'pt-br': "Budew",
		'it-it': "Budew",
		'de-de': "Knospi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Itchy Pollen",
			'fr-fr': "Pollen Démangeant",
			'es-es': "Polen Picazón",
			'pt-br': "Comichão de Pólen",
			'it-it': "Polline Urticante",
			'de-de': "Juckende Pollen"
		},

		effect: {
			'en-us': "During your opponent's next turn, they can't play any Item cards from their hand.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			'es-es': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'pt-br': "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			'it-it': "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			'de-de': "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
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
	illustrator: "Yoriyuki Ikegami",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805393,
				tcgplayer: 610359
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805393,
				tcgplayer: 610359
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806414,
				tcgplayer: 610539
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806415,
				tcgplayer: 610640
			}
		},
	],
}

export default card
