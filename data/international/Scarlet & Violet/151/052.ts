import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [52],
	set: Set,

	name: {
		'fr-fr': "Miaouss",
		'en-us': "Meowth",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Miaou Vas-Tu ?",
			'en-us': "Come Here Right Meow",
			'es-es': "Ven Aquí Ya",
			'it-it': "Gatto nel Sacco",
			'pt-br': "Miaujude Aqui",
			'de-de': "Miau, komm her"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			'en-us': "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			'es-es': "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			'it-it': "Lancia una moneta. Se esce testa, sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'pt-br': "Jogue uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'de-de': "Wirf 1 Münze. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Creusogriffes",
			'en-us': "Dig Claws",
			'es-es': "Hundir Garras",
			'it-it': "Scavazanne",
			'pt-br': "Fincar Garras",
			'de-de': "Schaufelkrallen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733647,
				tcgplayer: 516221,
				cardtrader: 261133
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733647,
				tcgplayer: 516221,
				cardtrader: 261133
			}
		},
	],

	illustrator: "Naoki Saito",

	
}

export default card
