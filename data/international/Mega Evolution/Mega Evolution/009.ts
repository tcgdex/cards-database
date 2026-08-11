import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium",
		'de-de': "Lorblatt",
		'it-it': "Bayleef",
		'es-es': "Bayleef",
		'pt-br': "Bayleef",
		'es-mx': "Bayleef"
	},

	illustrator: "nisimono",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'de-de': "Endivie",
		'it-it': "Chikorita",
		'es-es': "Chikorita",
		'pt-br': "Chikorita",
		'es-mx': "Chikorita"
	},
	stage: "Stage1",
	dexId: [153],

	attacks: [{
		cost: ["Grass", "Colorless"],

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
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851080,
				tcgplayer: 654348
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851080,
				tcgplayer: 654348
			}
		},
	],
}

export default card
