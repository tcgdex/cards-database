import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Garchomp C",
		fr: "Carchacrok ",
		de: "Knackrak C"
	},
	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 110,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Healing Breath",
				fr: "Haleine guérisseuse",
				de: "Heilender Hauch"
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Garchomp C LV.X from your hand onto your Active Garchomp C, you may remove all damage counters from each of your Pokémon SP.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Carchacrok  NIV.X de votre main sur votre Carchacrok  Actif, vous pouvez retirer à chacun de vos Pokémon SP tous leurs marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Knakrack C LV.X von deiner Hand auf dein Aktives Knakrack C legst, alle Schadensmarken von jedem deiner Pokémon SP entfernen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Rush",
				fr: "Dracocharge",
				de: "Drachenstoß"
			},
			effect: {
				en: "Discard 2 Energy attached to Garchomp C. Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Garchomp C can't use Dragon Rush during your next turn.",
				fr: "Défaussez 2 Énergies attachées à Carchacrok . Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Carchacrok  ne peut pas utiliser Dracocharge lors de votre prochain tour.",
				de: "Lege 2 an Knakrack C angelegte Energien auf deinen Ablagestapel. Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Knakrack C kann Drachenstoß in deinem nächsten Zug nicht einsetzen."
			},

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],





}

export default card
