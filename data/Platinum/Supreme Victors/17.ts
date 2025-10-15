import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Butterfree FB",
		fr: "Papilusion ",
		de: "Smettbo FB"
	},
	illustrator: "Lee HyunJung",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		12,
	],
	hp: 90,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Compound Eyes",
				fr: "Oeil composé",
				de: "Facettenauge"
			},
			effect: {
				en: "If your opponent's Active Pokémon has any Poké-Bodies, each of Butterfree FB's attacks does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Si le Pokémon Actif de votre adversaire possède des Poké-Bodies, chacune des attaques de Papilusion  inflige 30 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
				de: "Wenn das Aktive Pokémon deines Gegners mindestens 1 Poké-Body hat, fügen alle Angriffe von Smettbo FB den Aktiven Pokémon 30 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Select Powder",
				fr: "Poudre select",
				de: "Auswahlpuder"
			},
			effect: {
				en: "Choose either Burned or Poisoned. The Defending Pokémon is now affected by that Special Condition.",
				fr: "Choisissez Brûlé ou Empoisonné. Le Pokémon Défenseur est maintenant affecté par cet État Spécial.",
				de: "Wähle \"verbrannt\" oder \"vergiftet\". Das Verteidigende Pokémon ist jetzt vom gewählten Speziellen Zustand betroffen."
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
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "reverse",
			foil: "league",
		},
	]



}

export default card
