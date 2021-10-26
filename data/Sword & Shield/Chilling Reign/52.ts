import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Thundurus",
		fr: "Fulguris",
		es: "Thundurus",
		it: "Thundurus",
		pt: "Thundurus",
		de: "Voltolos"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Assisting Spark",
			fr: "Étincelle de Soutien",
			es: "Chispa de Apoyo",
			it: "Scintillaiuto",
			pt: "Faísca Auxiliar",
			de: "Helfender Funke"
		},

		effect: {
			en: "You may attach a Lightning Energy card from your hand to 1 of your Benched Pokémon.",
			fr: "Vous pouvez attacher une carte Énergie Lightning de votre main à l'un de vos Pokémon de Banc.",
			es: "Puedes unir 1 carta de Energía Lightning de tu mano a 1 de tus Pokémon en Banca.",
			it: "Puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Lightning dalla tua mano.",
			pt: "Você pode ligar 1 carta de Energia Lightning da sua mão a 1 dos seus Pokémon no Banco.",
			de: "Du kannst 1 Lightning-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank anlegen."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
			es: "Trueno",
			it: "Tuono",
			pt: "Trovão",
			de: "Donner"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "As it flies around, it shoots lightning all over the place and causes forest fires. It is therefore disliked."
	}
}

export default card
