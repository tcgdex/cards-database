import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [49],
	set: Set,

	name: {
		'fr-fr': "Aéromite",
		'en-us': "Venomoth",
		'es-es': "Venomoth",
		'it-it': "Venomoth",
		'pt-br': "Venomoth",
		'de-de': "Omot"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Mimitoss",
		'en-us': "Venonat",
		'es-es': "Venonat",
		'it-it': "Venonat",
		'pt-br': "Venonat",
		'de-de': "Bluzuk"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Poudre de Perplexité",
			'en-us': "Perplexing Powder",
			'es-es': "Polvareda Desconcertante",
			'it-it': "Polvere Sconcertante",
			'pt-br': "Pó Desconcertante",
			'de-de': "Verblüffender Puder"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus. Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			'en-us': "Your opponent's Active Pokémon is now Confused. During your opponent's next turn, they can't play any Item cards from their hand.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido. Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso. Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso. Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Ailes Vives",
			'en-us': "Speed Wing",
			'es-es': "Ala Veloz",
			'it-it': "Alaveloce",
			'pt-br': "Asa da Velocidade",
			'de-de': "Turboschwinge"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733644,
				tcgplayer: 516213,
				cardtrader: 261222
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733644,
				tcgplayer: 516213,
				cardtrader: 261222
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	
}

export default card
