import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Shadow Rider Calyrex VMAX",
		fr: "Sylveroy Cavalier d’Effroi VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 320,
	dexId: [898],

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Shadow Rider Calyrex V",
		fr: "Sylveroy Cavalier d’Effroi-V"
	},

	stage: 'VMAX',

	abilities: [{
		type: 'Ability',
		name: {
			en: 'Underworld Door',
			fr: "Porte des Abîmes"
		},
		effect: {
			en: "Once during your turn, you may attach a Psychic Energy card from your hand to 1 of your Benched Psychic Pokémon. If you attached Energy to a Pokémon in this way, draw 2 cards.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Psychic de votre main à l’un de vos Pokémon Psychic de Banc. Si vous avez attaché de l’Énergie à un Pokémon de cette façon, piochez 2 cartes."
		}
	}],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Max Geist",
				fr: "Spiritomax"
			},
			effect: {
				en: "This attack does 30 more damage for each Psychic Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à tous vos Pokémon.",
			},
			damage: '10+'
		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [{
		type: 'Fighting',
		value: "-30"
	}],


	retreat: 2,
	regulationMark: "E"
}

export default card
