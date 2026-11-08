import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [293],
	set: Set,

	name: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur",
		'es-es': "Whismur",
		'it-it': "Whismur",
		'pt-br': "Whismur",
		'de-de': "Flurmel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Push Down",
			'fr-fr': "Recul",
			'es-es': "Oprimir",
			'it-it': "Spintonare",
			'pt-br': "Rebaixar",
			'de-de': "Runterdrücken"
		},

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "When Whismur cries, the sound of its own voice startles it, making the Pokémon cry even louder. It cries until it's exhausted, then it falls asleep.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740688,
				tcgplayer: 523829,
				cardtrader: 265270
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740688,
				tcgplayer: 523829,
				cardtrader: 265270
			}
		},
	],

	illustrator: "sui",

	
}

export default card
