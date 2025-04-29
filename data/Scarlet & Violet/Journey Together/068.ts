import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Lillie's Comfey",
		fr: "Guérilande de Lilie",
		es: "Comfey de Lylia",
		de: "Lillys Curelei",
		it: "Comfey di Lylia",
		pt: "Comfey da Lílian",
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
			en: "Inviting Flowers",
			fr: "Fleurs Accueillantes",
			es: "Flores Cautivadoras",
			de: "Einladende Blumen",
			it: "Fiori Invitanti",
			pt: "Flores Convidativas",
			'es-mx': "Flores Cautivadoras"
		},

		effect: {
			en: "You may search your deck for any number of Basic Lillie's Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Vous pouvez chercher dans votre deck le nombre voulu de Pokémon de Lilie de base, puis les placer sur votre Banc. Mélangez ensuite votre deck.",
			es: "Puedes buscar en tu baraja cualquier cantidad de Pokémon de Lylia Básicos y ponerlos en tu Banca. Después, baraja las cartas de tu baraja.",
			de: "Du kannst dein Deck nach beliebig vielen Basis-Lillys-Pokémon durchsuchen und sie auf deine Bank legen. Mische anschließend dein Deck.",
			it: "Puoi cercare nel tuo mazzo un numero qualsiasi di Pokémon di Lylia Base e metterli nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Você pode procurar por qualquer número de Pokémon da Lílian Básicos no seu baralho e colocá-los no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Puedes buscar en tu mazo cualquier cantidad de Pokémon de Lillie Básicos y ponerlos en tu Banca. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Fade Out",
			fr: "Faiblir",
			es: "Difuminar",
			de: "Ausblenden",
			it: "Dissolvenza",
			pt: "Desaparecer",
			'es-mx': "Desaparecer"
		},

		effect: {
			en: "Put this Pokémon and all attached cards into your hand.",
			fr: "Ajoutez à votre main ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu mano.",
			de: "Nimm dieses Pokémon und alle angelegten Karten auf deine Hand.",
			it: "Riprendi in mano questo Pokémon e tutte le carte a esso assegnate.",
			pt: "Coloque este Pokémon e todas as cartas ligadas a ele na sua mão.",
			'es-mx': "Pon este Pokémon y todas las cartas unidas a él en tu mano."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
