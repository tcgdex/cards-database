import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		pt: "Absol",
		de: "Absol"
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
				en: "Cursed Eyes",
				fr: "Yeux Maléfiques",
				es: "Ojos Malditos",
				it: "Sguardo Maledetto",
				pt: "Olhos Amaldiçoados",
				de: "Böser Blick"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may move 3 damage counters from 1 of your opponent's Pokémon to another of his or her Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez déplacer 3 marqueurs de dégâts de l'un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca, puedes mover 3 contadores de daño de 1 de los Pokémon de tu rival a otro de sus Pokémon.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi spostare tre segnalini danno da uno dei Pokémon del tuo avversario a un altro dei suoi Pokémon.",
				pt: "Ao jogar este Pokémon da sua mão para seu Banco, você pode mover 3 contadores de danos de 1 dos Pokémon do seu oponente para outro dos Pokémon dele ou dela.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du 3 Schadensmarken von 1 Pokémon deines Gegners auf ein anderes Pokémon deines Gegners verschieben."
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
				en: "Mach Claw",
				fr: "Instagriffe",
				es: "Garra Mach",
				it: "Artiglio Mach",
				pt: "Garra Supersônica",
				de: "Tempoklaue"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "Il danno di questo attacco non è influenzato dalla resistenza.",
				pt: "Os danos deste ataque não são afetados por Resistência.",
				de: "Der Schaden dieses Angriffs wird durch Resistenz nicht verändert."
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

	thirdParty: {
		cardmarket: 282708
	}
}

export default card
