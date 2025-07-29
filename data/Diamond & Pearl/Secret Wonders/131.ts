import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		de: "Guardevoir"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Teleportation",
				fr: "Téléportation",
				de: "Teleportation"
			},
			effect: {
				en: "Once during your turn (before your attack), choose 1 of your Active Pokémon or 1 of your Benched Pokémon and switch Gardevoir with that Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), choisissez 1 de vos Pokémon Actifs ou 1 de vos Pokémon de Banc et échangez Gardevoir avec ce Pokémon. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) wähle 1 deiner Aktiven Pokémon oder 1 Pokémon auf deiner Bank und tausche Guardevoir mit dem gewählten Pokémon aus. Diese Poké-Power kann nicht benutzt werden, wenn Guardevoir von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Bring Down",
				fr: "Réduire en poussière",
				de: "Ausschalten"
			},
			effect: {
				en: "Choose 1 Pokémon (yours or your opponent's) with the fewest remaining HP (excluding Gardevoir) and that Pokémon is now Knocked Out.",
				fr: "Choisissez 1 Pokémon (le vôtre ou celui de votre adversaire) avec le moins de PV (Gardevoir exclu). Ce Pokémon est maintenant K.O.",
				de: "Wähle 1 Pokémon (ein eigenes oder gegnerisches) mit den wenigsten verbliebenen KP (außer Guardevoir). Das gewählte Pokémon ist jetzt kampfunfähig."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277760
	}
}

export default card
