import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [971],
	set: Set,

	name: {
		'en-us': "Greavard",
		'fr-fr': "Toutombe",
		'es-es': "Greavard",
		'it-it': "Greavard",
		'pt-br': "Greavard",
		'de-de': "Gruff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Underworld Stroll",
			'fr-fr': "Balade dans l'Outre-Monde",
			'es-es': "Paseo por el Inframundo",
			'it-it': "Passeggiata Sottomondo",
			'pt-br': "Passeio no Submundo",
			'de-de': "Spaziergang in der Unterwelt"
		},

		effect: {
			'en-us': "Your opponent reveals their hand. Choose a Supporter card you find there and put it on the bottom of their deck.",
			'fr-fr': "Votre adversaire montre sa main. Choisissez-y une carte Supporter, puis placez-la en dessous de son deck.",
			'es-es': "Tu rival enseña las cartas de su mano. Elige 1 carta de Partidario que encuentres entre ellas y ponla en la parte inferior de su baraja.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Scegli una carta Aiuto presente tra esse e mettila in fondo al suo mazzo.",
			'pt-br': "Seu oponente revela a mão dele. Escolha uma carta de Apoiador que encontrar lá e coloque-a como a carta de baixo do baralho dele.",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Unterstützerkarte, die du dort findest, und lege sie unter sein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "G",
	illustrator: "Shin Nagasawa",

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "This friendly Pokémon doesn't like being alone. Pay it even the slightest bit of attention, and it will follow you forever.",
	},

	thirdParty: {
        cardmarket: 702401,
        tcgplayer: 487981
    }
}

export default card