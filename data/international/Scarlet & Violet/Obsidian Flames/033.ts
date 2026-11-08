import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		'fr-fr': "Victini-ex",
		'en-us': "Victini ex",
		'es-es': "Victini ex",
		'it-it': "Victini-ex",
		'pt-br': "Victini ex",
		'de-de': "Victini-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Bombarder",
			'en-us': "Strafe",
			'es-es': "Pasada de Ataque",
			'it-it': "Mitragliare",
			'pt-br': "Bombardear",
			'de-de': "Beharken"
		},

		effect: {
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'es-es': "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'fr-fr': "Flamme Victorieuse",
			'en-us': "Victory Flame",
			'es-es': "Llama de Victoria",
			'it-it': "Fiamma della Vittoria",
			'pt-br': "Chama da Vitória",
			'de-de': "Triumphflamme"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "During your next turn, this Pokémon can't attack.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725113,
				tcgplayer: 509731,
				cardtrader: 255593
			}
		},
	],

	suffix: "ex",
	illustrator: "Saki Hayashiro",

	
}

export default card
