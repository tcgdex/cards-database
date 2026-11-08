import { Card } from 'models/database/card'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		'en-us': "Ditto",
		'fr-fr': "Métamorph",
		'es-es': "Ditto",
		'it-it': "Ditto",
		'pt-br': "Ditto",
		'de-de': "Ditto"
	},

	illustrator: "MPC Film",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		132,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Copy Anything",
				'fr-fr': "Copie Tout",
				'es-es': "Copietear",
				'it-it': "Copia Universale",
				'pt-br': "Cópia Sem Limite",
				'de-de': "Alleskopierer"
			},
			effect: {
				'en-us': "Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack. If this Pokémon doesn’t have the necessary Energy to use that attack, this attack does nothing.",
				'fr-fr': "Choisissez l’une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque. Si ce Pokémon n’a pas l’Énergie nécessaire pour utiliser cette attaque, cette attaque ne fait rien.",
				'es-es': "Elige 1 de los ataques de los Pokémon de tu rival y úsalo para este ataque. Si este Pokémon no tiene la Energía necesaria para usar ese ataque, este ataque no hace nada.",
				'it-it': "Scegli un attacco dei Pokémon del tuo avversario e usalo al posto di questo attacco. Se questo Pokémon non ha l’Energia necessaria per quell’attacco, questo attacco non ha effetto.",
				'pt-br': "Escolha 1 dos ataques dos Pokémon do seu oponente e use-o como este ataque. Se este Pokémon não tiver a Energia necessária para usar aquele ataque, este ataque não fará nada.",
				'de-de': "Wähle 1 Attacke der Pokémon deines Gegners und setze sie als diese Attacke ein. Wenn dieses Pokémon nicht die für jene Attacke notwendige Energie hat, hat diese Attacke keine Auswirkungen."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "While it can transform into anything, each Ditto apparently has its own strengths and weaknesses when it comes to transformations.",
	},

	thirdParty: {
		cardmarket: 370779,
		tcgplayer: 186025
	}
}

export default card
