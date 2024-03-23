import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Baxcalibur",
		fr: "Glaivodo",
		es: "Baxcalibur",
		it: "Baxcalibur",
		pt: "Baxcalibur"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Super Cold",
			fr: "Super Froid",
			es: "Superfrío",
			it: "Super Freddo",
			pt: "Superfrio"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Basic Water Energy card from your hand to 1 of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de base de votre main à l'un de vos Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Water Básica de tu mano a uno de tus Pokémon.",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base Water dalla tua mano tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá ligar uma carta de Energia Water Básica da sua mão a 1 dos seus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Buster Tail",
			fr: "Queue Destructrice",
			es: "Cola Destructora",
			it: "Coda Distruttrice",
			pt: "Cauda Aniquiladora"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card