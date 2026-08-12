import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Cubchoo",
		fr: "Polarhume",
		es: "Cubchoo",
		it: "Cubchoo",
		pt: "Cubchoo",
		de: "Petznief"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		613,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sniffle",
				fr: "Reniflement",
				de: "Schniefen"
			},
			effect: {
				en: "During your next turn, this Pokémon's Belt attack's base damage is 40.",
				fr: "Pendant votre prochain tour, les dégâts de base de l'attaque Taloche de ce Pokémon sont de 40.",
				de: "Während deines nächsten Zuges beträgt der Grundschaden der Attacke Versohler dieses Pokémon 40 Schadenspunkte."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Belt",
				fr: "Taloche",
				de: "Versohler"
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

	retreat: 3,

	description: {
		en: "Its nose is always running. It sniffs the snot back up because the mucus provides the raw material for its moves.",
		de: "Der Schleim, der stets aus seiner Nase hängt, treibt seine Attacken an. Zieht es ihn hoch, steht ein Angriff bevor."
	},

	thirdParty: {
		cardmarket: 280261,
		tcgplayer: 84525
	}
}

export default card
