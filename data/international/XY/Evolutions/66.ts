import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Rattata",
		'fr-fr': "Rattata",
		'es-es': "Rattata",
		'it-it': "Rattata",
		'pt-br': "Rattata",
		'de-de': "Rattfratz"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mischievous Fang",
				'fr-fr': "Croc Facétieux",
				'es-es': "Incisivos Traviesos",
				'it-it': "Perfidazanna",
				'pt-br': "Presa Maliciosa",
				'de-de': "Bösartige Fänge"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench, you may discard all Pokémon Tool cards attached to your opponent's Active Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez défausser toutes les cartes Outil Pokémon attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca, puedes descartar todas las cartas de Herramienta Pokémon unidas al Pokémon Activo de tu rival.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi scartare tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario.",
				'pt-br': "Ao jogar este Pokémon da sua mão para seu Banco, você pode descartar todos os cards de Ferramenta Pokémon ligados ao Pokémon Ativo do seu oponente.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du alle Pokémon-Ausrüstungen, die an das Aktive Pokémon deines Gegners angelegt sind, auf seinen Ablagestapel legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 10
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its fangs are long and very sharp. They grow continuously, so it gnaws on hard things to whittle them down.",
	},

	thirdParty: {
		cardmarket: 293419,
		tcgplayer: 124079
	}
}

export default card
