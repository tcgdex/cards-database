import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
		de: "Morlord"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		195,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Aqua Healing",
				fr: "Aqua guérison",
				de: "Aquaheilung"
			},
			effect: {
				en: "Once during your turn (before your attack), if Quagsire is your Active Pokémon and the Defending Pokémon has any Water Energy attached to it, you may remove 3 damage counters from Quagsire.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Maraiste est votre Pokémon Actif et que le Pokémon Défenseur possède de l'Énergie Water, vous pouvez retirer à Maraiste 3 marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Morlord dein Aktives Pokémon ist und am Verteidigenden Pokémon mindestens 1 -Energie angelegt ist, 3 Schadensmarken von Morlord entfernen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Muddy Water",
				fr: "Ocroupi",
				de: "Lehmbrühe"
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nciht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 277813,
		tcgplayer: 88472
	}
}

export default card
