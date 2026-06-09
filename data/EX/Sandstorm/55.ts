import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
		de: "Xatu"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Natu",
		fr: "Natu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Healing Wind",
				fr: "Vent guérisseur",
				de: "Heilender Wind"
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Active Pokémon. This power can't be used if Xatu is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un marqueur de dégât à chacun de vos Pokémon Actifs. Ce pouvoir ne peut pas être utilisé si Xatu est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von jedem deiner Aktiven Pokémon entfernen. Diese Poké-Power kann nicht verwendet werden, falls Xatu von einem Speziellen Zustand betroffen ist."
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
				en: "Psyimpact",
				fr: "Impact psy",
				de: "Psieinschlag"
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon.",
				fr: "Placez un marqueur de dégât sur chacun des Pokémon de votre adversaire.",
				de: "Lege auf jedes Pokémon deines Gegners eine Schadensmarke."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 275832,
		tcgplayer: 90662
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
	]
}

export default card
