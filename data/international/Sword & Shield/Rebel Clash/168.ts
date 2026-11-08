import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Tool Scrapper",
		'fr-fr': "Arrache-Outil",
		'es-es': "Reciclaherramientas",
		'it-it': "Scartaoggetti",
		'pt-br': "Sucateador de Ferramentas",
		'de-de': "Ausrüstungsentsorger"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Choose up to 2 Pokémon Tools attached to Pokémon (yours or your opponent's) and discard them.",
		'fr-fr': "Choisissez jusqu'à 2 Outils Pokémon attachés aux Pokémon (les vôtres ou ceux de votre adversaire), puis défaussez-les.",
		'es-es': "Elige hasta 2 Herramientas Pokémon unidas a Pokémon (tuyos o de tu rival) y descártalas.",
		'it-it': "Scegli fino a due carte Oggetto Pokémon assegnate ai Pokémon, tuoi o del tuo avversario, e scartale.",
		'pt-br': "Escolha até 2 Ferramentas Pokémon ligadas a Pokémon (seus ou do seu oponente) e descarte-as.",
		'de-de': "Wähle bis zu 2 an Pokémon (deine oder die deines Gegners) angelegte Pokémon-Ausrüstungen und lege sie auf den Ablagestapel."
	},

	trainerType: "Item",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 456538,
				tcgplayer: 213278
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 456538,
				tcgplayer: 213278
			}
		},
	],
}

export default card
