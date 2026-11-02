import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		es: "Dragonite",
		it: "Dragonite",
		pt: "Dragonite",
		de: "Dragoran"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [149],

	hp: 160,

	types: ["Dragon"],

	stage: "Stage2",

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
		es: "Dragonair",
		it: "Dragonair",
		pt: "Dragonair",
		de: "Dragonir"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Jet Cruise",
				de: "Jet-Cruisen"
			},
			effect: {
				en: "Your Pokémon in play have no Retreat Cost.",
				de: "Deine Pokémon im Spiel haben keine Rückzugskosten."
			}
		}
	],

	attacks: [
		{
			cost: ["Water", "Lightning", "Colorless"],
			name: {
				en: "Dragon Pulse",
				de: "Drachenpuls"
			},
			damage: 180,
			effect: {
				en: "Discard the top 2 cards of your deck.",
				de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 802834,
				tcgplayer: 614381
			}
		}
	]
}

export default card

