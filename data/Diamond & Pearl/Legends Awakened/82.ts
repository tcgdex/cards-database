import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Unown ?",
		fr: "Zarbi ?",
		de: "Icognito ?"
	},

	illustrator: "Kazuaki Aihara",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "?",
				fr: "?",
				de: "?"
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown ? is on your Bench, you may choose a Pokémon in your hand and put it face down. Your opponent guesses a type of that Pokémon. Reveal that card. If your opponent guessed wrong, draw a card. Then, put that card back into your hand.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi ? se trouve sur votre Banc, vous pouvez choisir un Pokémon dans votre main et le placer face cachée. Votre adversaire doit deviner le type de ce Pokémon. Retournez la carte. Si votre adversaire s'est trompé, piochez une carte. Ensuite, replacez cette carte dans votre main.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Icognito ? auf deiner Bank ist, eine Pokémon-Karte aus deiner Hand verdeckt vor dir ablegen. Dein Gegner muss den Pokémon-Typ dieser Karte erraten, danach decke die Karte auf. Wenn er falsch geraten hat, ziehe 1 Karte. Danach nimm die aufgedeckte Pokémon-Karte auf deine Hand zurück."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},
			effect: {
				en: "Discard up to 2 cards from your hand. For each card you discarded, draw a card.",
				fr: "Défaussez jusqu'à 2 cartes de votre main. Pour chaque carte défaussée, piochez une carte.",
				de: "Lege bis zu 2 Karten von deiner Hand auf deinen Ablagestapel. Ziehe für jede auf diese Weise auf den Ablagestapel gelegte Karte 1 Karte."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou de ZARBI est apparu en premier."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
