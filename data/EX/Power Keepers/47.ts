import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Carvanha",
		fr: "Carvanha",
		de: "Kanivanha"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		318,
	],

	hp: 40,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rough Skin",
				fr: "Peau dure",
				de: "Rauhaut"
			},
			effect: {
				en: "If Carvanha is your Active Pokémon and is damaged by an opponent's attack (even if Carvanha is Knocked Out), put 1 damage counter on the Attacking Pokémon.",
				fr: "Si Carvanha est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Carvanha est mis K.O), placez 1 marqueur de dégât sur le Pokémon Attaquant.",
				de: "Wenn Kanivanha dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (selbst wenn Kanivanha dadurch kampfunfähig wird), lege 1 Schadensmarke auf das Angreifende Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Rogne",
				de: "Nagen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277353,
		tcgplayer: 84113
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

