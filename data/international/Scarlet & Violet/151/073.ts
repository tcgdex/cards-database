import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [73],
	set: Set,

	name: {
		'fr-fr': "Tentacruel",
		'en-us': "Tentacruel",
		'es-es': "Tentacruel",
		'it-it': "Tentacruel",
		'pt-br': "Tentacruel",
		'de-de': "Tentoxa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Tentacool",
		'en-us': "Tentacool",
		'es-es': "Tentacool",
		'it-it': "Tentacool",
		'pt-br': "Tentacool",
		'de-de': "Tentacha"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Fouet Empoisonné",
			'en-us': "Poisonous Whip",
			'es-es': "Látigo Venenoso",
			'it-it': "Frustata Velenosa",
			'pt-br': "Chicote Venenoso",
			'de-de': "Giftpeitsche"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Panique Tentaculaire",
			'en-us': "Tentacular Panic",
			'es-es': "Pánico Tentacular",
			'it-it': "Panico Tentacolare",
			'pt-br': "Tentáculo do Pânico",
			'de-de': "Tentakelpanik"
		},

		effect: {
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 90 dégâts pour chaque côté face. Si le premier lancer est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
			'en-us': "Flip a coin until you get tails. This attack does 90 damage for each heads. If the first flip is tails, your opponent's Active Pokémon is now Confused.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 90 puntos de daño por cada cara. Si sale cruz en el primer lanzamiento, el Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 90 danni ogni volta che esce testa. Se la prima volta esce croce, il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 90 pontos de dano para cada cara. Se a primeira jogada sair coroa, o Pokémon Ativo do seu oponente agora estará Confuso.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu. Wenn der erste Münzwurf Zahl zeigt, ist das Aktive Pokémon deines Gegners jetzt verwirrt."
		},

		damage: "90×"
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
		'en-us': "Its 80 tentacles can stretch and shrink freely. Tentacruel ensnares prey in a net of spread-out tentacles, delivering venomous stings to its catch.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733668,
				tcgplayer: 516567,
				cardtrader: 261221
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733668,
				tcgplayer: 516567,
				cardtrader: 261221
			}
		},
	],

	illustrator: "miki kudo",

	
}

export default card
