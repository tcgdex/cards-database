import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Floette",
		fr: "Floette",
		es: "Floette",
		it: "Floette",
		pt: "Floette",
		de: "Floette"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		670,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
		es: "Flabébé",
		it: "Flabébé",
		pt: "Flabébé",
		de: "Flabébé"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flower Veil",
				fr: "Flora-Voile",
				es: "Velo Flor",
				it: "Fiorvelo",
				pt: "Véu de Flores",
				de: "Blütenhülle"
			},
			effect: {
				en: "Each of your Grass Pokémon in play gets +20 HP.",
				fr: "Ajoute 20 PV à chacun de vos Pokémon Grass en jeu.",
				es: "Cada uno de tus Pokémon Grass en juego obtiene 20 PS más.",
				it: "Tutti i tuoi Pokémon Grass in gioco hanno 20 PS in più.",
				pt: "Cada um dos seus Pokémon Grass em jogo recebe +20 PS.",
				de: "Jedes deiner {G}-Pokémon im Spiel erhält +20 KP."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
				es: "Viento Feérico",
				it: "Vento di Fata",
				pt: "Vento de Fada",
				de: "Feenbrise"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It flutters around fields of flowers and cares for flowers that are starting to wilt. It draws out the hidden power of flowers to battle.",
		de: "Es fliegt auf Wiesen umher und kümmert sich um welkende Blumen. Es setzt deren geheime Kräfte frei und nutzt diese zum Kämpfen."
	},

	thirdParty: {
		cardmarket: 281547,
		tcgplayer: 91201
	}
}

export default card
