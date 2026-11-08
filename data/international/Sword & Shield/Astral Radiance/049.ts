import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [866],
	set: Set,

	name: {
		'en-us': "Galarian Mr. Rime V",
		'fr-fr': "M. Glaquette de Galar V",
		'es-es': "Mr. Rime de Galar V",
		'it-it': "Mr. Rime di Galar V",
		'pt-br': "Mr. Rime de Galar V",
		'de-de': "Galar-Pantifrost V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Surprising Hand",
			'fr-fr': "Main Surprise",
			'es-es': "Mano Sorprendente",
			'it-it': "Mano Furba",
			'pt-br': "Mão Surpreendente",
			'de-de': "Überraschungshand"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Item cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Objet, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Objeto, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Strumento, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas de Item no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Itemkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Customized Cane",
			'fr-fr': "Canne sur Mesure",
			'es-es': "Bastón a Medida",
			'it-it': "Bastone Personalizzato",
			'pt-br': "Bengala Personalizada",
			'de-de': "Maßgeschneiderter Stock"
		},

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 90 more damage.",
			'fr-fr': "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene 1 Herramienta Pokémon unida a él, este ataque hace 90 puntos de daño más.",
			'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658590,
				tcgplayer: 272249
			}
		},
	],
}

export default card
