import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
		de: "Xatu"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Natu",
		fr: "Natu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psychic Shift",
				fr: "Échange Psy",
				de: "Psybann"
			},
			effect: {
				en: "Once during your turn, if Xatu is on your Bench, you may choose 1 Special Condition from 1 of your Active Pokémon and remove that Special Condition. Then, 1 of the Defending Pokémon is now affected by that Special Condition.",
				fr: "Une seule fois lors de votre tour, si Xatu est sur votre Banc, vous pouvez choisir 1 État Spécial d'1 de vos Pokémon Actifs et le lui retirer. Ensuite, 1 des Pokémon Défenseurs est affecté par cet État Spécial.",
				de: "Einmal während deines Zuges kannst du, wenn Xatu auf deiner Bank ist, 1 Speziellen Zustand von 1 deiner Aktiven Pokémon wählen und 1 diesen Speziellen Zustand entfernen. Danach wähle 1 Verteidigendes Pokémon, das jetzt von diesem Speziellen Zustand betroffen ist."
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
				en: "Energy Singe",
				fr: "Brûlure d'Énergie",
				de: "Energieversengung"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon plus 10 more damage for each Energy attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie qui lui est attachée.  (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede an das gewählte Pokémon angelegte Energie zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277797
	}
}

export default card
