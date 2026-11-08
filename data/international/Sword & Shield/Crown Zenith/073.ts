import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [744],
	set: Set,

	name: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Invite Out",
			'fr-fr': "Invitation à Sortir",
			'es-es': "Invitar a Salir",
			'it-it': "Vienifuori",
			'pt-br': "Vem Jogar",
			'de-de': "Ausführen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
			'es-es': "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			'it-it': "Lancia una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			'pt-br': "Jogue 1 moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
			'de-de': "Wirf 1 Münze. Tausche bei Kopf 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon can bond very strongly with its Trainer, but it also has a habit of biting. Raising a Rockruff for a long time can be challenging.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691791,
				tcgplayer: 478204
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691791,
				tcgplayer: 478204
			}
		},
	],
}

export default card
