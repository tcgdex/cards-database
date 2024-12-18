import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
		de: "Magnezone"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 140,
	types: [
		"Metal",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Electric Trans",
				fr: "Transe électrique",
				de: "Elektro-Transfer"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Lightning or Metal Energy attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Magnezone is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie Lightning ou Metal attachée à 1 de vos Pokémon sur un autre de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Magnézone est affecté par un État Spécial.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 - oder -Energie, die an 1 deiner Pokémon angelegt ist, an ein anderes deiner Pokémon anlegen. Diese Poké-Power kann nicht benutzt werden, wenn Magnezone von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Metal",
			],
			name: {
				en: "Cyber Shock",
				fr: "Choc cyber",
				de: "Cyber-Schock"
			},
			effect: {
				en: "Discard a Lightning Energy and a Metal Energy attached to Magnezone. The Defending Pokémon is now Paralyzed.",
				fr: "Défaussez une Énergie Lightning et une Énergie Metal attachée à Magnézone. Le Pokémon Défenseur est maintenant Paralysé.",
				de: "Lege 1 -Energie und 1 -Energie, die an Magnezone angelegt sind, auf deinen Ablagestapel. Das Verteidigende Pokémon ist jetzt gelähmt."
			},
			damage: 80,

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
	retreat: 4,

	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
		es: "Magneton",
		it: "Magneton",
		pt: "Magneton",
		de: "Magneton"
	}
}

export default card
