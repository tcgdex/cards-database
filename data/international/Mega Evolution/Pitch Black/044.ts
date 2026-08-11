import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cranidos",
		'fr-fr': "Kranidos",
		'es-es': "Cranidos",
		'es-mx': "Cranidos",
		'de-de': "Koknodon",
		'it-it': "Cranidos",
		'pt-br': "Cranidos"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [408],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Antique Skull Fossil"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Push Down",
			'fr-fr': "Recul",
			'es-es': "Oprimir",
			'es-mx': "Oprimir",
			'de-de': "Runterdrücken",
			'it-it': "Spintonare",
			'pt-br': "Rebaixar"
		},

		cost: ["Fighting", "Fighting"],

		damage: 70,

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895830,
				tcgplayer: 704801
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895830,
				tcgplayer: 704801
			}
		},
	],
}

export default card
