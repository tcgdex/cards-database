import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		'en-us': "Alolan Exeggutor ex",
		'fr-fr': "Noadkoko d'Alola-ex",
		'es-es': "Exeggutor de Alola ex",
		'it-it': "Exeggutor di Alola-ex",
		'pt-br': "Exeggutor de Alola ex",
		'de-de': "Alola-Kokowei-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 300,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Water"],

		name: {
			'en-us': "Tropical Frenzy",
			'fr-fr': "Frénésie Tropicale",
			'es-es': "Frenesí Tropical",
			'it-it': "Frenesia Tropicale",
			'pt-br': "Delírio Tropical",
			'de-de': "Tropenwahn"
		},

		effect: {
			'en-us': "You may attach any number of Basic Energy cards from your hand to your Pokémon in any way you like.",
			'fr-fr': "Vous pouvez attacher le nombre voulu de cartes Énergie de base de votre main à vos Pokémon comme il vous plaît.",
			'es-es': "Puedes unir cualquier cantidad de cartas de Energía Básica de tu mano a tus Pokémon de la manera que desees.",
			'it-it': "Puoi assegnare ai tuoi Pokémon un numero qualsiasi di carte Energia base dalla tua mano nel modo che preferisci.",
			'pt-br': "Você pode ligar qualquer número de cartas de Energia Básica da sua mão aos seus Pokémon como desejar.",
			'de-de': "Du kannst beliebig viele Basis-Energiekarten aus deiner Hand beliebig an deine Pokémon anlegen."
		},

		damage: 150
	}, {
		cost: ["Grass", "Water", "Fighting"],

		name: {
			'en-us': "Swinging Sphene",
			'fr-fr': "Sphène Oscillant",
			'es-es': "Esfena Oscilante",
			'it-it': "Sfene Oscillante",
			'pt-br': "Esfênio Oscilante",
			'de-de': "Sphen-Schwung"
		},

		effect: {
			'en-us': "Flip a coin. If heads, Knock Out your opponent's Active Basic Pokémon. If tails, Knock Out 1 of your opponent's Benched Basic Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, mettez K.O. le Pokémon Actif de base de votre adversaire. Si c'est pile, mettez K.O. l'un des Pokémon de Banc de base de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, deja Fuera de Combate al Pokémon Básico Activo de tu rival. Si sale cruz, deja Fuera de Combate a uno de los Pokémon Básicos en Banca de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, metti KO il Pokémon Base attivo del tuo avversario. Se esce croce, metti KO uno dei Pokémon Base nella panchina del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, Nocauteie o Pokémon Básico Ativo do seu oponente. Se sair coroa, Nocauteie 1 dos Pokémon Básicos no Banco do seu oponente.",
			'de-de': "Wirf 1 Münze. Mache bei Kopf das Aktive Basis-Pokémon deines Gegners kampfunfähig. Mache bei Zahl 1 Basis-Pokémon auf der Bank deines Gegners kampfunfähig."
		}
	}],

	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			foil: "gold",
			thirdParty: {
				cardmarket: 794620,
				tcgplayer: 593855
			}
		},
	],

	suffix: "ex",
	illustrator: "aky CG Works",

}

export default card
