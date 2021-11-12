import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Lugia",
		fr: "Lugia"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
				fr: "Type de cristal"
			},
			effect: {
				en: "Whenever you attach a Fire, Water, or Psychic basic Energy card from your hand to Lugia, Lugia's type (color) becomes the same as that as that Energy card type until the end of the turn.",
				fr: "À chaque fois que vous attachez une carte Énergie de base , , ou  de votre main à Lugia, le type de Lugia (sa couleur) devient identique au type de carte Énergie jusqu'à la fin du tour."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Fire",
			],
			name: {
				en: "Psychic",
				fr: "Psyko"
			},
			effect: {
				en: "This attack does 10 damage times the number of Energy cards attached to the Defending Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées au Pokémon Défenseur."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Water",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Steam Blast",
				fr: "Coud' vapeur"
			},
			effect: {
				en: "Discard an Energy card attached to Lugia.",
				fr: "Défaussez-vous d'une carte Énergie attachée à Lugia."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
