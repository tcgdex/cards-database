import { Card } from "models/database/card";
import Set from "../SWSH Black Star Promos";

const card: Card = {
	dexId: [887],
	set: Set,

	name: {
		'en-us': "Dragapult",
		'fr-fr': "Lanssorien",
		'de-de': "Katapuldra",
		'es-es': "Dragapult",
		'pt-br': "Dragapult",
		'it-it': "Dragapult"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	stage: "Stage2",

	attacks: [
		{
			cost: ["Psychic"],

			name: {
				'en-us': "Mach Turn",
				'fr-fr': "Tour Supersonique",
				'de-de': "Tempowende",
				'es-es': "Giro Mach",
				'pt-br': "Retorno Supersônico",
				'it-it': "Girata Mach"
			},

			damage: 60,

			effect: {
				'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
				'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
				'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina."
			},
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],

			name: {
				'en-us': "Diving Swipe",
				'fr-fr': "Rafle Plongeante",
				'de-de': "Sturzklau",
				'es-es': "Robo en Picado",
				'pt-br': "Mergulho Furtivo",
				'it-it': "Tuffata"
			},

			damage: 150,

			effect: {
				'en-us': "Discard a random card from your opponent's hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
				'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
				'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
				'pt-br': "Descarte 1 carta aleatória da mão do seu oponente.",
				'it-it': "Scarta una carta a caso dalla mano del tuo avversario."
			},
		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},

	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Dispareptil",
		'de-de': "Phandra",
		'es-es': "Drakloak",
		'pt-br': "Drakloak",
		'it-it': "Drakloak",
		'en-us': "Drakloak"
	},

	retreat: 0,

	thirdParty: {
		cardmarket: 549386
	}
};

export default card;
