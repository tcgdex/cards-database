import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Elekid",
		fr: "Elékid"
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		239,
	],
	hp: 30,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Kick",
				fr: "Pied énergétique"
			},
			effect: {
				en: "Flip a coin. If heads, choose an Energy card attached to the Defending Pokémon. Your opponent moves that card to 1 of his or her other Pokémon. (If your opponent has no Benched Pokémon, this attack does nothing.)",
				fr: "Lancez une pièce. Si c'est face, choisissez une carte Énergie attachée au Pokémon Défenseur. Votre adversaire attache cette carte à l'un de ses autres Pokémon. (Si votre adversaire n'a pas de Pokémon sur le Banc, cette attaque ne fait rien.)"
			},

		},
	],






}

export default card
