import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Dragapult",
		fr: "Lanssorien",
		es: "Dragapult",
		it: "Dragapult",
		pt: "Dragapult",
		de: "Katapuldra"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [887],

	hp: 150,

	types: ["Psychic"],

	stage: "Stage2",

	evolveFrom: {
		en: "Drakloak",
		fr: "Dispareptil",
		es: "Drakloak",
		it: "Drakloak",
		pt: "Drakloak",
		de: "Phandra"
	},

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				en: "Dragon Launcher",
				de: "Drachenschleuder"
			},
			effect: {
				en: "Discard a number of your Benched Dreepy up to the number of your opponent's Pokémon in play. Then, for each Dreepy you discarded in this way, choose 1 of your opponent's Pokémon and do 100 damage to it. You can't choose the same Pokémon more than once. This damage isn't affected by Weakness or Resistance",
				de: "Lege bis zu so viele deiner Grolldra, wie dein Gegner Pokémon im Spiel hat, von deiner Bank auf deinen Ablagestapel. Wähle anschließend für jedes auf diese Weise abgelegte Grolldra 1 Pokémon deines Gegners und füge jenem Pokémon 100 Schadenspunkte zu. Du kannst dasselbe Pokémon nicht mehr als einmal wählen. Dieser Schaden wird durch Schwäche und Resistenz nicht verändert."
			}
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				en: "Spooky Shot",
				de: "Spukschuss"
			},
			damage: 120,
		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802828,
				tcgplayer: 614375
			}
		}
	]
}

export default card

