import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		fr: "Pikachu",
		en: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Chargeur",
			en: "Charge",
			es: "Carga",
			it: "Sottocarica",
			pt: "Carga",
			de: "Ladevorgang"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Énergie {L} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			en: "Search your deck for a Basic {L} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			es: "Busca en tu baraja 1 carta de Energía {L} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia base {L} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Energia {L} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-{L}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Pika-Poing",
			en: "Pika Punch",
			es: "Pika Puño",
			it: "Pika Pugno",
			pt: "Soco Pikachu",
			de: "Pikahieb"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733620,
				tcgplayer: 517033,
				cardtrader: 261140
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733620,
				tcgplayer: 517033,
				cardtrader: 261140
			}
		},
		{
			type: 'normal',
			stamp: ['pokemon-together'],
			thirdParty: {
				cardmarket: 748474
			}
		},
		{
			type: 'normal',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 845404
			}
		},
		{
			type: 'reverse',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 794911
			}
		},
	],

	illustrator: "Naoyo Kimura",

	
}

export default card
