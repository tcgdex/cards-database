import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Roserade GL",
		fr: "Roserade  Niv. 22",
		de: "Roserade GL"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		407,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Poison Bind",
				fr: "Entrave toxik",
				de: "Giftfesselung"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned and can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné et ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet und kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Long Whip",
				fr: "Long fouet",
				de: "Langpeitsche"
			},
			effect: {
				en: "If the Defending Pokémon is affected by any Special Conditions, you may do 30 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si le Pokémon Défenseur est affecté par n'importe lequel des États Spéciaux, vous pouvez infliger 30 dégâts à n'importe lequel des Pokémon de Banc à la place. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wenn das Verteidigende Pokémon von einem Speziellen Zustand betroffen ist, kannst du 1 beliebigen Pokémon auf der Bank 30 Schadenspunkte zufügen, anstelle dem Verteidigenden Pokémon Schaden zuzufügen. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		tcgplayer: 88834
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
