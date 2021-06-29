import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Claydol",
		fr: "Kaorine",
		es: "Claydol",
		it: "Claydol",
		pt: "Claydol",
		de: "Lepumentas"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto"
	},

	attacks: [{
		name: {
			en: "Power Split",
			fr: "Partage Force",
			es: "Isofuerza",
			it: "Pariattacco",
			pt: "Divisão Poderosa",
			de: "Kraftteiler"
		},

		effect: {
			en: "Attach Psychic Energy cards from your discard pile to your Pokémon in any way you like until your Pokémon and your opponent’s Pokémon have the same total amount of Energy attached.",
			fr: "Attachez des cartes Énergie Psychic de votre pile de défausse à vos Pokémon comme il vous plaît, jusqu’à ce que vos Pokémon et ceux de votre adversaire aient la même quantité d’Énergie attachée.",
			es: "Une cartas de Energía Psychic de tu pila de descartes a tus Pokémon de la manera que desees hasta que tus Pokémon y los Pokémon de tu rival tengan la misma cantidad total de Energías unidas a ellos.",
			it: "Assegna ai tuoi Pokémon delle carte Energia Psychic dalla tua pila degli scarti nel modo che preferisci finché i tuoi Pokémon e quelli del tuo avversario non hanno lo stesso numero totale di Energie assegnate.",
			pt: "Ligue cartas de Energia Psychic da sua pilha de descarte aos seus Pokémon como desejar até que seus Pokémon e os Pokémon do seu oponente tenham a mesma quantidade total de Energia ligada a eles.",
			de: "Lege so lange Psychic-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an, bis an deine Pokémon und die Pokémon deines Gegners dieselbe Gesamtzahl von Energiekarten angelegt ist."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			es: "Disparo Psi",
			it: "Psicosparo",
			pt: "Tiro Psíquico",
			de: "Psychoschuss"
		},

		damage: 100,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card