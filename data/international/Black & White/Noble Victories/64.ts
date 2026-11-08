import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Conkeldurr",
		'fr-fr': "Bétochef",
		'es-es': "Conkeldurr",
		'it-it': "Conkeldurr",
		'pt-br': "Conkeldurr",
		'de-de': "Meistagrif"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		534,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Craftsmanship",
				'fr-fr': "Maître d’Œuvre",
				'es-es': "Maestro de Obras",
				'it-it': "Maestria",
				'pt-br': "Manufatura",
				'de-de': "Handwerkskunst"
			},
			effect: {
				'en-us': "This Pokémon gets +20 HP for each Fighting Energy attached to it.",
				'fr-fr': "Chaque Énergie Fighting attachée à ce Pokémon lui ajoute 20 PV.",
				'es-es': "Este Pokémon obtiene 20 PV más por cada Energía Fighting unida a él.",
				'it-it': "Questo Pokémon ha 20 PV in più per ogni Energia Fighting assegnatagli.",
				'pt-br': "Este Pokémon recebe mais 20 PS para cada Energia Fighting ligada a ele.",
				'de-de': "Dieses Pokémon erhält +20 KP für jede an es angelegte Fighting-Energie."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Top Down",
				'fr-fr': "Écras'Montagne",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It it thought that Conkeldurr taught humans how to make concrete more than 2,000 years ago.",
	},

	thirdParty: {
		cardmarket: 280187,
		tcgplayer: 84418
	}
}

export default card
