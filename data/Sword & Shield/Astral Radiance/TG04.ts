import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
		es: "Frosmoth",
		it: "Frosmoth",
		pt: "Frosmoth",
		de: "Mottineva"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Snom",
		fr: "Frissonille",
		es: "Snom",
		it: "Snom",
		pt: "Snom",
		de: "Snomnom"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ice Dance",
			fr: "Danse de Glace",
			es: "Danza Helada",
			it: "Danza del Ghiaccio",
			pt: "Dança de Gelo",
			de: "Eistanz"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Water Energy card from your hand to 1 of your Benched Water Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Water de votre main à l'un de vos Pokémon Water de Banc.",
			es: "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Water de tu mano a 1 de tus Pokémon Water en Banca.",
			it: "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon Water in panchina una carta Energia Water dalla tua mano tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia Water da sua mão a 1 dos seus Pokémon Water no Banco.",
			de: "Beliebig oft während deines Zuges kannst du 1 Water-Energiekarte aus deiner Hand an 1 Water-Pokémon auf deiner Bank anlegen."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
			es: "Rayo Aurora",
			it: "Raggiaurora",
			pt: "Raio Aurora",
			de: "Aurorastrahl"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card