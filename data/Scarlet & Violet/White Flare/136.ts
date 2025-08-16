import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [509],
	set: Set,

	name: {
		en: "Purrloin",
		fr: "Chacripan",
		de: "Felilou",
		it: "Purrloin",
		pt: "Purrloin",
		es: "Purrloin",
		'es-mx': "Purrloin"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Invite Evil",
			fr: "Invitation du Mal",
			de: "Unheilvolle Einladung",
			it: "Invito Oscuro",
			pt: "Invocação Maligna",
			es: "Invitación Malvada",
			'es-mx': "Invitación Malvada"
		},

		effect: {
			en: "Search your deck for up to 3 {D} Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 Pokémon {D}, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 3 {D}-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon {D}, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 Pokémon {D} no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			es: "Busca en tu baraja hasta 3 Pokémon {D}, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 3 Pokémon {D}, muéstralos y ponlos en tu mano. Después, baraja las cartas de tu mazo."
		}
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card