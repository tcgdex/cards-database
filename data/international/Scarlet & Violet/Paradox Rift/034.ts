import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [224],
	set: Set,

	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'es-es': "Octillery",
		'it-it': "Octillery",
		'pt-br': "Octillery",
		'de-de': "Octillery"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
		'es-es': "Remoraid",
		'it-it': "Remoraid",
		'pt-br': "Remoraid",
		'de-de': "Remoraid"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Suction Cup Draw",
			'fr-fr': "Pioche Ventouse",
			'es-es': "Robo con Ventosa",
			'it-it': "Ventosa da Pesca",
			'pt-br': "Compra de Ventosas",
			'de-de': "Saugnapfzug"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may draw 3 cards.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez piocher 3 cartes.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes robar 3 cartas.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi pescare tre carte.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá comprar 3 cartas.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 3 Karten ziehen."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Smokescreen Shot",
			'fr-fr': "Tir de Brouillard",
			'es-es': "Disparo Pantalla de Humo",
			'it-it': "Colpo Muro di Fumo",
			'pt-br': "Disparo Esfumaçado",
			'de-de': "Rauchwolkenschuss"
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
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It traps enemies with its suction-cupped tentacles, then smashes them with its rock-hard head.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740510,
				tcgplayer: 523643,
				cardtrader: 265171
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740510,
				tcgplayer: 523643,
				cardtrader: 265171
			}
		},
	],

	illustrator: "Yuka Morii",

	
}

export default card
