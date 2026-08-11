import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [588],
	set: Set,

	name: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing",
		'es-es': "Karrablast",
		'de-de': "Laukaps",
		'it-it': "Karrablast",
		'pt-br': "Karrablast",
		'es-mx': "Karrablast"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Push Down",
			'fr-fr': "Recul",
			'es-es': "Oprimir",
			'de-de': "Runterdrücken",
			'it-it': "Spintonare",
			'pt-br': "Rebaixar",
			'es-mx': "Oprimir"
		},

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Yuka Morii",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817161,
				tcgplayer: 623436
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817161,
				tcgplayer: 623436
			}
		},
	],
}

export default card
