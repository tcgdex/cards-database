import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Alcremie",
		fr: "Charmilly",
		es: "Alcremie",
		it: "Alcremie",
		pt: "Alcremie",
		de: "Pokusan"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Milcery",
		fr: "Crèmy"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Decorate",
				fr: "Nappage",
				es: "Decoración",
				it: "Decorazione",
				pt: "Decorar",
				de: "Verzierung"
			},
			effect: {
				en: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
				fr: "Attachez le nombre de cartes Énergie de base voulues de votre main à vos Pokémon comme il vous plaît.",
				es: "Une cualquier cantidad de cartas de Energía Básica de tu mano a tus Pokémon de la manera que desees.",
				it: "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia base dalla tua mano nel modo che preferisci.",
				pt: "Ligue qualquer número de cartas de Energia básica da sua mão aos seus Pokémon como desejar.",
				de: "Lege beliebig viele Basis-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Draining Kiss",
				fr: "Vampibaiser",
				es: "Beso Drenaje",
				it: "Assorbibacio",
				pt: "Beijo Drenante",
				de: "Diebeskuss"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 110,
	types: ["Psychic"],
	regulationMark: "D"
}

export default card
