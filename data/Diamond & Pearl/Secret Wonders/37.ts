import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
		de: "Tohaido"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		319,
	],
	hp: 80,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rough Skin",
				fr: "Peau dure",
				de: "Rauhaut"
			},
			effect: {
				en: "If Sharpedo is your Active Pokémon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				fr: "Si Sharpedo est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Sharpedo est mis K.O), placez 2 marqueurs de dégât sur le Pokémon Attaquant.",
				de: "Wenn Tohaido dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Tohaido dadurch kampfunfähig wird), lege 2 Schadensmarkten auf das Angreifende Pokémon."
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
				en: "Strike Wound",
				fr: "Blessure d'attaque",
				de: "Wundentreffer"
			},
			effect: {
				en: "If the Defending Pokémon has 2 or more damage counters on it, this attack does 60 damage plus 20 more damage. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Si le Pokémon Défenseur possède au moins 2 marqueurs de dégât, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
				de: "Wenn mindestens 2 Schadensmarken auf dem Verteidigenden Pokémon liegen, fügt dieser Angriff 60 Schadenspunkte plus 20 weitere Schadenspunkte zu. Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
