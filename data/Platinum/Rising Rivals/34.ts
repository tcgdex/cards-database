import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Vaporeon",
		fr: "Aquali Niv. 48",
		de: "Aquana"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Undevelop",
				fr: "Dé-développer",
				de: "Unentwickelt"
			},
			effect: {
				en: "Once during your turn (before your attack), you may devolve Vaporeon and put Vaporeon into your hand. This power can't be used if Vaporeon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez dés-évoluer Aquali et le placer dans votre main. Ce pouvoir ne peut pas être utilisé si Aquali est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Aquana rückentwickeln und Aquana auf deine Hand nehmen. Diese Poké-Power kann nicht benutzt werden, wenn Aquana von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Muddy Water",
				fr: "Ocroupi",
				de: "Lehmbrühe"
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Evolving Aqua",
				fr: "Aqua évolutive",
				de: "Aqua-Entwicklung"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If Vaporeon evolved from Eevee during this turn, this attack does 60 damage instead.",
				fr: "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc). Si Aquali a évolué d'Evoli lors de ce tour, cette attaque inflige 60 dégâts à la place.",
				de: "Wähle 1 Pokémon deines Gegners, auf dem mindestens 1 Schadensmarke liegt. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Wenn Aquana sich in diesem Zug aus Evoli entwickelt hat, fügt dieser Angriff stattdessen 60 Schadenspunkte zu."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278608
	}
}

export default card
