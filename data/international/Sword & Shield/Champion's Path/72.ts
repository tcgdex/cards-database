import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Grapploct V",
		'fr-fr': "Krakos V",
		'es-es': "Grapploct V",
		'it-it': "Grapploct V",
		'pt-br': "Grapploct V",
		'de-de': "Kaocto V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [853],
	set: Set,
	hp: 210,

	types: [
		"Fighting",
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	attacks: [{
		name: {
			'en-us': "Tie Up",
			'fr-fr': "Ligoter",
			'es-es': "Sujetar",
			'it-it': "Ben Stretto",
			'pt-br': "Imobilizar",
			'de-de': "Fesselgriff"
		},

		effect: {
			'en-us': "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			'es-es': "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
			'pt-br': "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante o próximo turno do seu oponente.",
			'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Moonsault Press",
			'fr-fr': "Moonsault Press",
			'es-es': "Presión Salto Lunar",
			'it-it': "Pressa Acrobatica",
			'pt-br': "Mortal Compressor",
			'de-de': "Moonsault Press"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 100 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 100 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 100 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 500215,
		tcgplayer: 223071
	}
}

export default card
