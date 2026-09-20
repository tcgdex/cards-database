import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Salamence ex",
		fr: "Drattak-ex",
		de: "Brutalanda-ex",
		es: "Salamence ex",
		it: "Salamence-ex",
		'es-mx': "Salamence ex"
	},

	illustrator: "Ryota Murayama",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [373],
	hp: 330,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Booming Call",
			fr: "Appel Tonitruant",
			de: "Schallender Ruf",
			es: "Llamada Estridente",
			it: "Chiamata Fragorosa",
			'es-mx': "Llamado Retumbante"
		},

		effect: {
			en: "Put up to 3 <span class=\"energy-symbol Dragon\" title=\"Dragon\">Dragon</span> Pokémon from your discard pile onto your Bench.",
			fr: "Placez jusqu'à 3 Pokémon <span class=\"energy-symbol Dragon\" title=\"Dragon\">Dragon</span> de votre pile de défausse sur votre Banc.",
			de: "Lege bis zu 3 <span class=\"energy-symbol Dragon\" title=\"Drache\">Dragon</span>-Pokémon aus deinem Ablagestapel auf deine Bank.",
			es: "Pon hasta 3 Pokémon <span class=\"energy-symbol Dragon\" title=\"Dragón\">Dragon</span> de tu pila de descartes en tu Banca.",
			it: "Prendi fino a tre Pokémon <span class=\"energy-symbol Dragon\" title=\"Drago\">Dragon</span> dalla tua pila degli scarti e mettili nella tua panchina.",
			'es-mx': "Pon hasta 3 Pokémon <span class=\"energy-symbol Dragon\" title=\"Dragón\">Dragon</span> de tu pila de descartes en tu Banca."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Dragon Pulse",
			fr: "Draco-Choc",
			de: "Drachenpuls",
			es: "Pulso Dragón",
			it: "Dragopulsar",
			'es-mx': "Pulso Dragón"
		},

		effect: {
			en: "Discard the top 2 cards of your deck.",
			fr: "Défaussez les 2 cartes du dessus de votre deck.",
			de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel.",
			es: "Descarta las 2 primeras cartas de tu baraja.",
			it: "Scarta le prime due carte del tuo mazzo.",
			'es-mx': "Descarta las primeras 2 cartas de tu mazo."
		},

		damage: 240,
		cost: ["Fire", "Water"]
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907760,
				tcgplayer: 716233
			}
		}
	],
}

export default card