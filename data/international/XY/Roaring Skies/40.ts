import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'it-it': "Absol",
		'pt-br': "Absol",
		'de-de': "Absol"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Cursed Eyes",
				'fr-fr': "Yeux Maléfiques",
				'es-es': "Ojos Malditos",
				'it-it': "Sguardo Maledetto",
				'pt-br': "Olhos Amaldiçoados",
				'de-de': "Böser Blick"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench, you may move 3 damage counters from 1 of your opponent's Pokémon to another of his or her Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez déplacer 3 marqueurs de dégâts de l'un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca, puedes mover 3 contadores de daño de 1 de los Pokémon de tu rival a otro de sus Pokémon.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi spostare tre segnalini danno da uno dei Pokémon del tuo avversario a un altro dei suoi Pokémon.",
				'pt-br': "Ao jogar este Pokémon da sua mão para seu Banco, você pode mover 3 contadores de danos de 1 dos Pokémon do seu oponente para outro dos Pokémon dele ou dela.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du 3 Schadensmarken von 1 Pokémon deines Gegners auf ein anderes Pokémon deines Gegners verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Mach Claw",
				'fr-fr': "Instagriffe",
				'es-es': "Garra Mach",
				'it-it': "Artiglio Mach",
				'pt-br': "Garra Supersônica",
				'de-de': "Tempoklaue"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "Il danno di questo attacco non è influenzato dalla resistenza.",
				'pt-br': "Os danos deste ataque não são afetados por Resistência.",
				'de-de': "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It appears when it senses an impending natural disaster. As a result, it was mistaken as a doom bringer.",
	},

	thirdParty: {
		cardmarket: 282708,
		tcgplayer: 98076
	}
}

export default card
