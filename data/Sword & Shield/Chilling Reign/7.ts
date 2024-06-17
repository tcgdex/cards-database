import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		en: "Celebi V",
		fr: "Celebi V",
		es: "Celebi V",
		it: "Celebi V",
		pt: "Celebi V",
		de: "Celebi V"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Leaflet Dance",
			fr: "Foliole Dansante",
			es: "Danza de los Folíolos",
			it: "Danza di Foglioline",
			pt: "Dança das Folhinhas",
			de: "Blättchenreigen"
		},

		effect: {
			en: "Attach any number of Grass Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Attachez le nombre de cartes Énergie Grass voulues de votre main à vos Pokémon comme il vous plaît.",
			es: "Une cualquier cantidad de cartas de Energía Grass de tu mano a tus Pokémon de la manera que desees.",
			it: "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia Grass dalla tua mano nel modo che preferisci.",
			pt: "Ligue qualquer número de cartas de Energia Grass da sua mão aos seus Pokémon como desejar.",
			de: "Lege beliebig viele Grass-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		},

		cost: ["Grass"]
	}, {
		name: {
			en: "Slash Back",
			fr: "Retour de Frappe",
			es: "Tajo Cambiante",
			it: "Sferzata Inversa",
			pt: "Contra-arranhar",
			de: "Rückschnitt"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
