import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [874],
	set: Set,

	name: {
		en: "Stonjourner",
		fr: "Dolman",
		es: "Stonjourner",
		it: "Stonjourner",
		pt: "Stonjourner",
		de: "Humanolith"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Power Stone",
			fr: "Pierre Puissante",
			es: "Roca Poderosa",
			it: "Pietra Potente",
			pt: "Pedra do Poder",
			de: "Kraftstein"
		},

		effect: {
			en: "Attach up to 2 Fighting Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Attachez jusqu'à 2 cartes Énergie Fighting de votre main à vos Pokémon comme il vous plaît.",
			es: "Une hasta 2 cartas de Energía Fighting de tu mano a tus Pokémon de la manera que desees.",
			it: "Assegna ai tuoi Pokémon fino a due carte Energia Fighting dalla tua mano nel modo che preferisci.",
			pt: "Ligue até 2 cartas de Energia Fighting da sua mão aos seus Pokémon como desejar.",
			de: "Lege bis zu 2 Fighting-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Lost Shot",
			fr: "Tir Perdu",
			es: "Disparo Perdido",
			it: "Colpo Perduto",
			pt: "Disparo Perdido",
			de: "Nirgendwo-Schuss"
		},

		effect: {
			en: "Put the top card of your opponent's deck in the Lost Zone.",
			fr: "Placez la carte du dessus du deck de votre adversaire dans la Zone Perdue.",
			es: "Pon la primera carta de la baraja de tu rival en la Zona Perdida.",
			it: "Metti la prima carta del mazzo del tuo avversario nell'area perduta.",
			pt: "Coloque a carta de cima do baralho do seu oponente na Zona Perdida.",
			de: "Lege die oberste Karte des Decks deines Gegners ins Nirgendwo."
		},

		damage: 120
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674124,
		tcgplayer: 284006
	}
}

export default card