import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [978],
	set: Set,

	name: {
		'en-us': "Tatsugiri",
		'fr-fr': "Nigirigon",
		'es-es': "Tatsugiri",
		'it-it': "Tatsugiri",
		'pt-br': "Tatsugiri",
		'de-de': "Nigiragi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Survival Strategy",
			'fr-fr': "Stratégie de Survie",
			'es-es': "Estrategia de Supervivencia",
			'it-it': "Strategia di Sopravvivenza",
			'pt-br': "Estratégia de Sobrevivência",
			'de-de': "Überlebensstrategie"
		},

		effect: {
			'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck. You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck. Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja. Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo. Puoi scambiare questo Pokémon con uno della tua panchina.",
			'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho. Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck. Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		}
	}],

	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Tatsugiri is an extremely cunning Pokémon. It feigns weakness to lure in prey, then orders its partner to attack.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740679,
				tcgplayer: 523822,
				cardtrader: 265261
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740679,
				tcgplayer: 523822,
				cardtrader: 265261
			}
		},
	],

	illustrator: "Shibuzoh.",

	
}

export default card
