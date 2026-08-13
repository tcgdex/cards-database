import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Klang",
		fr: "Clic",
		es: "Klang",
		it: "Klang",
		pt: "Klang",
		de: "Kliklak"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		600,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Klink",
		fr: "Tic",
		de: "Klikk"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Bind",
				fr: "Étreinte",
				de: "Klammergriff"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gear Grind",
				fr: "Lancécrou",
				de: "Klikkdiskus"
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 60,

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

	description: {
		en: "By changing the direction in which it rotates, it communicates its feelings to others. When angry, it rotates faster.",
		de: "Teilt Artgenossen seine Gefühlslage mit, indem es die Umlaufrichtung ändert. Wenn es wütend ist, dreht es sich schneller."
	},

	thirdParty: {
		cardmarket: 279813,
		tcgplayer: 86474
	}
}

export default card
