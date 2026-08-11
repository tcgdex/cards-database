import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [439],
	set: Set,

	name: {
		'en-us': "Mime Jr.",
		'fr-fr': "Mime Jr.",
		'es-es': "Mime Jr.",
		'it-it': "Mime Jr.",
		'pt-br': "Mime Jr.",
		'de-de': "Pantimimi"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mimed Games",
			'fr-fr': "Jeux Mimés",
			'es-es': "Juegos Mímicos",
			'it-it': "Giochi Mimici",
			'pt-br': "Jogos Miméticos",
			'de-de': "Mimenspiele"
		},

		effect: {
			'en-us': "Your opponent chooses an attack from 1 of their Pokémon in play. Use the chosen attack as this attack.",
			'fr-fr': "Votre adversaire choisit une attaque de l'un de ses Pokémon en jeu. Utilisez l'attaque choisie en tant que cette attaque.",
			'es-es': "Tu rival elige un ataque de uno de sus Pokémon en juego. Usa el ataque elegido para este ataque.",
			'it-it': "Il tuo avversario sceglie un attacco di uno dei suoi Pokémon in gioco. Usalo al posto di questo attacco.",
			'pt-br': "Seu oponente escolhe um ataque de 1 dos Pokémon dele em jogo. Use o ataque escolhido como este ataque.",
			'de-de': "Dein Gegner wählt 1 Attacke von 1 seiner Pokémon im Spiel. Setze die gewählte Attacke als diese Attacke ein."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751696,
				tcgplayer: 534671,
				cardtrader: 274342
			}
		},
	],

	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "In an attempt to confuse its enemy, it mimics the enemy's movements. Then it wastes no time in making itself scarce!",
	},

}

export default card
