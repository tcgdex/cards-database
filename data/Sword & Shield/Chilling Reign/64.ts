import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia"
	},

	illustrator: "Tika Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,
	dexId: [488],

	types: [
		"Psychic",
	],

	stage: 'Basic',

	description: {
		en: "Those who sleep holding cresselia's\nfeather are assured of joyful dreams. It is\nsaid to represent the crescent moon.",
		fr: "Dormir aec une de ses plumes à la main\npermet de faire de beaux rêves. On le\nsurnomme « avatar d croissant de lune »."
	},

	attacks: [
		{
			cost: [
				"Psychic"
			],
			name: {
				en: "Crescent Glow",
				fr: "Lueur Lunule"
			},
			effect: {
				en: "Search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. If you go second and it’s your first turn, instead search for up to 3 Psychic Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck une carte Énergie Psychic, puis attachez-la à l’un de vos Pokémon. Si vous jouez en second et que c’est votre premier tour, cherchez jusqu’à 3 cartes Énergie Psychic à la place, puis attachez-les à l’un de vos Pokémon. Mélangez ensuite votre deck.",
			}
		},
		{
			cost: [
				"Psychic",
				"Psychic"
			],
			name: {
				en: "Photon Laser",
				fr: "Laser à Photons"
			},
			effect: {
				en: "If you have at least 5 Energy in play, this attack does 90 more damage.",
				fr: "Si vous avez au moins 5 Énergies en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: '30+'
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

	retreat: 1,
	regulationMark: "E"
}

export default card
