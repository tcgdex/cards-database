import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "TM Machine",
		fr: "Machine à CT",
		de: "TM-Maschine",
		it: "Macchina MT",
		es: "Máquina de MT",
		pt: "Máquina de MT",
		'es-mx': "Máquina de MT"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Search your deck for up to 3 Pokémon Tool cards that have \"Technical Machine\" in their name, reveal them, and put them into your hand. Then, shuffle your deck.",
		fr: "Cherchez dans votre deck jusqu'à 3 cartes Outil Pokémon ayant \" Capsule Technique \" dans leur nom, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		de: "Durchsuche dein Deck nach bis zu 3 Pokémon-Ausrüstungen, bei denen \"Technische Maschine\" zum Namen gehört, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
		it: "Cerca nel tuo mazzo fino a tre carte Oggetto Pokémon che hanno \"Macchinario Tecnico\" nel nome, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		es: "Busca en tu baraja hasta 3 cartas de Herramienta Pokémon que tengan \"Máquina Técnica\" en su nombre, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		pt: "Procure por até 3 cartas de Ferramenta Pokémon no seu baralho que tenham \"Máquina Técnica\" em seu nome, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		'es-mx': "Busca en tu mazo hasta 3 cartas de Herramienta Pokémon que tengan \"Máquina Técnica\" en su nombre, muéstralas y ponlas en tu mano. Después, baraja las cartas de tu mazo."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: {
		holo: false
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
