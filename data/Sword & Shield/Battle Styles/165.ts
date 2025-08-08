import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		en: "Victini VMAX",
		fr: "Victini VMAX",
		es: "Victini VMAX",
		it: "Victini VMAX",
		pt: "Victini VMAX",
		de: "Victini VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Spreading Flames",
			fr: "Flammes Rampantes",
			es: "Llamas Dispersas",
			it: "Spargifiamma",
			pt: "Chamas Alastrantes",
			de: "Flammenausbreitung"
		},

		effect: {
			en: "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez jusqu'à 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon comme il vous plaît.",
			es: "Une hasta 3 cartas de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees.",
			it: "Assegna ai tuoi Pokémon fino a tre carte Energia Fire dalla tua pila degli scarti nel modo che preferisci.",
			pt: "Ligue até 3 cartas de Energia Fire da sua pilha de descarte aos seus Pokémon como desejar.",
			de: "Lege bis zu 3 Fire-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Max Victory",
			fr: "Victoiromax",
			es: "Maxivictoria",
			it: "Dynavittoria",
			pt: "Vitória Max",
			de: "Dyna-Triumph"
		},

		damage: "100+",

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon V, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 120 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",
	illustrator: "PLANETA Mochizuki",

	evolveFrom: {
		en: "Victini V",
		fr: "Victini-V",
		es: "Victini V",
		it: "Victini-V",
		pt: "Victini V",
		de: "Victini-V"
	},

	regulationMark: "E"
}

export default card
