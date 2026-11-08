import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [136],
	set: Set,

	name: {
		'fr-fr': "Pyroli V",
		'de-de': "Flamara V",
		'es-es': "Flareon V",
		'pt-br': "Flareon V",
		'it-it': "Flareon V",
		'en-us': "Flareon V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Souffle de Flamme",
			'de-de': "Flammender Atem",
			'es-es': "Aliento Flamígero",
			'pt-br': "Hálito Flamejante",
			'it-it': "Soffio Ardente",
			'en-us': "Flaming Breath"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck une carte Énergie {R}, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 {R}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía {R} y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por 1 carta de Energia {R} no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo una carta Energia {R} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Search your deck for a {R} Energy card and attach it to this Pokémon. Then, shuffle your deck."
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'fr-fr': "Colonne Torride",
			'de-de': "Versengende Säule",
			'es-es': "Columna Abrasadora",
			'pt-br': "Coluna Abrasadora",
			'it-it': "Torre Ustionante",
			'en-us': "Scorching Column"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'en-us': "Your opponent's Active Pokémon is now Burned."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 491199
	}
}

export default card
