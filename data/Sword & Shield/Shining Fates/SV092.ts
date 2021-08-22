import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Duralugon",
		en: "Duraludon",
		es: "Duraludon",
		it: "Duraludon",
		pt: "Duraludon",
		de: "Duraludon"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	attacks: [{
		name: {
			fr: "Affuteur de Métal",
			en: "Metal Sharpener",
			es: "Afilador de Metales",
			it: "Affilametallo",
			pt: "Amolador de Metal",
			de: "Metallschleifer"
		},

		effect: {
			fr: "Attachez une carte Énergie Metal de votre pile de défausse à l’un de vos Pokémon.",
			en: "Attach a Metal Energy card from your discard pile to 1 of your Pokémon.",
			es: "Une 1 carta de Energía Metal de tu pila de descartes a 1 de tus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon una carta Energia Metal dalla tua pila degli scarti.",
			pt: "Ligue 1 carta de Energia Metal da sua pilha de descarte a 1 dos seus Pokémon.",
			de: "Lege 1 Metal-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon an."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Puissant Rayon",
			en: "Power Beam",
			es: "Rayo de Luz Poderoso",
			it: "Raggiopotenza",
			pt: "Raio de Poder",
			de: "Power-Strahl"
		},

		damage: 110,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "Its body resembles polished metal, and it’s both lightweight and strong. The only drawback is that it rusts easily."
	}
}

export default card