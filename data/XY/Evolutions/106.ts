import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Dragonite EX",
		fr: "Dracolosse EX",
		es: "Dragonite EX",
		it: "Dragonite EX",
		pt: "Dragonite EX",
		de: "Dragoran EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 180,

	types: [
		"Colorless",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Pull Up",
				fr: "Élévation",
				es: "Extraer",
				it: "Ripescaggio",
				pt: "Levantar",
				de: "Heraufziehen"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may put 2 Basic Pokémon (except for Dragonite-EX) from your discard pile into your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez ajouter 2 Pokémon de base (sauf Dracolosse-EX) de votre pile de défausse à votre main.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca, puedes poner 2 Pokémon Básicos (excepto Dragonite-EX) de tu pila de descartes en tu mano.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi prendere due Pokémon Base (a eccezione di Dragonite-EX) dalla tua pila degli scarti e aggiungerli alle carte che hai in mano.",
				pt: "Ao jogar este Pokémon da sua mão para seu Banco, você pode colocar 2 Pokémon Básicos (exceto por Dragonite-EX) da sua pilha de descarte na sua mão.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du 2 Basis-Pokémon (außer Dragoran-EX) aus deinem Ablagestapel auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
				es: "Hiperrayo",
				it: "Iper Raggio",
				pt: "Hiper Raio",
				de: "Hyperstrahl"
			},
			effect: {
				en: "Discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 130,

		}
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

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 293432
	}
}

export default card
