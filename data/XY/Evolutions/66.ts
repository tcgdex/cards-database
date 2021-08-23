import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Rattata",
		fr: "Rattata",
		es: "Rattata",
		it: "Rattata",
		pt: "Rattata",
		de: "Rattfratz"
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
				en: "Mischievous Fang",
				fr: "Croc Facétieux",
				es: "Incisivos Traviesos",
				it: "Perfidazanna",
				pt: "Presa Maliciosa",
				de: "Bösartige Fänge"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may discard all Pokémon Tool cards attached to your opponent’s Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez défausser toutes les cartes Outil Pokémon attachées au Pokémon Actif de votre adversaire.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca, puedes descartar todas las cartas de Herramienta Pokémon unidas al Pokémon Activo de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi scartare tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario.",
				pt: "Ao jogar este Pokémon da sua mão para seu Banco, você pode descartar todos os cards de Ferramenta Pokémon ligados ao Pokémon Ativo do seu oponente.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du alle Pokémon-Ausrüstungen, die an das Aktive Pokémon deines Gegners angelegt sind, auf seinen Ablagestapel legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
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



}

export default card
