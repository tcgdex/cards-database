import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [815],
	name: {
		en: "Cinderace V",
		fr: "Pyrobut V",
		es: "Cinderace V",
		it: "Cinderace V",
		pt: "Cinderace V",
		de: "Liberlo V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Field Runner",
				fr: "Coureur de Fond",
				es: "",
				it: "",
				pt: "",
				de: ""
			},
			effect: {
				en: "If a Stadium is in play, this Pokémon has no Retreat Cost.",
				fr: "Si un Stade est en jeu, ce Pokémon n'a pas de Coût de Retraite.",
				es: "Si hay un Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
				it: "Se c'è in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
				pt: "Se um Estádio estiver em jogo, este Pokémon não terá custo de Recuo.",
				de: "Wenn eine Stadionkarte im Spiel ist, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Crimson Legs",
				fr: "Jambes Carmin",
				es: "Extremidades Carmesís",
				it: "Arti Incandescenti",
				pt: "Pernas Carmesins",
				de: "Rote Beine"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 210,
	types: ["Fire"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
