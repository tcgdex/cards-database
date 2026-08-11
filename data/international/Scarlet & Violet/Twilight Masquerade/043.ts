import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [62],
	set: Set,

	name: {
		'en-us': "Poliwrath",
		'fr-fr': "Tartard",
		'es-es': "Poliwrath",
		'it-it': "Poliwrath",
		'pt-br': "Poliwrath",
		'de-de': "Quappo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
		'es-es': "Poliwhirl",
		'it-it': "Poliwhirl",
		'pt-br': "Poliwhirl",
		'de-de': "Quaputzi"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Hypnosis",
			'fr-fr': "Hypnose",
			'es-es': "Hipnosis",
			'it-it': "Ipnosi",
			'pt-br': "Hipnose",
			'de-de': "Hypnose"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Jumping Uppercut",
			'fr-fr': "Uppercut Bondissant",
			'es-es': "Gancho Saltarín",
			'it-it': "Saltamontante",
			'pt-br': "Pulo do Gancho",
			'de-de': "Springender Kinnhaken"
		},

		effect: {
			'en-us': "You may do 120 more damage. If you do, shuffle this Pokémon and all attached cards into your deck.",
			'fr-fr': "Vous pouvez infliger 120 dégâts supplémentaires. Dans ce cas, mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			'es-es': "Puedes hacer 120 puntos de daño más. Si lo haces, pon este Pokémon y todas las cartas unidas a él en la baraja y barájalas todas.",
			'it-it': "Puoi infliggere 120 danni in più. Se lo fai, rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			'pt-br': "Você pode causar 120 pontos de dano a mais. Se fizer isto, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			'de-de': "Du kannst 120 Schadenspunkte mehr zufügen. Wenn du das machst, mische dieses Pokémon und alle angelegten Karten in dein Deck."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "It can use its well-developed arms and legs to run on the surface of the water for a split second.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769217,
				tcgplayer: 550087
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769217,
				tcgplayer: 550087
			}
		},
	],

	illustrator: "Nisota Niso",

}

export default card