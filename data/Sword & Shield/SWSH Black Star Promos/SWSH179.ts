import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Pyroli V",
		de: "Flamara V",
		es: "Flareon V",
		pt: "Flareon V",
		it: "Flareon V",
		en: "Flareon V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Souffle de Flamme",
			de: "Flammender Atem",
			es: "Aliento Flamígero",
			pt: "Hálito Flamejante",
			it: "Soffio Ardente",
			en: "Flaming Breath"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Énergie {R}, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 {R}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 carta de Energía {R} y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por 1 carta de Energia {R} no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo una carta Energia {R} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			en: "Search your deck for a {R} Energy card and attach it to this Pokémon. Then, shuffle your deck."
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			fr: "Colonne Torride",
			de: "Versengende Säule",
			es: "Columna Abrasadora",
			pt: "Coluna Abrasadora",
			it: "Torre Ustionante",
			en: "Scorching Column"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			en: "Your opponent's Active Pokémon is now Burned."
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 576502
	}
}

export default card