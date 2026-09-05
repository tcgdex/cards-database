import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress",
		de: "Forstellka"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [205],

	hp: 80,

	types: [
		"Metal"
	],

	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
		de: "Tannza"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Double Metal Ball",
				fr: "Double boule métallique",
				de: "Doppel Metallball"
			},
			effect: {
				en: "Put 2 damage counters on each Defending Pokémon.",
				fr: "Placez deux marqueurs de dégât sur chaque Pokémon Défenseur.",
				de: "Lege 2 Schadensmarken auf alle Verteidigenden Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Backspin",
				fr: "Retour arrière",
				de: "Wegdrehen"
			},
			effect: {
				en: "After your attack, you may discard 1 Energy card attached to Forretress. If you do, switch Forretress with 1 of your Benched Pokémon.",
				fr: "Après votre attaque, vous pouvez défausser une carte Énergie attachée à Foretress. Vous pouvez alors échanger Foretress avec un des Pokémon de votre Banc.",
				de: "Nach deinem Angriff kannst du 1 an Forstellka angelegte Energiekarte auf deinen Ablagestapel legen. Wenn du das machst, tausche Forstellka gegen ein Pokémon auf deiner Bank aus."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85547,
				cardmarket: 275905
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85547,
				cardmarket: 275905
			},
		},
	],

}

export default card
