import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [876],
	set: Set,

	name: {
		'en-us': "Indeedee",
		'fr-fr': "Wimessir",
		'es-es': "Indeedee",
		'it-it': "Indeedee",
		'pt-br': "Indeedee",
		'de-de': "Servol"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Expert Nurturer",
			'fr-fr': "Nourricier Expert",
			'es-es': "Cuidados Expertos",
			'it-it': "Specialista della Crescita",
			'pt-br': "Especialista em Cuidados",
			'de-de': "Pflegeprofi"
		},

		effect: {
			'en-us': "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Évolution de l'un de vos Pokémon, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta que evolucione de uno de tus Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta che si evolve da uno dei tuoi Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta no seu baralho que evolua de 1 dos seus Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hypnoblast",
			'fr-fr': "Hypnoblast",
			'es-es': "Hipnorrayo",
			'it-it': "Ipnobomba",
			'pt-br': "Borrifada Hipnótica",
			'de-de': "Hypnoschuss"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "In search of happy feelings—such as joy and gratitude—Indeedee bustles around, taking diligent care of people and other Pokémon.",
	},

	thirdParty: {
        cardmarket: 702449,
        tcgplayer: 488045
    }
}

export default card