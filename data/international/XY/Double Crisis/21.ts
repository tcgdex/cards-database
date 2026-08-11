import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Sharpedo",
		'fr-fr': "Sharpedo de la Team Aqua",
		'pt-br': "Sharpedo da Equipe Aqua",
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		319,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Team Aqua's Carvanha",
		'fr-fr': "Carvanha de la Team Aqua",
		'pt-br': "Carvanha da Equipe Aqua",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Aqua Search",
				'fr-fr': "Recherche Aqua",
				'pt-br': "Busca Aqua",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a Team Aqua Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon de la Team Aqua dans votre deck, le montrer et l'ajouter à votre main. Mélangez ensuite votre deck.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode procurar um Pokémon da Equipe Aqua em seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe seus cards.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Fang",
				'fr-fr': "Croc Aiguisé",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It boasts fangs so powerful that they knock opponents out in one shot! Enemies that slip up will be taken down without fail!",
	},

	thirdParty: {
		cardmarket: 282532,
		tcgplayer: 97067
	}
}

export default card
