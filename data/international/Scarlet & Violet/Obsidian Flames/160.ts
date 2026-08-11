import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [334],
	set: Set,

	name: {
		'fr-fr': "Altaria",
		'en-us': "Altaria",
		'es-es': "Altaria",
		'it-it': "Altaria",
		'pt-br': "Altaria",
		'de-de': "Altaria"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	evolveFrom: {
		'fr-fr': "Tylton",
		'en-us': "Swablu",
		'es-es': "Swablu",
		'it-it': "Swablu",
		'pt-br': "Swablu",
		'de-de': "Wablu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Glissement",
			'en-us': "Glide",
			'es-es': "Planeo",
			'it-it': "Aliante",
			'pt-br': "Planeio",
			'de-de': "Gleiten"
		},

		damage: 30
	}, {
		cost: ["Water", "Metal"],

		name: {
			'fr-fr': "Berceuse Apaisante",
			'en-us': "Soothing Lullaby",
			'es-es': "Nana Sedante",
			'it-it': "Ninnananna Calmante",
			'pt-br': "Canção de Ninar Calmante",
			'de-de': "Beruhigendes Wiegenlied"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi. Pendant le Contrôle Pokémon, votre adversaire lance 2 pièces au lieu d'une. S'il obtient au moins un côté pile, ce Pokémon-là reste Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep. During Pokémon Checkup, your opponent flips 2 coins instead of 1. If either of them is tails, that Pokémon is still Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido. Durante el Chequeo Pokémon, tu rival lanza 2 monedas en vez de una. Si sale cruz en alguna de ellas, ese Pokémon sigue Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato. Durante il controllo Pokémon, il tuo avversario lancia due volte una moneta invece di una. Se esce almeno una volta croce, quel Pokémon resta addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido. Durante o Checape Pokémon, seu oponente joga 2 moedas ao invés de 1. Se qualquer uma delas sair coroa, aquele Pokémon permanecerá Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt. Beim Pokémon-Check wirft dein Gegner 2 Münzen anstelle von 1. Zeigt mindestens 1 Zahl, schläft jenes Pokémon weiter."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "If it bonds with a person, it will gently envelop the friend with its soft wings, then hum.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725240,
				tcgplayer: 509663,
				cardtrader: 255845
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725240,
				tcgplayer: 509663,
				cardtrader: 255845
			}
		},
	],

	illustrator: "kurumitsu",

	
}

export default card
