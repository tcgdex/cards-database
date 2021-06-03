import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Galarian Articuno V",
		fr: "Artikodin de Galar V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,
	dexId: [144],

	types: [
		"Psychic",
	],

	stage: 'Basic',
	suffix: 'V',

	abilities: [{
		type: 'Ability',
		name: {
			en: 'Reconstitue',
			fr: 'Reconstitution'
		},
		effect: {
			en: 'You must discard 2 cards from your hand in order to use this Ability, Once during your turn, you may draw a card.',
			fr: 'Vous devez défausser 2 cartes de votre min pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher une carte.',
		}
	}],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyray",
				fr: "Rayon Psy"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 110
		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "E"
}

export default card
