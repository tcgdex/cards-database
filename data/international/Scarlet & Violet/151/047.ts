import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [47],
	set: Set,

	name: {
		'fr-fr': "Parasect",
		'en-us': "Parasect",
		'es-es': "Parasect",
		'it-it': "Parasect",
		'pt-br': "Parasect",
		'de-de': "Parasek"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Paras",
		'en-us': "Paras",
		'es-es': "Paras",
		'it-it': "Paras",
		'pt-br': "Paras",
		'de-de': "Paras"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Propagation de Filaments",
			'en-us': "Spread Filaments",
			'es-es': "Filamentos Dispersos",
			'it-it': "Spargifilamenti",
			'pt-br': "Espalhar Filamentos",
			'de-de': "Filamentausbreitung"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cherchez dans votre deck un nombre de Pokémon {G} inférieur ou égal au nombre de côtés face obtenus, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'en-us': "Flip 2 coins. Search your deck for a number of {G} Pokémon up to the number of heads and put them onto your Bench. Then, shuffle your deck.",
			'es-es': "Lanza 2 monedas. Busca en tu baraja una cantidad de Pokémon {G} igual o inferior al número de caras que te hayan salido y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Lancia due volte una moneta. Cerca nel tuo mazzo un numero di Pokémon {G} uguale o inferiore al numero di volte in cui è uscito testa e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Jogue 2 moedas. Procure por um número de Pokémon {G} no seu baralho até o número de caras e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wirf 2 Münzen. Durchsuche dein Deck nach bis zu so vielen {G}-Pokémon, wie du Kopf geworfen hast, und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Tranch'Griffe",
			'en-us': "Claw Slash",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "The bug is mostly dead, with the mushroom on its back having become the main body. If the mushroom comes off, the bug stops moving.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733642,
				tcgplayer: 516170,
				cardtrader: 261202
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733642,
				tcgplayer: 516170,
				cardtrader: 261202
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",

	
}

export default card
