import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [340],
	set: Set,

	name: {
		'fr-fr': "Barbicha",
		'en-us': "Whiscash",
		'es-es': "Whiscash",
		'it-it': "Whiscash",
		'pt-br': "Whiscash",
		'de-de': "Welsar"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Barloche",
		'en-us': "Barboach",
		'es-es': "Barboach",
		'it-it': "Barboach",
		'pt-br': "Barboach",
		'de-de': "Schmerbe"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Rage et Roulis",
			'en-us': "Raging and Rocking",
			'es-es': "Furia y Temblor",
			'it-it': "Scossone Furioso",
			'pt-br': "Sacudida Irada",
			'de-de': "Wüten und Wackeln"
		},

		effect: {
			'fr-fr': "Pour chaque Énergie {F} attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			'en-us': "For each {F} Energy attached to this Pokémon, discard the top card of your opponent's deck.",
			'es-es': "Por cada Energía {F} unida a este Pokémon, descarta la primera carta de la baraja de tu rival.",
			'it-it': "Per ogni Energia {F} assegnata a questo Pokémon, scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Para cada Energia {F} ligada a este Pokémon, descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege für jede an dieses Pokémon angelegte {F}-Energie die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Écras'Terre",
			'en-us': "Land Crush",
			'es-es': "Aterrizaje",
			'it-it': "Schiacciaterra",
			'pt-br': "Aperto de Terra",
			'de-de': "Schollenbrecher"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It is extremely protective of its territory. If any foe approaches, it attacks using vicious tremors.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725189,
				tcgplayer: 509801,
				cardtrader: 255794
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725189,
				tcgplayer: 509801,
				cardtrader: 255794
			}
		},
	],

	illustrator: "0313",

	
}

export default card
