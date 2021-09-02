import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
		es: "Umbreon",
		it: "Umbreon",
		pt: "Umbreon",
		de: "Nachtara"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Shade",
				fr: "Ombre Ténébreuse",
				es: "Sombra Oscura",
				it: "Tonoscuro",
				pt: "Máscara da Escuridão",
				de: "Finsterer Schatten"
			},
			effect: {
				en: "Each of your Team Plasma Pokémon in play gets +20 HP.",
				fr: "Ajoute 20 PV à chacun de vos Pokémon de la Team Plasma en jeu.",
				es: "Cada uno de tus Pokémon del Equipo Plasma en juego obtiene 20 PV más.",
				it: "Ciascuno dei tuoi Pokémon Team Plasma in gioco ottiene 20 PV in più.",
				pt: "Cada um dos seus Pokémon da Equipe Plasma em jogo recebe +20 PS.",
				de: "Jedes deiner Team-Plasma-Pokémon im Spiel erhält +20 KP."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Darkness Fang",
				fr: "Croc Obscur",
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



}

export default card
