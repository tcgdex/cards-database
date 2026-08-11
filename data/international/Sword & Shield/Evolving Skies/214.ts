import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Umbreon VMAX",
		'fr-fr': "Noctali VMAX",
		'es-es': "Umbreon VMAX",
		'it-it': "Umbreon VMAX",
		'pt-br': "Umbreon VMAX",
		'de-de': "Nachtara VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],
	stage: "VMAX",
	illustrator: "AKIRA EGAWA",
	dexId: [197],

	evolveFrom: {
		'en-us': "Umbreon V",
		'fr-fr': "Noctali-V",
		'es-es': "Umbreon V",
		'it-it': "Umbreon-V",
		'pt-br': "Umbreon V",
		'de-de': "Nachtara-V"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dark Signal",
			'fr-fr': "Signal Obscur"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez échanger l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Max Darkness",
			'fr-fr': "Sinistromax"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 574272,
				tcgplayer: 246722
			}
		},
	],
}

export default card
