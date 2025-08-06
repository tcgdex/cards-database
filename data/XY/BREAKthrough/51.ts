import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magnéti",
		es: "Magnemite",
		it: "Magnemite",
		pt: "Magnemite",
		de: "Magnetilo"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sparkling Induction",
				fr: "Induction Étincelante",
				es: "Inducción Centelleante",
				it: "Induzione Scintillante",
				pt: "Indução Cintilante",
				de: "Funkelnde Induktion"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, its Retreat Cost is Colorless less for each Magnemite on your Bench.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, son Coût de Retraite est diminué de Colorless pour chaque Magnéti sur votre Banc.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, su Coste de Retirada es de Colorless menos por cada Magnemite en tu Banca.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, il suo costo di ritirata è ridotto di Colorless per ogni Magnemite nella tua panchina.",
				pt: "Enquanto este Pokémon for seu Pokémon Ativo, seu Custo para Recuar é Colorless menor para cada Magnemite em seu Banco.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, verringern sich die Rückzugskosten um Colorless für jedes Magnetilo auf deiner Bank."
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
				en: "Lightning Ball",
				fr: "Boule Éclair",
				es: "Bola Relámpago",
				it: "Fulminpalla",
				pt: "Bola de Raios",
				de: "Kugelblitz"
			},

			damage: 20,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 286297,
		tcgplayer: 107170
	}
}

export default card
