import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [492],
	set: Set,

	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'es-es': "Shaymin",
		'it-it': "Shaymin",
		'pt-br': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Return",
			'fr-fr': "Retour",
			'es-es': "Retribución",
			'it-it': "Ritorno",
			'pt-br': "Retorno",
			'de-de': "Rückkehr"
		},

		effect: {
			'en-us': "You may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'es-es': "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'it-it': "Puoi pescare fino ad avere sei carte in mano.",
			'pt-br': "Você pode comprar cartas até ter 6 cartas na sua mão.",
			'de-de': "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast."
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Sky Return",
			'fr-fr': "Retour Aérien",
			'es-es': "Vuelta Celestial",
			'it-it': "Aeroritorno",
			'pt-br': "Retorno para o Céu",
			'de-de': "Himmelsgabe"
		},

		effect: {
			'en-us': "Put this Pokémon and all attached cards into your hand.",
			'fr-fr': "Ajoutez à votre main ce Pokémon et toutes les cartes attachées.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			'it-it': "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			'pt-br': "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
			'de-de': "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567231,
				tcgplayer: 241802
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567231,
				tcgplayer: 241802
			}
		},
	],
}

export default card
