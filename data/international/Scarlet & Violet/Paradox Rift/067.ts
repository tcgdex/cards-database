import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [741],
	set: Set,

	name: {
		'en-us': "Oricorio",
		'fr-fr': "Plumeline",
		'es-es': "Oricorio",
		'it-it': "Oricorio",
		'pt-br': "Oricorio",
		'de-de': "Choreogel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Pep Up",
			'fr-fr': "Coup de Peps",
			'es-es': "Animar",
			'it-it': "Animare",
			'pt-br': "Torcida",
			'de-de': "Beflügeln"
		},

		effect: {
			'en-us': "Shuffle your hand into your deck. Then, draw a card for each Benched Pokémon (both yours and your opponent's).",
			'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada Pokémon en Banca (tanto tuyos como de tu rival).",
			'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni Pokémon in panchina, sia tuo che del tuo avversario.",
			'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre uma carta para cada Pokémon no Banco (seus e do seu oponente).",
			'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jedes Pokémon auf der Bank (deiner und der deines Gegners)."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Volt Wave",
			'fr-fr': "Vague Survoltée",
			'es-es': "Onda Electrificante",
			'it-it': "Onda Volt",
			'pt-br': "Onda de Volts",
			'de-de': "Voltwelle"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The energetic, cheerful dance of these Oricorio is popular with children, but the Oricorio themselves are hard to find in Paldea.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740558,
				tcgplayer: 523702,
				cardtrader: 265140
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740558,
				tcgplayer: 523702,
				cardtrader: 265140
			}
		},
	],

	illustrator: "Saya Tsuruta",

	
}

export default card
