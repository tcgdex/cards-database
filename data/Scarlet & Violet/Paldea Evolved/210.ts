import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Glaivodo",
		en: "Baxcalibur",
		es: "Baxcalibur",
		it: "Baxcalibur",
		pt: "Baxcalibur",
		de: "Espinodon"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Super Froid",
			en: "Super Cold",
			es: "Superfrío",
			it: "Super Freddo",
			pt: "Superfrio",
			de: "Unfassbare Kälte"
		},

		effect: {
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de base de votre main à l'un de vos Pokémon.",
			en: "As often as you like during your turn, you may attach a Basic Water Energy card from your hand to 1 of your Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Water Básica de tu mano a uno de tus Pokémon.",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base Water dalla tua mano tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá ligar uma carta de Energia Water Básica da sua mão a 1 dos seus Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du 1 Basis-Water-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Queue Destructrice",
			en: "Buster Tail",
			es: "Cola Destructora",
			it: "Coda Distruttrice",
			pt: "Cauda Aniquiladora",
			de: "Zertrümmernder Schweif"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card