import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Castform Sunny Form",
		fr: "Morphéo Forme Solaire"
	},

	illustrator: "Yuko Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,
	dexId: [351],

	types: [
		"Fire",
	],

	stage: 'Basic',

	description: {
		en: 'Castform changes to this form when it basks\nin bright sunlight. When you touch its\nglowing skin, it feels all dried out!',
		fr: 'Morphéo adopte cette apparence lorsqu\'il y a du soleil.\nSon corps rougeoyant est très sec au toucher.'
	},

	abilities: [{
		type: 'Ability',
		name: {
			en: 'Weather Reading',
			fr: 'Météorologie'
		},
		effect: {
			en: 'If you have 8 or more Stadium cards in your discard pile, ignore all Energy in this pokémon\'s attack costs.',
			fr: 'Si vous avez 8 cartes STade ou plus dans votre pile de défausse, ignorez toutes les Énergies dans le coût des attaques de ce Pokémon.',
		}
	}],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "High-Pressure Blast",
				fr: "Explosion Sous Pression"
			},
			effect: {
				en: "Discard a Stadium in play. If you can\'t, this attack does nothing",
				fr: "Défuassez un Stade en jeu. Si vous ne le pouvez pas, cette attaque ne fait rien."
			},
			damage: 150
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 0,
	regulationMark: "E"
}

export default card
