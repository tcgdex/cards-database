import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
		de: "Snibunna"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		461,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dark Engage",
				fr: "Engagement obscur",
				de: "Dunkle Verpflichtung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Each of your Active Pokémon's type is Darkness until the end of your turn. If that Pokémon is no longer your Active Pokémon, this effect ends.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Le type de chacun de vos Pokémon Actifs est Darkness jusqu'à la fin de votre tour. Si ce Pokémon n'est plus votre Pokémon Actif, cet effet se termine.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. Jedes deiner Aktiven Pokémon erhält den Typ  bis zum Ende des Zuges. Dieser Effekt endet auch, sobald das jeweilige Pokémon nicht mehr dein Aktives Pokémon ist."
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Shadow Charge",
				fr: "Recharge osbcure",
				de: "Schattenaufladung"
			},
			effect: {
				en: "Search your deck for up to 2 Darkness Energy cards and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Darkness et attachez-les à vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 -Energiekarten und lege sie in beliebiger Verteilung an deine Pokémon an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Chip Off",
				fr: "Grignoter",
				de: "Abspalten"
			},
			effect: {
				en: "If your opponent has 6 or more cards in his or her hand, discard a number of cards without looking until your opponent has 5 cards left in his or her hand.",
				fr: "Si votre adversaire possède au moins 6 cartes en main, défaussez des cartes sans regarder jusqu'à ce qu'il ne lui reste que 5 cartes en main.",
				de: "Wenn dein Gegner mindestens 6 Karten auf der Hand hat, wähle davon so viele Karten (ohne sie dir vorher anzusehen) und lege sie auf den Ablagestapel deines Gegners, bis dein Gegner nur noch 5 Karten auf der Hand hat."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "20"
		},
	],





}

export default card
