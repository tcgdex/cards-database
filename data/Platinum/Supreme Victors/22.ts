import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine",
		de: "Lepumentas"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Antique Magic",
				fr: "Magie antique",
				de: "Antike Magie"
			},
			effect: {
				en: "Put 3 damage counters on any Pokémon (both yours and your opponent's) in any way you like.",
				fr: "Placez 3 marqueurs de dégât sur n'importe quel Pokémon (les vôtres et ceux de votre adversaire) de la façon que vous voulez.",
				de: "Lege 3 Schadensmarken in beliebiger Verteilung auf 1 oder mehrere Pokémon im Spiel (deine und die deines Gegners)."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Synchro Attack",
				fr: "Attaque synchro",
				de: "Synchro-Angriff"
			},
			effect: {
				en: "If the Defending Pokémon has the same remaining HP as Claydol, this attack's base damage is 90 instead of 30.",
				fr: "Si le Pokémon Défenseur a le même nombre de PV que Kaorine, les dégâts de base de cette attaque sont de 90 au lieu de 30.",
				de: "Wenn das Verteidigende Pokémon gleich viel verbliebene KP hat wie Lepumentas, beträgt der Grundschaden dieses Angriffs 90 Schadenspunkte anstelle von 30 Schadenspunkten."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
