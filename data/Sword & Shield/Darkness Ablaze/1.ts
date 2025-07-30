import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Butterfree V",
		fr: "Papilusion V",
		es: "Butterfree V",
		it: "Butterfree V",
		pt: "Butterfree V",
		de: "Smettbo V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Dizzying Poison",
				fr: "Poison Étourdissant",
				es: "Veneno Mareante",
				it: "Stordiveleno",
				pt: "Veneno Vertiginoso",
				de: "Schwindelerregendes Gift"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Blasting Wind",
				fr: "Vent Impitoyable",
				es: "Vientos Explosivos",
				it: "Vento Distruttivo",
				pt: "Vendaval Avassalador",
				de: "Peitschender Wind"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 482879
	}
}

export default card
