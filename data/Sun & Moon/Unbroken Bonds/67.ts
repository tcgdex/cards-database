import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},

	illustrator: "chibi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Swelling Spite",
				fr: "Mépris Montant",
				es: "Rencor Ascendente",
				it: "Crescita Dispettosa",
				pt: "Rancor Crescente",
				de: "Wachsender Groll"
			},
			effect: {
				en: "When this Pokémon is Knocked Out, search your deck for up to 2 Haunter and put them onto your Bench. Then, shuffle your deck.",
				fr: "Lorsque ce Pokémon est mis K.O., cherchez jusqu’à 2 Spectrum dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Cuando este Pokémon quede Fuera de Combate, busca en tu baraja hasta 2 Haunter y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Quando questo Pokémon viene messo KO, cerca nel tuo mazzo fino a due Haunter e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Quando este Pokémon for Nocauteado, procure por até 2 Haunter no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Wenn dieses Pokémon kampfunfähig wird, durchsuche dein Deck nach bis zu 2 Alpollo und lege sie auf deine Bank. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Will-O-Wisp",
				fr: "Feu Follet",
				es: "Fuego Fatuo",
				it: "Fuocofatuo",
				pt: "Fogo Fátuo",
				de: "Irrlicht"
			},

			damage: 20,

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
		cardmarket: 372355,
		tcgplayer: 189167
	}
}

export default card
