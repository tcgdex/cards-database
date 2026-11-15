import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Darkrai",
		fr: "Darkrai",
		de: "Darkrai",
		es: "Darkrai",
		it: "Darkrai",
		pt: "Darkrai",
		'es-mx': "Darkrai"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Shadow-Clad",
			fr: "Mantelure Obscure",
			de: "Finstergewand",
			es: "Revestimiento Sombra",
			it: "Ammantombra",
			pt: "Revestimento de Sombra",
			'es-mx': "Manto Sombrío"
		},

		effect: {
			en: "Search your deck for up to 2 Basic <span class=\"energy-symbol Darkness\" title=\"Darkness\">Darkness</span> Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie <span class=\"energy-symbol Darkness\" title=\"Obscurité\">Darkness</span> de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-<span class=\"energy-symbol Darkness\" title=\"Finsternis\">Darkness</span>-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía <span class=\"energy-symbol Darkness\" title=\"Oscura\">Darkness</span> Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base <span class=\"energy-symbol Darkness\" title=\"Oscurità\">Darkness</span> e assegnale a questo Pokémon. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia <span class=\"energy-symbol Darkness\" title=\"Escuridão\">Darkness</span> Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía <span class=\"energy-symbol Darkness\" title=\"Oscuridad\">Darkness</span> Básica y únelas a este Pokémon. Después, baraja tu mazo."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur",
			de: "Dunkler Zerschneider",
			es: "Cuchilla Oscura",
			it: "Oscurotaglio",
			pt: "Cortador de Escuridão",
			'es-mx': "Corte Oscuro"
		},

		damage: 110,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 728036,
				cardmarket: 918886
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 728036,
				cardmarket: 918886
			}
		}
	],
}

export default card