import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
		de: "Giratina"
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		487,
	],
	hp: 130,
	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Invisible Tentacles",
				fr: "Tentacules invisibles",
				de: "Unsichtbare Tentakel"
			},
			effect: {
				en: "Whenever your opponent's Pokémon tries to attack, your opponent discards 1 card from his or her hand. (If your opponent can't discard 1 card, your opponent's Pokémon can't attack.) You can't use more than 1 Invisible Tentacles Poké-Body each turn.",
				fr: "Lorsqu'1 des Pokémon de votre adversaire essaye d'attaquer, votre adversaire défausse 1 carte de sa main. (Si votre adversaire ne peut pas défausser de carte, le Pokémon de votre adversaire ne peut pas attaquer.) Vous ne pouvez pas utiliser plus d'1 Poké-Body Tentacules invisibles par tour.",
				de: "Immer wenn ein gegnerisches Pokémon angreift, legt dein Gegner 1 Karte von seiner Hand auf seinen Ablagestapel. (Wenn dein Gegner keine Karte von seiner Hand auf seinen Ablagestapel legen kann, kann keines seiner Pokémon angreifen.) Du kannst nicht mehr als 1 Unsichtbare Tentakel Poké-Body pro Zug benutzen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Darkness Lost",
				fr: "Obscurité perdue",
				de: "Finsteres Nirgendwo"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If any of your opponent's Pokémon would be Knocked Out by damage from this attack, put that Pokémon and all cards attached to it in the Lost Zone instead of discarding it.",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Si les dégâts de cette attaque mettent K.O. 1 des Pokémon de votre adversaire, placez ce Pokémon ainsi que toutes les cartes qui lui sont attachées dans la Zone Perdue au lieu de les défausser.",
				de: "Dieser Angriff fügt allen Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wenn ein Pokémon deines Gegners durch diesen Angriff kampfunfähig würde, lege dieses Pokémon und alle Karten, die an es angelegt sind, nicht auf den Ablagestapel, sondern ins Nirgendwo."
			},

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
			type: "Colorless",
			value: "-20"
		},
	],

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
