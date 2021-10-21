import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Tool Scrapper",
		fr: "Arrache-Outil",
		es: "Reciclaherramientas",
		it: "Scartaoggetti",
		pt: "Sucateador de Ferramentas",
		de: "Ausrüstungsentsorger"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Choose up to 2 Pokémon Tools attached to Pokémon (yours or your opponent's) and discard them.",
		fr: "Choisissez jusqu'à 2 Outils Pokémon attachés aux Pokémon (les vôtres ou ceux de votre adversaire), puis défaussez-les.",
		es: "Elige hasta 2 Herramientas Pokémon unidas a Pokémon (tuyos o de tu rival) y descártalas.",
		it: "Scegli fino a due carte Oggetto Pokémon assegnate ai Pokémon, tuoi o del tuo avversario, e scartale.",
		pt: "Escolha até 2 Ferramentas Pokémon ligadas a Pokémon (seus ou do seu oponente) e descarte-as.",
		de: "Wähle bis zu 2 an Pokémon (deine oder die deines Gegners) angelegte Pokémon-Ausrüstungen und lege sie auf den Ablagestapel."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
