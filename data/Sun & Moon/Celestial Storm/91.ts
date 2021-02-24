import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Mawile",
		fr: "Mysdibule",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		303,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mining",
				fr: "Minage",
			},
			effect: {
				en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck. If that card is a Pokémon Tool card, instead of putting it into your hand, you may attach it to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it.",
				fr: "Cherchez une carte Objet dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck. Si cette carte est une carte Outil Pokémon, plutôt que de l’ajouter à votre main, vous pouvez l’attacher à l’un de vos Pokémon auquel aucun Outil Pokémon n’est attaché.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Bite Off",
				fr: "Arracher d’un Coup de Dent",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 30 more damage (before applying Weakness and Resistance).",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
