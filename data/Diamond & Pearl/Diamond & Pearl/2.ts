import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		de: "Zwirrfinst"
	},

	illustrator: "Takabon",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		477,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Dusclops",
		fr: "Teraclope",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dark Palm",
				fr: "Paume obscure",
				de: "Dunkelwelle"
			},
			effect: {
				en: "Once during your turn (before your attack), if your opponent has 4 or more Benched Pokémon, you may choose 1 of them and shuffle that Pokémon and all cards attached to it into his or her deck. This power can't be used if Dusknoir is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si votre adversaire possède au moins 4 Pokémon de Banc, vous pouvez en choisir 1 et mélanger ce Pokémon ainsi que toutes les cartes qui lui sont attachées avec son deck. Ce pouvoir ne peut pas être utilisé si Noctunoir est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn dein Gegner 4 oder mehr Pokémon auf seiner Bank hat, 1 davon wählen. Dein Gegner mischt das gewählte Pokémon und alle Karten, die an es angelegt sind, in sein Deck. Diese Poké-Power kann nicht benutzt werden, wenn Zwirrfinst von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hard Feelings",
				fr: "Ressentiment",
				de: "Übel nehmen"
			},
			effect: {
				en: "Put 5 damage counters on the Defending Pokémon. Then, count the number of Prize cards your opponent has taken and put that many damage counters on the Defending Pokémon.",
				fr: "Placez 5 marqueurs de dégât sur le Pokémon Défenseur. Ensuite, comptez le nombre de cartes Récompense récoltées par votre adversaire et placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
				de: "Lege 5 Schadensmarken auf das Verteidigende Pokémon. Danach zähle die Anzahl der Preise, die dein Gegner bereits gewonnen hat, und lege die gleiche Anzahl Schadensmarken auf das Verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		fr: "L'antenne sur sa tête capte les ondes radio du monde des esprits lui ordonnant d'y porter des gens."
	}
}

export default card
