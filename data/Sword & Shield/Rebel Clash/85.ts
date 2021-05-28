import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Hatterene",
		fr: "Sorcilence"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Hattrem",
		fr: "Chapotus"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mind Hat",
				fr: "Chapeau Mental"
			},
			effect: {
				en: "Once during your turn, you may use this Ability. Each player discards a card from their hand. (Your opponent discards first.)",
				fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Chaque joueur défausse une carte de sa main. (Votre adversaire défausse en premier.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dripping Grudge",
				fr: "Rancune Dégoulinante"
			},
			effect: {
				en: "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile.",
				fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon dans votre pile de défausse."
			},

		},
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
	hp: 150,
	types: ["Psychic"],
	regulationMark: "D"
}

export default card
