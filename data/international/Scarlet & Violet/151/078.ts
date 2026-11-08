import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [78],
	set: Set,

	name: {
		'fr-fr': "Galopa",
		'en-us': "Rapidash",
		'es-es': "Rapidash",
		'it-it': "Rapidash",
		'pt-br': "Rapidash",
		'de-de': "Gallopa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Ponyta",
		'en-us': "Ponyta",
		'es-es': "Ponyta",
		'it-it': "Ponyta",
		'pt-br': "Ponyta",
		'de-de': "Ponita"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Roussi",
			'en-us': "Singe",
			'es-es': "Quemadura",
			'it-it': "Scottata",
			'pt-br': "Chamuscada",
			'de-de': "Versengung"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Tour Supersonique",
			'en-us': "Mach Turn",
			'es-es': "Giro Mach",
			'it-it': "Girata Mach",
			'pt-br': "Retorno Supersônico",
			'de-de': "Tempowende"
		},

		effect: {
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The fastest runner becomes the leader, and it decides the herd's pace and direction of travel.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733673,
				tcgplayer: 516607,
				cardtrader: 261211
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733673,
				tcgplayer: 516607,
				cardtrader: 261211
			}
		},
	],

	illustrator: "Nurikabe",

	
}

export default card
