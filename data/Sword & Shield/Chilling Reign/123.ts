import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [492],
	set: Set,

	name: {
		en: "Shaymin",
		fr: "Shaymin",
		es: "Shaymin",
		it: "Shaymin",
		pt: "Shaymin",
		de: "Shaymin"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Return",
			fr: "Retour",
			es: "Retribución",
			it: "Ritorno",
			pt: "Retorno",
			de: "Rückkehr"
		},

		effect: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			es: "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			it: "Puoi pescare fino ad avere sei carte in mano.",
			pt: "Você pode comprar cartas até ter 6 cartas na sua mão.",
			de: "Du kannst so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast."
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Sky Return",
			fr: "Retour Aérien",
			es: "Vuelta Celestial",
			it: "Aeroritorno",
			pt: "Retorno para o Céu",
			de: "Himmelsgabe"
		},

		effect: {
			en: "Put this Pokémon and all attached cards into your hand.",
			fr: "Ajoutez à votre main ce Pokémon et toutes les cartes attachées.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
			de: "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand."
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

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers."
	},

	thirdParty: {
		cardmarket: 567231,
		tcgplayer: 241802
	}
}

export default card
