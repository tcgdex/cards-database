import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Marshadow",
		fr: "Marshadow",
		es: "Marshadow",
		it: "Marshadow",
		pt: "Marshadow",
		de: "Marshadow"
	},

	illustrator: "0313",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		802,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Imitation",
				fr: "Ombre Imitante",
				es: "Imitación Sombría",
				it: "Imitazione d’Ombra",
				pt: "Imitação das Sombras",
				de: "Schattenimitation"
			},
			effect: {
				en: "Choose 1 of your opponent’s Active Pokémon’s non-GX attacks and use it as this attack.",
				fr: "Choisissez l’une des attaques non GX du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
				es: "Elige 1 de los ataques no GX del Pokémon Activo de tu rival y úsalo para este ataque.",
				it: "Scegli un attacco non GX del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
				pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente que não seja um ataque GX e use-o como este ataque.",
				de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners, die keine GX-Attacke ist, und setze sie als diese Attacke ein."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 408159,
		tcgplayer: 201278
	}
}

export default card
