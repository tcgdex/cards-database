import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Glaceon",
		fr: "Givrali",
		de: "Glaziola"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		471,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Chilly Breath",
				fr: "Haleine glacée",
				de: "Frostiger Atem"
			},
			effect: {
				en: "As long as Glaceon is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers.",
				fr: "Tant que Givrali est votre Pokémon Actif, les Pokémon de votre adversaire ne peuvent pas utiliser de Poké-Powers.",
				de: "Solange Glaziola dein Aktives Pokémon ist, können gegneriche Pokémon keine Poké-Power benutzen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Avalanche",
				fr: "Avalanche",
				de: "Lawine"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff allen Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+30"
		},
	],

	retreat: 1,

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	}
}

export default card
