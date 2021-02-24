import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Huntail",
		fr: "Serpang",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		367,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Scary Face",
				fr: "Grimace",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer ou battre en retraite lors du prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Threaten and Drop",
				fr: "Menacer et lâcher",
			},
			effect: {
				en: "If Huntail has any Darkness Energy attached to it, this attack does 30 damage plus 20 more damage and discard a Special Energy card, if any, attached to the Defending Pokémon.",
				fr: "Si Serpang possède de l'Énergie Darkness, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur, s'il en a.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
