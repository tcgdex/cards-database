import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Zarude V",
		fr: "Zarude V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bind Down",
				fr: "Astreinte"
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Jungle Rising",
				fr: "Jungle Grimpante"
			},
			effect: {
				en: "You may attach up to 2 basic Energy cards from your hand to your Benched Pokémon in any way you like. If you attached Energy to a Pokémon in this way, heal all damage from that Pokémon.",
				fr: "Vous pouvez attacher jusqu’à 2 cartes Énergie de base de votre main à vos Pokémon de Banc comme il vous plaît. Si vous avez attaché de l’Énergie à un Pokémon de cette façon, soignez tous les dégâts de ce Pokémon."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
