import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Electrode",
		de: "Lektrobal"
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Radiance",
				fr: "Rayonnement",
				de: "Strahlung"
			},
			effect: {
				en: "If Electrode is your Active Pokémon and is damaged by an opponent's attack (even if Electrode is Knocked Out), put 1 damage counter on each of your opponent's Pokémon.",
				fr: "Si Electrode est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Electrode est mis K.O), placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire.",
				de: "Wenn Lektrobal dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Lektrobal dadurch kampfunfähig wird), lege 1 Schadensmarke auf jedes Pokémon deines Gegners."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Low Current",
				fr: "Bas courant",
				de: "Schwachstrom"
			},
			effect: {
				en: "If Electrode was damaged by an attack during your opponent's last turn, the Defending Pokémon is now Paralyzed.",
				fr: "Si une attaque a infligé des dégâts à Electrode lors du dernier tour de votre adversaire, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wenn Lektrobal im letzten Zug deines Gegners durch einen Angriff Schaden zugefügt wurde, ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swift",
				fr: "Météores",
				de: "Sternschauer"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
