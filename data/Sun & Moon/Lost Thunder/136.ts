import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		184,
	],
	hp: 100,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Marill",
		fr: "Marill",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Polka-Dot Search",
				fr: "Quête à Pois",
			},
			effect: {
				en: "Look at the top 8 cards of your deck and attach any number of Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
				fr: "Regardez les 8 cartes du dessus de votre deck et attachez le nombre désiré de cartes Énergie que vous y trouvez à vos Pokémon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Play Rough",
				fr: "Câlinerie",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
