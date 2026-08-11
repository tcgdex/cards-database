import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Umbreon",
		'fr-fr': "Noctali",
		'es-es': "Umbreon",
		'it-it': "Umbreon",
		'pt-br': "Umbreon",
		'de-de': "Nachtara"
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
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dark Shade",
				'fr-fr': "Ombre Ténébreuse",
				'es-es': "Sombra Oscura",
				'it-it': "Tonoscuro",
				'pt-br': "Máscara da Escuridão",
				'de-de': "Finsterer Schatten"
			},
			effect: {
				'en-us': "Each of your Team Plasma Pokémon in play gets +20 HP.",
				'fr-fr': "Ajoute 20 PV à chacun de vos Pokémon de la Team Plasma en jeu.",
				'es-es': "Cada uno de tus Pokémon del Equipo Plasma en juego obtiene 20 PV más.",
				'it-it': "Ciascuno dei tuoi Pokémon Team Plasma in gioco ottiene 20 PV in più.",
				'pt-br': "Cada um dos seus Pokémon da Equipe Plasma em jogo recebe +20 PS.",
				'de-de': "Jedes deiner Team-Plasma-Pokémon im Spiel erhält +20 KP."
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
				'en-us': "Darkness Fang",
				'fr-fr': "Croc Obscur",
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
		'en-us': "When exposed to the moon's aura, the rings on its body glow faintly and it's filled with a mysterious power.",
	},

	thirdParty: {
		cardmarket: 280942,
		tcgplayer: 90152
	}
}

export default card
