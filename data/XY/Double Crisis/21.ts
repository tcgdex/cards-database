import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Sharpedo",
		fr: "Sharpedo de la Team Aqua",
		pt: "Sharpedo da Equipe Aqua",
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
		en: "Team Aqua's Carvanha",
		fr: "Carvanha de la Team Aqua",
		pt: "Carvanha da Equipe Aqua",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Aqua Search",
				fr: "Recherche Aqua",
				pt: "Busca Aqua",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Team Aqua Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon de la Team Aqua dans votre deck, le montrer et l'ajouter à votre main. Mélangez ensuite votre deck.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode procurar um Pokémon da Equipe Aqua em seu baralho, revelá-lo e colocá-lo na sua mão. Em seguida, embaralhe seus cards.",
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
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
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

	thirdParty: {
		cardmarket: 282532,
		tcgplayer: 97067
	}
}

export default card
