import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Dragonite EX",
		'fr-fr': "Dracolosse EX",
		'es-es': "Dragonite EX",
		'it-it': "Dragonite EX",
		'pt-br': "Dragonite EX",
		'de-de': "Dragoran EX"
	},

	illustrator: "Ayaka Yoshida",
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
				'en-us': "Pull Up",
				'fr-fr': "Élévation",
				'es-es': "Extraer",
				'it-it': "Ripescaggio",
				'pt-br': "Levantar",
				'de-de': "Heraufziehen"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench, you may put 2 Basic Pokémon (except for Dragonite-EX) from your discard pile into your hand.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez ajouter 2 Pokémon de base (sauf Dracolosse-EX) de votre pile de défausse à votre main.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca, puedes poner 2 Pokémon Básicos (excepto Dragonite-EX) de tu pila de descartes en tu mano.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi prendere due Pokémon Base (a eccezione di Dragonite-EX) dalla tua pila degli scarti e aggiungerli alle carte che hai in mano.",
				'pt-br': "Ao jogar este Pokémon da sua mão para seu Banco, você pode colocar 2 Pokémon Básicos (exceto por Dragonite-EX) da sua pilha de descarte na sua mão.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du 2 Basis-Pokémon (außer Dragoran-EX) aus deinem Ablagestapel auf deine Hand nehmen."
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
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'es-es': "Hiperrayo",
				'it-it': "Iper Raggio",
				'pt-br': "Hiper Raio",
				'de-de': "Hyperstrahl"
			},
			effect: {
				'en-us': "Discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
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
		cardmarket: 293432,
		tcgplayer: 124085
	}
}

export default card
