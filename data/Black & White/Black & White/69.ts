import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
		es: "Scrafty",
		it: "Scrafty",
		pt: "Scrafty",
		de: "Irokex"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		560,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
		de: "Zurrokex"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Spit Acid",
				fr: "Crachat d’Acide",
				de: "Säurespucker"
			},
			effect: {
				en: "The Defending Pokémon is now Burned. Flip a coin. If heads, the Defending Pokémon is also Paralyzed.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé. Lancez une pièce. Si c’est face, le Pokémon Défenseur est aussi Paralysé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt. Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt auch paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied Voltige",
				de: "Turmkick"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Groups of them beat up anything that enters their territory. Each can spit acidic liquid from its mouth.",
		de: "Es geht im Rudel gegen Eindringlinge vor. Aus seinem Mund speit es eine ätzende Flüssigkeit."
	},

	thirdParty: {
		cardmarket: 279807,
		tcgplayer: 88977
	}
}

export default card
