import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Toxicroak G",
		de: "Toxiquak G"
	},
	illustrator: "Ryota Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		454,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Leap Away",
				de: "Wegspringen"
			},
			effect: {
				en: "Once during your turn (before your attack), if Toxicroak  is your Active Pokémon, you may flip a coin. If heads, return Toxicroak  and all cards attached to it to your hand. This Power can't be used if Toxicroak  is affected by a Special Condition.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn Toxiquak G dein Aktives Pokémon ist, kannst du 1 Münze werfen. Bei \"Kopf\" nimm Toxiquak G und alle Karten, die an es angelegt sind, zurück auf die Hand. Diese Poké-Power kann nicht benutzt werden, wenn Toxiquak G von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poison Revenge",
				de: "Vergeltungsgift"
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 20 damage plus 40 more damage and the Defending Pokémon is now Poisoned.",
				de: "Wenn im letzten Zug deines Gegners mindestens 1 deiner Pokémon durch Schaden eines gegnerischen Angriffs kampfunfähig gemacht wurde, fügt dieser Angriff 20 Schadenspunkte plus 40 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "holo",
			stamp: ["tsubasa-nakamura"]
		}
	],
}

export default card
