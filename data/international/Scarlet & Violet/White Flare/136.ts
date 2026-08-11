import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [509],
	set: Set,

	name: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'de-de': "Felilou",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'es-es': "Purrloin",
		'es-mx': "Purrloin"
	},

	illustrator: "Mugi Hamada",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Invite Evil",
			'fr-fr': "Invitation du Mal",
			'de-de': "Unheilvolle Einladung",
			'it-it': "Invito Oscuro",
			'pt-br': "Invocação Maligna",
			'es-es': "Invitación Malvada",
			'es-mx': "Invitación Malvada"
		},

		effect: {
			'en-us': "Search your deck for up to 3 {D} Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon {D}, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 {D}-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon {D}, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Pokémon {D} no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon {D}, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 3 Pokémon {D}, muéstralos y ponlos en tu mano. Después, baraja las cartas de tu mazo."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836158,
				tcgplayer: 642249
			}
		},
	],
}

export default card
