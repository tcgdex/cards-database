import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Xatu",
		'fr-fr': "Xatu",
		'de-de': "Xatu"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [178],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Natu",
		'fr-fr': "Natu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Healing Wind",
				'fr-fr': "Vent guérisseur",
				'de-de': "Heilender Wind"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may remove 1 damage counter from each of your Active Pokémon. This power can't be used if Xatu is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un marqueur de dégât à chacun de vos Pokémon Actifs. Ce pouvoir ne peut pas être utilisé si Xatu est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von jedem deiner Aktiven Pokémon entfernen. Diese Poké-Power kann nicht verwendet werden, falls Xatu von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyimpact",
				'fr-fr': "Impact psy",
				'de-de': "Psieinschlag"
			},
			effect: {
				'en-us': "Put 1 damage counter on each of your opponent's Pokémon.",
				'fr-fr': "Placez un marqueur de dégât sur chacun des Pokémon de votre adversaire.",
				'de-de': "Lege auf jedes Pokémon deines Gegners eine Schadensmarke."
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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275832,
				tcgplayer: 90662
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275832,
				tcgplayer: 90662
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125153
			}
		},
	],

}

export default card
