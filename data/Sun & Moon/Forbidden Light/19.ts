import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Pyroar",
		fr: "Némélios",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		668,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unnerve",
				fr: "Tension",
			},
			effect: {
				en: "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
				fr: "Chaque fois que votre adversaire joue une carte Objet ou Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dominating Fangs",
				fr: "Crocs Imposants",
			},
			effect: {
				en: "If Lysandre Labs is in play, this attack does 60 more damage.",
				fr: "Si Labos Lysandre est en jeu, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
