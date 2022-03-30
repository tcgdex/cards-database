import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Dragonite EX",
		fr: "Dracolosse EX",
		es: "Dragonite EX",
		it: "Dragonite EX",
		pt: "Dragonite EX",
		de: "Dragoran EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 180,

	types: [
		"Dragon",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bust In",
				fr: "Entrée en Force",
				es: "Incursión",
				it: "Scorribanda",
				pt: "Incursão",
				de: "Hereinplatzen"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may move any number of basic Energy attached to your Pokémon to this Pokémon. If you do, switch this Pokémon with your Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez déplacer des Énergies de base attachées à vos Pokémon vers ce Pokémon. Dans ce cas, échangez ce Pokémon avec votre Pokémon Actif.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca, puedes mover cualquier cantidad de Energía Básica unida a tus Pokémon a este Pokémon. Si lo haces, cambia este Pokémon por tu Pokémon Activo.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi spostare un numero qualsiasi di Energie base assegnate ai tuoi Pokémon su questo Pokémon. Se lo fai, scambialo con il tuo Pokémon attivo.",
				pt: "Ao jogar este Pokémon da sua mão para seu Banco, você poderá mover um número qualquer de Energias básicas ligadas a seus Pokémon para esse Pokémon. Se fizer isso, troque esse Pokémon com seu Pokémon Ativo.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du beliebig viele Basis-Energien, die an deine Pokémon angelegt sind, auf dieses Pokémon verschieben. Wenn du das machst, tausche dieses Pokémon gegen dein Aktives Pokémon aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Lightning",
			],
			name: {
				en: "Jet Sonic",
				fr: "Rafale Supersonique",
				es: "Hipersónico",
				it: "Getto Sonico",
				pt: "Jato Sônico",
				de: "Schalldüse"
			},
			effect: {
				en: "You may discard an Energy attached to this Pokémon. If you do, this attack does 40 more damage.",
				fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Puedes descartar 1 Energía unida a este Pokémon. Si lo haces, este ataque hace 40 puntos de daño más.",
				it: "Puoi scartare un'Energia assegnata a questo Pokémon. Se lo fai, questo attacco infligge 40 danni in più.",
				pt: "Você pode descartar uma Energia ligada a este Pokémon. Se fizer isso, esse ataque causará 40 de danos adicionais.",
				de: "Du kannst 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic"
}

export default card
