import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tool Scrapper",
		'fr-fr': "Arrache-Outil",
		'es-es': "Reciclaherramientas",
		'es-mx': "Quitaherramientas",
		'de-de': "Ausrüstungsentsorger",
		'it-it': "Scartaoggetti",
		'pt-br': "Sucateador de Ferramentas"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Choose up to 2 Pokémon Tools attached to Pokémon (yours or your opponent's) and discard them.",
		'fr-fr': "Choisissez jusqu'à 2 Outils Pokémon attachés aux Pokémon (les vôtres ou ceux de votre adversaire), puis défaussez-les.",
		'es-es': "Elige hasta 2 Herramientas Pokémon unidas a Pokémon (tuyos o de tu rival) y descártalas.",
		'es-mx': "Elige hasta 2 Herramientas Pokémon unidas a Pokémon (tuyos o de tu rival) y descártalas.",
		'de-de': "Wähle bis zu 2 an Pokémon (deine oder die deines Gegners) angelegte Pokémon-Ausrüstungen und lege sie auf den Ablagestapel.",
		'it-it': "Scegli fino a due carte Oggetto Pokémon assegnate ai Pokémon, tuoi o del tuo avversario, e scartale.",
		'pt-br': "Escolha até 2 Ferramentas Pokémon ligadas a Pokémon (seus ou do seu oponente) e descarte-as."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869823,
			tcgplayer: 676024
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869823,
			tcgplayer: 676024
		}
	},
],
}

export default card