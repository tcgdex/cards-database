import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Cobalion-EX",
		fr: "Cobaltium-EX",
		es: "Cobalion-EX",
		it: "Cobalion-EX",
		pt: "Cobalion-EX",
		de: "Kobalium-EX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		638,
	],
	hp: 180,
	types: [
		"Metal",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Righteous Edge",
				fr: "Lame Vertueuse",
				de: "Edle Klinge"
			},
			effect: {
				en: "Discard a Special Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
				de: "Lege 1 an das Verteidigende Pokémon angelegte Spezial-Energie auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Steel Bullet",
				fr: "Balle d'Acier",
				de: "Stahlkugel"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Défenseur.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Verteidigenden Pokémon nicht verändert."
			},
			damage: 100,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
