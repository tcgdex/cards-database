import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [151],
	set: Set,

	name: {
		'en-us': "Mew V",
		'fr-fr': "Mew V",
		'es-es': "Mew V",
		'it-it': "Mew V",
		'pt-br': "Mew V",
		'de-de': "Mew V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "E",
	illustrator: "Naoki Saito",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Energy Mix",
			'fr-fr': "Mélange Énergétique",
			'de-de': "Energie-Mix",
			'es-es': "Mezcla de Energía",
			'pt-br': "Mistura de Energias",
			'it-it': "Miscuglio di Energia"
		},

		effect: {
			'en-us': "Search your deck for an Energy card and attach it to 1 of your Fusion Strike Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie, puis attachez-la à l'un de vos Pokémon Poing de Fusion. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Energiekarte und lege sie an 1 deiner Fusionsangriff-Pokémon an. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía y únela a 1 de tus Pokémon Golpe Fusión. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 carta de Energia no seu baralho e ligue-a a 1 dos seus Pokémon Golpe Fusão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo una carta Energia e assegnala a uno dei tuoi Pokémon Colpo Fusione. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Psychic Leap",
			'fr-fr': "Bond Psychique",
			'de-de': "Psycho-Sprung",
			'es-es': "Salto Psíquico",
			'pt-br': "Salto Psíquico",
			'it-it': "Guizzo Psichico"
		},

		damage: 70,

		effect: {
			'en-us': "You may shuffle this Pokémon and all attached cards into your deck.",
			'fr-fr': "Vous pouvez mélanger dans votre deck ce Pokémon et toutes les cartes attachées.",
			'de-de': "Du kannst dieses Pokémon und alle angelegten Karten in dein Deck mischen.",
			'es-es': "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajar todas las cartas.",
			'pt-br': "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			'it-it': "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582987,
				tcgplayer: 253147
			}
		},
	],
}

export default card
