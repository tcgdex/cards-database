import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [592],
	set: Set,

	name: {
		'en-us': "Frillish",
		'fr-fr': "Viskuse",
		'de-de': "Quabbel",
		'it-it': "Frillish",
		'pt-br': "Frillish",
		'es-es': "Frillish",
		'es-mx': "Frillish"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Oceanic Gloom",
			'fr-fr': "Noirceur Océanique",
			'de-de': "Meeresdunkel",
			'it-it': "Tenebra Oceanica",
			'pt-br': "Trevas Oceânicas",
			'es-es': "Penumbra Oceánica",
			'es-mx': "Penumbra Oceánica"
		},

		effect: {
			'en-us': "During your opponent's next turn, they can't play any Item cards from their hand.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			'de-de': "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen.",
			'it-it': "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			'pt-br': "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			'es-es': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'es-mx': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano."
		},

		damage: 20
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836142,
				tcgplayer: 642239
			}
		},
	],
}

export default card
