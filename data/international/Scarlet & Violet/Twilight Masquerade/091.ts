import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [769],
	set: Set,

	name: {
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
		'es-es': "Sandygast",
		'it-it': "Sandygast",
		'pt-br': "Sandygast",
		'de-de': "Sankabuh"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Sand Attack",
			'fr-fr': "Jet de Sable",
			'es-es': "Ataque Arena",
			'it-it': "Turbosabbia",
			'pt-br': "Ataque de Areia",
			'de-de': "Sandwirbel"
		},

		effect: {
			'en-us': "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			'es-es': "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
			'it-it': "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova a usare un attacco, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo.",
			'pt-br': "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar usar um ataque, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não acontecerá.",
			'de-de': "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht, eine Attacke einzusetzen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt."
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador",
			'de-de': "Spukschuss"
		},

		damage: 30
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
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "It flings sand into the eyes of its prey and tries to close in on them while they're blinded, but since Sandygast is so slow, the prey tends to escape.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769265,
				tcgplayer: 550135
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769265,
				tcgplayer: 550135
			}
		},
	],

	illustrator: "Asako Ito",

}

export default card