import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [764],
	set: Set,

	name: {
		'en-us': "Lillie's Comfey",
		'fr-fr': "Guérilande de Lilie",
		'es-es': "Comfey de Lylia",
		'de-de': "Lillys Curelei",
		'it-it': "Comfey di Lylia",
		'pt-br': "Comfey da Lílian",
		'es-mx': "Comfey de Lillie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Inviting Flowers",
			'fr-fr': "Fleurs Accueillantes",
			'es-es': "Flores Cautivadoras",
			'de-de': "Einladende Blumen",
			'it-it': "Fiori Invitanti",
			'pt-br': "Flores Convidativas",
			'es-mx': "Flores Cautivadoras"
		},

		effect: {
			'en-us': "You may search your deck for any number of Basic Lillie's Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Vous pouvez chercher dans votre deck le nombre voulu de Pokémon de Lilie de base, puis les placer sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Puedes buscar en tu baraja cualquier cantidad de Pokémon de Lylia Básicos y ponerlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'de-de': "Du kannst dein Deck nach beliebig vielen Basis-Lillys-Pokémon durchsuchen und sie auf deine Bank legen. Mische anschließend dein Deck.",
			'it-it': "Puoi cercare nel tuo mazzo un numero qualsiasi di Pokémon di Lylia Base e metterli nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Você pode procurar por qualquer número de Pokémon da Lílian Básicos no seu baralho e colocá-los no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Puedes buscar en tu mazo cualquier cantidad de Pokémon de Lillie Básicos y ponerlos en tu Banca. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Fade Out",
			'fr-fr': "Faiblir",
			'es-es': "Difuminar",
			'de-de': "Ausblenden",
			'it-it': "Dissolvenza",
			'pt-br': "Desaparecer",
			'es-mx': "Desaparecer"
		},

		effect: {
			'en-us': "Put this Pokémon and all attached cards into your hand.",
			'fr-fr': "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			'de-de': "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand.",
			'it-it': "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			'pt-br': "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
			'es-mx': "Pon este Pokémon y todas las cartas unidas a él en tu mano."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",
	illustrator: "Narumi Sato",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817220,
				tcgplayer: 623495
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817220,
				tcgplayer: 623495
			}
		},
	],
}

export default card
