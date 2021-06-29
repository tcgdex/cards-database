import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Weezing",
		fr: "Smogogo",
		es: "Weezing",
		it: "Weezing",
		pt: "Weezing",
		de: "Smogmog"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo"
	},

	attacks: [{
		name: {
			en: "Mixin’ Toxin",
			fr: "Cocktail de Toxines",
			es: "Mezclatoxinas",
			it: "Mischiatossine",
			pt: "Mistureba de Toxinas",
			de: "Giftgemisch"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused. Attach a Darkness Energy card from your discard pile to this Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Attachez une carte Énergie Darkness de votre pile de défausse à ce Pokémon.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido. Une 1 carta de Energía Darkness de tu pila de descartes a este Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene confuso. Assegna a questo Pokémon una carta Energia Darkness dalla tua pila degli scarti.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso. Ligue 1 carta de Energia Darkness da sua pilha de descarte a este Pokémon.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Lege 1 Darkness-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Smog Burst",
			fr: "Dégazage Polluant",
			es: "Estallido de Polución",
			it: "Scoppiosmog",
			pt: "Nevoeiro de Fumaça Explosiva",
			de: "Smogausbruch"
		},

		effect: {
			en: "This attack does 20 more damage for each Darkness Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía Darkness unida a todos tus Pokémon.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia Darkness assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia Darkness ligada a todos os seus Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Darkness-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card