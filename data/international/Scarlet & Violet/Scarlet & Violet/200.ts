import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [929],
	set: Set,

	name: {
		'en-us': "Dolliv",
		'fr-fr': "Olivado",
		'es-es': "Dolliv",
		'it-it': "Dolliv",
		'pt-br': "Dolliv",
		'de-de': "Olivinio"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Smoliv",
		'fr-fr': "Olivini"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'de-de': "Hieb"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Apply Oil",
			'fr-fr': "Application Huileuse",
			'es-es': "Aplicar Aceite",
			'it-it': "Applicolio",
			'pt-br': "Colocar Azeite",
			'de-de': "Einölen"
		},

		effect: {
			'en-us': "During your opponent's next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'attaquer, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			'es-es': "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta atacar, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
			'it-it': "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo.",
			'pt-br': "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar atacar, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não acontecerá.",
			'de-de': "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "Oswaldo KATO",

	description: {
		'en-us': "Dolliv shares its tasty, fresh-scented oil with others. This species has coexisted with humans since times long gone.",
	},

	thirdParty: {
        cardmarket: 702496,
        tcgplayer: 486622
    }
}

export default card