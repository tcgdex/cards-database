import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [931],
	set: Set,

	name: {
		'en-us': "Squawkabilly",
		'fr-fr': "Tapatoès",
		'de-de': "Krawalloro",
		'it-it': "Squawkabilly",
		'es-es': "Squawkabilly",
		'pt-br': "Squawkabilly",
		'es-mx': "Squawkabilly"
	},


	illustrator: "Julie Hang",

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
			'de-de': "Runterdrücken",
			'it-it': "Spintonare",
			'es-es': "Oprimir",
			'pt-br': "Rebaixar",
			'es-mx': "Oprimir"
		},

		effect: {
			'en-us': "You may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Vous pouvez envoyer le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'de-de': "Du kannst das Aktive Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'it-it': "Puoi spostare il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'es-es': "Puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'pt-br': "Você pode mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'es-mx': "Puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826034,
				tcgplayer: 632962
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826034,
				tcgplayer: 632962
			}
		},
	],
}

export default card
