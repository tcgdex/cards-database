import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Erika's Gloom",
		'fr-fr': "Ortide d'Erika",
		'es-es': "Gloom de Erika",
		'es-mx': "Gloom de Erika",
		'de-de': "Erikas Duflor",
		'it-it': "Gloom di Erika",
		'pt-br': "Gloom da Érica"
	},

	evolveFrom: {
		'en-us': "Erika's Oddish",
		'fr-fr': "Mystherbe d'Erika",
		'es-es': "Oddish de Erika",
		'es-mx': "Oddish de Erika",
		'de-de': "Erikas Myrapla",
		'it-it': "Oddish di Erika",
		'pt-br': "Oddish da Érica",
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Poison Spray",
			'fr-fr': "Pulvérisation Toxique",
			'es-es': "Aerosol Venenoso",
			'es-mx': "Aerosol Venenoso",
			'de-de': "Giftspray",
			'it-it': "Spruzzo Velenoso",
			'pt-br': "Spray de Veneno"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "It secretes a sticky, drool-like nectar. Though sweet, it smells too repulsive to get very close.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869613,
				tcgplayer: 675814
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 870138,
				tcgplayer: 676853
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870137,
				tcgplayer: 676993
			}
		},
	],
}

export default card
