import { Card } from "../../../interfaces";
import Set from "../SWSH Black Star Promos";

const card: Card = {
	dexId: [887],
	set: Set,

	name: {
		en: "Dragapult",
		fr: "Lanssorien",
		de: "Katapuldra",
		es: "Dragapult",
		pt: "Dragapult",
		it: "Dragapult"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage2",

	attacks: [
		{
			cost: ["Psychic"],

			name: {
				en: "Mach Turn",
				fr: "Tour Supersonique",
				de: "Tempowende",
				es: "Giro Mach",
				pt: "Retorno Supersônico",
				it: "Girata Mach"
			},

			damage: 60,

			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
				de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
				es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				it: "Puoi scambiare questo Pokémon con uno della tua panchina."
			},
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],

			name: {
				en: "Diving Swipe",
				fr: "Rafle Plongeante",
				de: "Sturzklau",
				es: "Robo en Picado",
				pt: "Mergulho Furtivo",
				it: "Tuffata"
			},

			damage: 150,

			effect: {
				en: "Discard a random card from your opponent's hand.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire.",
				de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
				es: "Descarta 1 carta aleatoria de la mano de tu rival.",
				pt: "Descarte 1 carta aleatória da mão do seu oponente.",
				it: "Scarta una carta a caso dalla mano del tuo avversario."
			},
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
		fr: "Dispareptil",
		de: "Phandra",
		es: "Drakloak",
		pt: "Drakloak",
		it: "Drakloak",
		en: "Drakloak"
	},

	retreat: 0,

	thirdParty: {
		cardmarket: 549386
	}
};

export default card;
