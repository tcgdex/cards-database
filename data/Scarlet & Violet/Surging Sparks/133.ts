import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		en: "Alolan Exeggutor ex",
		fr: "Noadkoko d'Alola-ex",
		es: "Exeggutor de Alola ex",
		it: "Exeggutor di Alola-ex",
		pt: "Exeggutor de Alola ex",
		de: "Alola-Kokowei-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Dragon"],
	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		es: "Exeggcute",
		it: "Exeggcute",
		pt: "Exeggcute",
		de: "Owei"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Water"],

		name: {
			en: "Tropical Frenzy",
			fr: "Frénésie Tropicale",
			es: "Frenesí Tropical",
			it: "Frenesia Tropicale",
			pt: "Delírio Tropical",
			de: "Tropenwahn"
		},

		effect: {
			en: "You may attach any number of Basic Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Vous pouvez attacher le nombre voulu de cartes Énergie de base de votre main à vos Pokémon comme il vous plaît.",
			es: "Puedes unir cualquier cantidad de cartas de Energía Básica de tu mano a tus Pokémon de la manera que desees.",
			it: "Puoi assegnare ai tuoi Pokémon un numero qualsiasi di carte Energia base dalla tua mano nel modo che preferisci.",
			pt: "Você pode ligar qualquer número de cartas de Energia Básica da sua mão aos seus Pokémon como desejar.",
			de: "Du kannst beliebig viele Basis-Energiekarten aus deiner Hand beliebig an deine Pokémon anlegen."
		},

		damage: 150
	}, {
		cost: ["Grass", "Water", "Fighting"],

		name: {
			en: "Swinging Sphene",
			fr: "Sphène Oscillant",
			es: "Esfena Oscilante",
			it: "Sfene Oscillante",
			pt: "Esfênio Oscilante",
			de: "Sphen-Schwung"
		},

		effect: {
			en: "Flip a coin. If heads, Knock Out your opponent's Active Basic Pokémon. If tails, Knock Out 1 of your opponent's Benched Basic Pokémon.",
			fr: "Lancez une pièce. Si c'est face, mettez K.O. le Pokémon Actif de base de votre adversaire. Si c'est pile, mettez K.O. l'un des Pokémon de Banc de base de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, deja Fuera de Combate al Pokémon Básico Activo de tu rival. Si sale cruz, deja Fuera de Combate a uno de los Pokémon Básicos en Banca de tu rival.",
			it: "Lancia una moneta. Se esce testa, metti KO il Pokémon Base attivo del tuo avversario. Se esce croce, metti KO uno dei Pokémon Base nella panchina del tuo avversario.",
			pt: "Jogue uma moeda. Se sair cara, Nocauteie o Pokémon Básico Ativo do seu oponente. Se sair coroa, Nocauteie 1 dos Pokémon Básicos no Banco do seu oponente.",
			de: "Wirf 1 Münze. Mache bei Kopf das Aktive Basis-Pokémon deines Gegners kampfunfähig. Mache bei Zahl 1 Basis-Pokémon auf der Bank deines Gegners kampfunfähig."
		}
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "aky CG Works",

	thirdParty: {
		cardmarket: 794506
	}
}

export default card
