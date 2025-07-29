import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking Niv. 53",
		de: "Stolloss"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Return Blow",
				fr: "Retour de coup",
				de: "Umkehrhieb"
			},
			effect: {
				en: "If Aggron was damaged by an attack during your opponent's last turn, this attack does the same amount of damage done to Aggron to the Defending Pokémon.",
				fr: "Si une attaque a infligé des dégâts à Galeking lors du dernier tour de votre adversaire, cette attaque inflige le même nombre de dégâts au Pokémon Défenseur.",
				de: "Wenn Stolloss im letzten Zug deines Gegners durch einen Angriff Schaden zugefügt wurde, fügt dieser Angriff dem Verteidigenden Pokémon die gleiche Anzahl Schadenspunkte, die Stolloss zugefügt wurde, zu."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Fang",
				fr: "Croc métallique",
				de: "Metallfänge"
			},
			effect: {
				en: "You may discard the top card of your deck. If you do, remove 2 damage counters and all Special Conditions from Aggron.",
				fr: "Vous pouvez défausser la carte du dessus de votre deck. Retirez alors à Galeking 2 marqueurs de dégât ainsi que tous ses États Spéciaux.",
				de: "Du kannst die oberste Karte deines Decks auf deinen Ablagestapel legen. Wenn du das machst, entferne 2 Schadensmarken und alle Speziellen Zustände von Stolloss."
			},
			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros impact",
				de: "Schwerer Einschlag"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278588
	}
}

export default card
