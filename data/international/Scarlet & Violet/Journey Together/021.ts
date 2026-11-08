import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [467],
	set: Set,

	name: {
		'en-us': "Magmortar",
		'fr-fr': "Maganon",
		'es-es': "Magmortar",
		'de-de': "Magbrant",
		'it-it': "Magmortar",
		'pt-br': "Magmortar",
		'es-mx': "Magmortar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'de-de': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'es-mx': "Magmar"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Magma Surge",
			'fr-fr': "Déferlante de Magma",
			'es-es': "Aluvión Magma",
			'de-de': "Magmawoge",
			'it-it': "Ondata di Magma",
			'pt-br': "Rebentação de Magma",
			'es-mx': "Oleada de Magma"
		},

		effect: {
			'en-us': "During Pokémon Checkup, put 3 more damage counters on your opponent's Burned Pokémon.",
			'fr-fr': "Pendant le Contrôle Pokémon, placez 3 marqueurs de dégâts supplémentaires sur les Pokémon Brûlés de votre adversaire.",
			'es-es': "Durante el Chequeo Pokémon, pon 3 contadores de daño más en el Pokémon Quemado de tu rival.",
			'de-de': "Lege beim Pokémon-Check 3 Schadensmarken mehr auf die verbrannten Pokémon deines Gegners.",
			'it-it': "Metti altri tre segnalini danno sui Pokémon bruciati del tuo avversario durante il controllo Pokémon.",
			'pt-br': "Durante o Checape Pokémon, coloque 3 contadores de dano a mais nos Pokémon Queimados do seu oponente.",
			'es-mx': "Durante el Chequeo Pokémon, pon 3 contadores de daño más en el Pokémon Quemado de tu rival."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Searing Flame",
			'fr-fr': "Flammes Calcinantes",
			'es-es': "Llama Abrasadora",
			'de-de': "Sengende Flammen",
			'it-it': "Fiamme Ustionanti",
			'pt-br': "Chama Cauterizante",
			'es-mx': "Llama Abrasadora"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Queimado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Quemado."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Tonji Matsuno",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817173,
				tcgplayer: 623448
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817173,
				tcgplayer: 623448
			}
		},
	],
}

export default card