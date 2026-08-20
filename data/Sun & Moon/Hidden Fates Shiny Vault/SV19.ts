import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Poipole",
		fr: "Vémini",
		de: "Venicro"
	},
	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		803,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spit Poison",
				fr: "Crache-Venin",
				de: "Giftspucke"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Knockout Reviver",
				fr: "K.O. Futile",
				de: "Fruchtloser K. o."
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon is Knocked Out, your opponent can't take any Prize cards for it.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon est mis K.O., votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
				de: "Wenn dieses Pokémon während des nächsten Zuges deines Gegners kampfunfähig wird, kann dein Gegner dafür keine Preiskarten nehmen."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		en: "This Ultra Beast is well enough liked to be chosen as a first partner in its own world.",
		de: "Diese Ultrabestie wird in der Welt, aus der sie kommt, so gemocht, dass sie oft als Partner für Reisen gewählt wird."
	},
}

export default card
