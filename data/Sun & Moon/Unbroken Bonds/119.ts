import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		687,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Hypnotic Reign",
				fr: "Règne Hypnotique",
			},
			effect: {
				en: "Your opponent reveals their hand. You may discard a Pokémon you find there and use one of that Pokémon's non-GX attacks as this attack.",
				fr: "Votre adversaire dévoile sa main. Vous pouvez défausser un Pokémon que vous y trouvez et utiliser l’une des attaques non GX de ce Pokémon en tant que cette attaque.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Pressure",
				fr: "Pression Ténébreuse",
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
