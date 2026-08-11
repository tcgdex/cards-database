import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [184],
	set: Set,

	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'es-es': "Azumarill",
		'it-it': "Azumarill",
		'pt-br': "Azumarill",
		'de-de': "Azumarill"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill",
		'es-es': "Marill",
		'it-it': "Marill",
		'pt-br': "Marill",
		'de-de': "Marill"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Glistening Bubbles",
			'fr-fr': "Bulles Chatoyantes",
			'es-es': "Burbujas Brillantes",
			'it-it': "Bolle Scintillanti",
			'pt-br': "Bolhas Cintilantes",
			'de-de': "Glitzernde Bläschen"
		},

		effect: {
			'en-us': "If you have any Tera Pokémon in play, this Pokémon can use the Double-Edge attack for {P}.",
			'fr-fr': "Si vous avez au moins un Pokémon Téracristal en jeu, ce Pokémon peut utiliser l'attaque Damoclès pour {P}.",
			'es-es': "Si tienes algún Pokémon Teracristal en juego, este Pokémon puede usar el ataque Doble Filo por {P}.",
			'it-it': "Se hai dei Pokémon Teracristal in gioco, questo Pokémon può usare l'attacco Sdoppiatore al costo di {P}.",
			'pt-br': "Se você tiver algum Pokémon Tera em jogo, este Pokémon poderá usar o ataque Faca de Dois Gumes por {P}.",
			'de-de': "Wenn du mindestens 1 Terakristall-Pokémon im Spiel hast, kann dieses Pokémon die Attacke Risikotackle für {P} einsetzen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Psychic", "Psychic"],

		name: {
			'en-us': "Double-Edge",
			'fr-fr': "Damoclès",
			'es-es': "Doble Filo",
			'it-it': "Sdoppiatore",
			'pt-br': "Faca de Dois Gumes",
			'de-de': "Risikotackle"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 230
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794367,
				tcgplayer: 589872
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794367,
				tcgplayer: 589872
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		}
	],

	illustrator: "Orca",
	
}

export default card
