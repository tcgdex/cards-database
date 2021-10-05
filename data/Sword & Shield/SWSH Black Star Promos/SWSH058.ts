import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Alcremie",
		fr: "Charmilly",
		es: "Alcremie",
		it: "Alcremie",
		pt: "Alcremie",
		de: "Pokusan"
	},

	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Milcery",
		fr: "Crèmy"
	},

	attacks: [{
		name: {
			en: "Decorate",
			fr: "Nappage",
			es: "Decoración",
			it: "Decorazione",
			pt: "Decorate",
			de: "Verzierung"
		},

		effect: {
			en: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Attachez le nombre de cartes Énergie de base voulues de votre main à vos Pokémon comme il vous plaît.",
			es: "Une cualquier cantidad de cartas de Energía Básica de tu mano a tus Pokémon de la manera que desees.",
			it: "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia base dalla tua mano nel modo che preferisci.",
			pt: "Attach as many basic Energy cards as you like from your hand to your Pokémon in any way you like.",
			de: "Lege beliebig viele Basis-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser",
			es: "Beso Drenaje",
			it: "Assorbibacio",
			pt: "Draining Kiss",
			de: "Diebeskuss"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Heal 30 damage from this Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "When it trusts a Trainer, it will treat them to berries it’s decorated with cream."
	},

	stage: "Stage1",
	dexId: [869],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card