import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Indeedee",
		fr: "Wimessir",
		de: "Servol",
		it: "Indeedee",
		es: "Indeedee",
		pt: "Indeedee"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Expert Nurturer",
			fr: "Nourricier Expert",
			de: "Pflegeprofi",
			it: "Specialista della Crescita",
			es: "Cuidados Expertos",
			pt: "Especialista em Cuidados"
		},

		effect: {
			en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Évolution de l'un de vos Pokémon, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta che si evolve da uno dei tuoi Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja 1 carta que evolucione de uno de tus Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta no seu baralho que evolua de 1 dos seus Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
			de: "Hypnoschuss",
			it: "Ipnobomba",
			es: "Hipnorrayo",
			pt: "Borrifada Hipnótica"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card