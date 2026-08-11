import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [111],
	set: Set,

	name: {
		'fr-fr': "Rhinocorne",
		'en-us': "Rhyhorn",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'pt-br': "Rhyhorn",
		'de-de': "Rihorn"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Recul",
			'en-us': "Push Down",
			'es-es': "Oprimir",
			'it-it': "Spintonare",
			'pt-br': "Rebaixar",
			'de-de': "Runterdrücken"
		},

		effect: {
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'fr-fr': "Rocher Écrasant",
			'en-us': "Boulder Crush",
			'es-es': "Alud de Rocas",
			'it-it': "Macignata",
			'pt-br': "Rocha Esmagadora",
			'de-de': "Felsenquetscher"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It can remember only one thing at a time. Once it starts rushing, it forgets why it started.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733706,
				tcgplayer: 516570,
				cardtrader: 261146
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733706,
				tcgplayer: 516570,
				cardtrader: 261146
			}
		},
	],

	illustrator: "GOSSAN",

	
}

export default card
