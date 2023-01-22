import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
		es: "Mewtwo",
		it: "Mewtwo",
		pt: "Mewtwo",
		de: "Mewtu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Psypump",
			fr: "Pompe Psy",
			es: "Psicobomba",
			it: "Psicopompa",
			pt: "Bomba Psíquica",
			de: "Psipumpe"
		},

		effect: {
			en: "Attach up to 2 Psychic Energy cards from your discard pile to 1 of your Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie Psychic de votre pile de défausse à l'un de vos Pokémon.",
			es: "Une hasta 2 cartas de Energía Psychic de tu pila de descartes a 1 de tus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon fino a due carte Energia Psychic dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia Psychic da sua pilha de descarte a 1 dos seus Pokémon.",
			de: "Lege bis zu 2 Psychic-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Limit Break",
			fr: "Brèche Frontière",
			es: "Golpe Límite",
			it: "Frangilimite",
			pt: "Limite Intenso",
			de: "Limitbruch"
		},

		effect: {
			en: "If your opponent has 3 or fewer Prize cards remaining, this attack does 90 more damage.",
			fr: "S'il reste 3 cartes Récompense ou moins à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si a tu rival le quedan 3 cartas de Premio o menos, este ataque hace 90 puntos de daño más.",
			it: "Se il tuo avversario ha tre o meno carte Premio rimanenti, questo attacco infligge 90 danni in più.",
			pt: "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card