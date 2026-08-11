import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [892],
	set: Set,

	name: {
		'en-us': "Single Strike Urshifu V",
		'fr-fr': "Shifours Poing Final V",
		'es-es': "Urshifu Golpe Brusco V",
		'it-it': "Urshifu Singolcolpo V",
		'pt-br': "Urshifu Golpe Decisivo V",
		'de-de': "Fokussierter-Angriff-Wulaosu V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Laser Focus",
			'fr-fr': "Affilage",
			'es-es': "Aguzar",
			'it-it': "Concentrazione",
			'pt-br': "Aguçar",
			'de-de': "Konzentration"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Fighting Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie Fighting, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Fighting y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia Fighting e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Fighting no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Fighting-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Impact Blow",
			'fr-fr': "Coup à Impact",
			'es-es': "Golpe Impactante",
			'it-it': "Colpoimpatto",
			'pt-br': "Golpe Impactante",
			'de-de': "Einschlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Impact Blow.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup à Impact.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpoimpatto.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Impactante.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Einschlag nicht einsetzen."
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 527650,
				tcgplayer: 234262
			}
		},
	],
}

export default card
