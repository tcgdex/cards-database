import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Charmilly",
		en: "Alcremie",
		es: "Alcremie",
		it: "Alcremie",
		pt: "Alcremie",
		de: "Pokusan"
	},

	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Crèmy",
		en: "Milcery"
	},

	attacks: [{
		name: {
			fr: "Nappage",
			en: "Decorate",
			es: "Decoración",
			it: "Decorazione",
			pt: "Decorar",
			de: "Verzierung"
		},

		effect: {
			fr: "Attachez le nombre de cartes Énergie de base voulues de votre main à vos Pokémon comme il vous plaît.",
			en: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
			es: "Une cualquier cantidad de cartas de Energía Básica de tu mano a tus Pokémon de la manera que desees.",
			it: "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia base dalla tua mano nel modo che preferisci.",
			pt: "Ligue qualquer número de cartas de Energia básica da sua mão aos seus Pokémon como desejar.",
			de: "Lege beliebig viele Basis-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Vampibaiser",
			en: "Draining Kiss",
			es: "Beso Drenaje",
			it: "Assorbibacio",
			pt: "Beijo Drenante",
			de: "Diebeskuss"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon.",
			en: "Heal 30 damage from this Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
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
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "When it trusts a Trainer, it will treat them to berries it’s decorated with cream."
	}
}

export default card