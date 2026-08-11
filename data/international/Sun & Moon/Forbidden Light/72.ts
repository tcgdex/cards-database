import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Zygarde",
		'fr-fr': "Zygarde",
		'es-es': "Zygarde",
		'it-it': "Zygarde",
		'pt-br': "Zygarde",
		'de-de': "Zygarde"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		718,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Glare",
				'fr-fr': "Regard Médusant",
				'es-es': "Deslumbrar",
				'it-it': "Sguardo Feroce",
				'pt-br': "Olhar Penetrante",
				'de-de': "Giftblick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Calm Strike",
				'fr-fr': "Frappe Placide",
				'es-es': "Golpe Calmado",
				'it-it': "Colpo Impassibile",
				'pt-br': "Golpe Calmo",
				'de-de': "Gelassener Schlag"
			},
			effect: {
				'en-us': "If you have used your GX attack, this attack does 60 more damage.",
				'fr-fr': "Si vous avez utilisé votre attaque GX, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si has usado tu ataque GX, este ataque hace 60 puntos de daño más.",
				'it-it': "Se hai già usato il tuo attacco GX, questo attacco infligge 60 danni in più.",
				'pt-br': "Se você usou seu ataque GX, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn du deine GX-Attacke eingesetzt hast, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It's thought to be monitoring the ecosystem. There are rumors that even greater power lies hidden within it.",
	},

	thirdParty: {
		cardmarket: 355658,
		tcgplayer: 165724
	}
}

export default card
