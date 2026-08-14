import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
		es: "Haxorus",
		it: "Haxorus",
		pt: "Haxorus",
		de: "Maxax"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		612,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
		de: "Sharfax"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Dragonaxe",
				fr: "Hache Draconique",
				de: "Drachenaxt"
			},
			effect: {
				en: "Does 40 damage times the amount of Metal Energy attached to this Pokémon.",
				fr: "Inflige 40 dégâts multipliés par le nombre d'Énergies Metal attachées à ce Pokémon.",
				de: "Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten {M}-Energien zu."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				en: "Strike of the Champion",
				fr: "Frappe de Maître",
				de: "Meisterstreich"
			},
			effect: {
				en: "If the Defending Pokémon is a Team Plasma Pokémon, it is Knocked Out. (If the Defending Pokémon is not a Team Plasma Pokémon, this attack does nothing.)",
				fr: "Si le Pokémon Défenseur est un Pokémon de la Team Plasma, il est mis K.O. (Si le Pokémon Défenseur n'est pas un Pokémon de la Team Plasma, cette attaque ne fait rien.)",
				de: "Wenn das Verteidigende Pokémon ein Team Plasma-Pokémon ist, wird es kampfunfähig. (Wenn das Verteidigende Pokémon kein Team Plasma-Pokémon ist, hat dieser Angriff keine Auswirkungen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Its tusks are incredibly destructive. They can easily slice through a thick, sturdy steel column every time.",
		de: "Seine zerstörerischen Hauer durchbohren ohne Weiteres dicke Pfeiler aus hartem Stahl."
	},

	thirdParty: {
		cardmarket: 281090,
		tcgplayer: 86036
	}
}

export default card
