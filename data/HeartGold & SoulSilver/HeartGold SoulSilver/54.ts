import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Unown",
		fr: "Zarbi",
		de: "Icognito"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "RETURN",
				fr: "RETOUR",
				de: "RETURN"
			},
			effect: {
				en: "Once during your turn, when you put Unown from your hand onto your Bench, you may return all Energy attached to 1 of your Pokémon to your hand.",
				fr: "Une seule fois pendant votre tour, lorsque vous prenez Zarbi dans votre main et le placez sur le Banc, vous pouvez retourner toutes les cartes Énergie attachées à un Pokémon de votre main.",
				de: "Einmal während deines Zuges kannst du, wenn du Icognito von deiner Hand auf deine Bank legst, alle Energien, die an 1 deiner Pokémon angelegt sind, zurück auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
