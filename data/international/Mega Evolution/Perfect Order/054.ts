import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [1002],

	name: {
		'en-us': "Chien-Pao",
		'fr-fr': "Baojian",
		'es-es': "Chien-Pao",
		'es-mx': "Chien-Pao",
		'de-de': "Baojian",
		'it-it': "Chien-Pao",
		'pt-br': "Chien-Pao"
	},

	illustrator: "Satoshi Ohta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Strafe",
			'fr-fr': "Bombarder",
			'es-es': "Pasada de Ataque",
			'es-mx': "Ataque de Revés",
			'de-de': "Beharken",
			'it-it': "Mitragliare",
			'pt-br': "Bombardear"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			'es-mx': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen.",
			'it-it': "Puoi scambiare questo Pokémon con uno nella tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco."
		},

		damage: 20
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Rising Blade",
			'fr-fr': "Lame Ascendante",
			'es-es': "Hoja Creciente",
			'es-mx': "Cuchilla Ascendente",
			'de-de': "Aufwärtsklinge",
			'it-it': "Lama Ascendente",
			'pt-br': "Lâmina Crescente"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 80 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 80 puntos de daño más.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 80 pontos de dano a mais."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684435,
				cardmarket: 877470
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684435,
				cardmarket: 877470
			}
		}
	],

}

export default card
