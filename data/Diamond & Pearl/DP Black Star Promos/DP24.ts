import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Darkrai",
		fr: "Darkrai",
		de: "Darkrai"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Spacial Rend",
				fr: "Spatio-Rift",
				de: "Raumschlag"
			},
			effect: {
				en: "Search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. If there is any Stadium card in play, discard it.",
				fr: "Choisissez dans votre deck une carte Stade, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck. Si une carte Stade est en jeu, défaussez-la.",
				de: "Durchsuche dein Deck nach 1 Stadion-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Wenn sich bereits eine Stadion-Karte im Spiel befindet, lege diese auf den Ablagestapel."
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
			],

			name: {
				en: "Roar of Time",
				fr: "Hurle-Temps",
				de: "Zeitenlärm"
			},

			effect: {
				en: "Search your discard pile for 3 Pokémon, show them to your opponent, and put them on top of your deck. Shuffle your deck afterward. (If you don't have 3 Pokémon in your discard pile, this attack does nothing.)",
				fr: "Choisissez 3 Pokémon dans votre pile de défausse. Montrez-les à votre adversaire et placez-les sur le dessus de votre deck. Ensuite, mélangez votre deck. (Si vous ne possédez pas 3 Pokémon dans votre pile de défausse, cette attaque est sans effet.)",
				de: "Durchsuche deinen Ablagestapel nach 3 Pokémon, zeige sie deinem Gegner und lege sie auf dein Deck. Mische dein Deck danach. (Wenn du keine 3 Pokémon in deinem Ablagestapel hast, hat dieser Angriff keine Auswirkungen.)"
			},

			damage: 80
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
