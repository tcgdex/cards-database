import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Slowking",
		fr: "Roigada de Galar"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Galarian Slowpoke",
		fr: "Ramoloss de Galar"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Mysterious Potion",
			fr: "Potion Mystérieuse"
		},

		effect: {
			en: "Once during your turn, you may choose 1 of your Pokémon and flip a coin. If heads, heal 90 damage from that Pokémon. If tails, put 3 damage counters on that Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez choisir l’un de vos Pokémon et lancer une pièce. Si c’est face, soignez 90 dégâts de ce Pokémon-là. Si c’est pile, placez 3 marqueurs de dégâts sur ce même Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Spray Fluid",
			fr: "Fluide Éclaboussant"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card