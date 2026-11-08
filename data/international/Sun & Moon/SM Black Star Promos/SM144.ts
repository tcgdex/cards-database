import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Articuno",
		'fr-fr': "Artikodin",
		'es-es': "Articuno",
		'it-it': "Articuno",
		'pt-br': "Articuno",
		'de-de': "Arktos"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'es-es': "Tornado",
				'it-it': "Raffica",
				'pt-br': "Lufada de Vento",
				'de-de': "Windstoß"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Sheer Cold",
				'fr-fr': "Glaciation",
				'es-es': "Frío Polar",
				'it-it': "Purogelo",
				'pt-br': "Frio Extremo",
				'de-de': "Eiseskälte"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can’t attack during your opponent’s next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Defensor no puede atacar durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Defensor não poderá atacar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Bei Kopf kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "A legendary bird Pokémon. It can create blizzards by freezing moisture in the air.",
	},
}

export default card
