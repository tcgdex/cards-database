import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [770],
	set: Set,

	name: {
		'en-us': "Palossand",
		'fr-fr': "Trépassable",
		'es-es': "Palossand",
		'it-it': "Palossand",
		'pt-br': "Palossand",
		'de-de': "Colossand"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
		'es-es': "Sandygast",
		'it-it': "Sandygast",
		'pt-br': "Sandygast",
		'de-de': "Sankabuh"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

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

		damage: 60
	}, {
		cost: ["Psychic", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Spooky Sand",
			'fr-fr': "Sable Effrayant",
			'es-es': "Arena Embrujada",
			'it-it': "Sabbia Inquietante",
			'pt-br': "Areia Assustadora",
			'de-de': "Spuksand"
		},

		damage: 150
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
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "From the hollows in its arms, it fires the bones of its victims, which are all dried up after being drained of their vitality.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769266,
				tcgplayer: 550136
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769266,
				tcgplayer: 550136
			}
		},
	],

	illustrator: "Uta",

}

export default card