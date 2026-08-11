import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Rhyperior",
		'fr-fr': "Rhinastoc",
		'es-es': "Rhyperior",
		'it-it': "Rhyperior",
		'pt-br': "Rhyperior",
		'de-de': "Rihornior"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		464,
	],

	hp: 160,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros",
		'es-es': "Rhydon",
		'it-it': "Rhydon",
		'pt-br': "Rhydon",
		'de-de': "Rizeros"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'en-us': "Ω Barrier",
				'fr-fr': "Barrière Ω",
			},
			effect: {
				'en-us': "Whenever your opponent plays a Trainer card (excluding Pokémon Tools and Stadium cards), prevent all effects of that card done to this Pokémon.",
				'fr-fr': "Chaque fois que votre adversaire joue une carte Dresseur (excepté les Outils Pokémon et les cartes Stade), évitez tous les effets de la carte Dresseur sur ce Pokémon.",
			},
		},
		{
			type: "Ability",
			name: {
				'en-us': "Rock Wall",
			},
			effect: {
				'en-us': "Any damage done to your Pokémon by an opponent's attack is reduced by 10 (after applying Weakness and Resistance).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer Arm",
				'fr-fr': "Marto-Poing",
				'es-es': "Machada",
				'it-it': "Martelpugno",
				'pt-br': "Braço de Martelo",
				'de-de': "Hammerarm"
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la carta in cima al mazzo del tuo avversario.",
				'pt-br': "Descarte o card de cima do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It puts rocks in holes in its palms and uses its muscles to shoot them. Geodude are shot at rare times.",
	},

	thirdParty: {
		cardmarket: 273607,
		tcgplayer: 95975
	}
}

export default card
