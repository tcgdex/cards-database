import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [149],
	set: Set,

	name: {
		'fr-fr': "Dracolosse",
		'en-us': "Dragonite",
		'es-es': "Dragonite",
		'it-it': "Dragonite",
		'pt-br': "Dragonite",
		'de-de': "Dragoran"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Dragon"],
	evolveFrom: {
		'fr-fr': "Draco",
		'en-us': "Dragonair",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
		'de-de': "Dragonir"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Propulsion de Croisière",
			'en-us': "Jet Cruise",
			'es-es': "Travesía Propulsión",
			'it-it': "Crociera Jet",
			'pt-br': "Navegação a Jato",
			'de-de': "Jet-Cruisen"
		},

		effect: {
			'fr-fr': "Vos Pokémon en jeu n'ont pas de Coût de Retraite.",
			'en-us': "Your Pokémon in play have no Retreat Cost.",
			'es-es': "Tus Pokémon en juego no tienen ningún Coste de Retirada.",
			'it-it': "I tuoi Pokémon in gioco non hanno costo di ritirata.",
			'pt-br': "Seus Pokémon em jogo não têm custo de Recuo.",
			'de-de': "Deine Pokémon im Spiel haben keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Water", "Lightning"],

		name: {
			'fr-fr': "Draco-Choc",
			'en-us': "Dragon Pulse",
			'es-es': "Pulso Dragón",
			'it-it': "Dragopulsar",
			'pt-br': "Pulso do Dragão",
			'de-de': "Drachenpuls"
		},

		effect: {
			'fr-fr': "Défaussez les 2 cartes du dessus de votre deck.",
			'en-us': "Discard the top 2 cards of your deck.",
			'es-es': "Descarta las 2 primeras cartas de tu baraja.",
			'it-it': "Scarta le prime due carte del tuo mazzo.",
			'pt-br': "Descarte as 2 cartas de cima do seu baralho.",
			'de-de': "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 180
	}],

	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It is said that somewhere in the ocean lies an island where these gather. Only they live there.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733744,
				tcgplayer: 516712,
				cardtrader: 261228
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733744,
				tcgplayer: 516712,
				cardtrader: 261228
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 864952
			}
		},
	],

	illustrator: "Sanosuke Sakuma",

	
}

export default card
