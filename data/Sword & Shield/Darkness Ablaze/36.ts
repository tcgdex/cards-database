import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Mr. Rime",
		fr: "M. Glaquette de Galar"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Galarian Mr. Mime",
		fr: "M. Mime de Galar"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shuffle Dance",
				fr: "Danse Entraînante"
			},
			effect: {
				en: "Once during your turn, you may switch 1 of your opponent’s face-down Prize cards with the top card of their deck. (The cards stay face down.)",
				fr: "Une fois pendant votre tour, vous pouvez échanger l’une des cartes Récompense de votre adversaire (actuellement face cachée) contre la carte du dessus de son deck. (Les cartes restent face cachée.)"
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mad Party",
				fr: "Folle Aventure"
			},
			effect: {
				en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
				fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse qui a l’attaque Folle Aventure."
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
