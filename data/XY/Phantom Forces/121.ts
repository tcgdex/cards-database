import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "M Gengar EX",
		fr: "M-Ectoplasma EX",
		es: "M-Gengar EX",
		it: "M Gengar EX",
		pt: "M-Gengar EX",
		de: "M-Gengar EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 220,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gengar-EX",
		fr: "Ectoplasma-EX",
		es: "Gengar-EX",
		it: "Gengar-EX",
		pt: "Gengar-EX",
		de: "Gengar-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Phantom Gate",
				fr: "Miroir Miroir",
				es: "Puerta Espectral",
				it: "Portale Fantasma",
				pt: "Portão Fantasma",
				de: "Phantomtor"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon's attacks and use it as this attack.",
				fr: "Choisissez l'une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque.",
				es: "Elige 1 de los ataques de los Pokémon de tu rival y úsalo para este ataque.",
				it: "Scegli uno degli attacchi dei Pokémon del tuo avversario e usalo al posto di questo attacco.",
				pt: "Escolha 1 dos ataques dos Pokémon do seu oponente e use-o como este ataque.",
				de: "Wähle 1 Angriff eines gegnerischen Pokémon und verwende ihn als diesen Angriff."
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

	suffix: "EX",
	retreat: 1,

	thirdParty: {
		tcgplayer: 94688
	}
}

export default card
