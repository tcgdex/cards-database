import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [519],
	set: Set,

	name: {
		en: "Pidove",
		fr: "Poichigeon",
		es: "Pidove",
		it: "Pidove",
		pt: "Pidove",
		de: "Dusselgurr"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Emergency Evolution",
			fr: "Évolution d'Urgence",
			es: "Evolución de Emergencia",
			it: "Evoluzione di Emergenza",
			pt: "Evolução Emergencial",
			de: "Notfall-Entwicklung"
		},

		effect: {
			en: "Once during your turn, if this Pokémon's remaining HP is 30 or less, you may search your deck for an Unfezant or Unfezant ex and put it onto this Pidove to evolve it. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, s'il reste 30 PV ou moins à ce Pokémon, vous pouvez chercher dans votre deck un Déflaisan ou un Déflaisan-ex et le placer sur ce Poichigeon pour le faire évoluer. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, si a este Pokémon le quedan 30 PS o menos, puedes buscar en tu baraja 1 Unfezant o Unfezant ex y ponerlo sobre este Pidove para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, se i PS rimanenti di questo Pokémon sono 30 o meno, puoi cercare nel tuo mazzo un Unfezant o un Unfezant-ex e metterlo sopra questo Pidove per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, se o PS restante deste Pokémon for 30 ou menos, você poderá procurar por um Unfezant ou Unfezant ex no seu baralho e colocá-lo sobre este Pidove para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon 30 oder weniger verbleibende KP hat, kannst du dein Deck nach 1 Fasasnob oder Fasasnob-ex durchsuchen und es auf dieses Dusselgurr legen, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Mékayu"
}

export default card