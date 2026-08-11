import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [232],
	set: Set,

	name: {
		'en-us': "Donphan",
		'fr-fr': "Donphan",
		'es-es': "Donphan",
		'it-it': "Donphan",
		'pt-br': "Donphan",
		'de-de': "Donphan"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'es-es': "Phanpy",
		'it-it': "Phanpy",
		'pt-br': "Phanpy",
		'de-de': "Phanpy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Cragalanche",
			'fr-fr': "Lapidalanche",
			'es-es': "Rocalud",
			'it-it': "Valanghiaia",
			'pt-br': "Rochavalanche",
			'de-de': "Grolllawine"
		},

		effect: {
			'en-us': "Discard the top 2 cards of your opponent's deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
			'pt-br': "Descarte as 2 cartas de cima do baralho do seu oponente.",
			'de-de': "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Powerful Spin",
			'fr-fr': "Pirouette Puissante",
			'es-es': "Supergiro",
			'it-it': "Supergiro",
			'pt-br': "Pirueta Potente",
			'de-de': "Mächtiger Wirbler"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751586,
				tcgplayer: 534210,
				cardtrader: 274233
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751586,
				tcgplayer: 534210,
				cardtrader: 274233
			}
		},
	],

	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "Donphan is covered in tough hide, so even being hit by a car won't faze this Pokémon. However, it is extremely susceptible to rain.",
	},

}

export default card
