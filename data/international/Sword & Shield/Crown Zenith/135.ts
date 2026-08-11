import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lost Vacuum",
		'fr-fr': "Aspirateur Perdu",
		'es-es': "Aspiradora Perdida",
		'it-it': "Aspiratore Perduto",
		'pt-br': "Aspirador Perdido",
		'de-de': "Nirgendwo-Sauger"
	},

	illustrator: "Amelicart",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "You can use this card only if you put another card from your hand in the Lost Zone.\nChoose a Pokémon Tool attached to any Pokémon, or any Stadium in play, and put it in the Lost Zone.",
		'fr-fr': "Vous ne pouvez utiliser cette carte que si vous placez une autre carte de votre main dans la Zone Perdue.\nChoisissez un Outil Pokémon attaché à n'importe quel Pokémon, ou n'importe quel Stade en jeu, et placez-le dans la Zone Perdue.",
		'es-es': "Puedes usar esta carta solo si pones otra carta de tu mano en la Zona Perdida.\nElige 1 Herramienta Pokémon unida a cualquier Pokémon, o cualquier carta de Estadio en juego, y ponla en la Zona Perdida.",
		'it-it': "Puoi usare questa carta solo se metti un'altra carta che hai in mano nell'area perduta.\nScegli una carta Oggetto Pokémon assegnata a qualsiasi Pokémon, o una carta Stadio qualsiasi in gioco, e mettila nell'area perduta.",
		'pt-br': "Você só pode usar esta carta se colocar outra carta da sua mão na Zona Perdida.\nEscolha uma Ferramenta Pokémon ligada a qualquer Pokémon, ou qualquer Estádio em jogo, e coloque na Zona Perdida.",
		'de-de': "Du kannst diese Karte nur verwenden, wenn du eine andere Karte aus deiner Hand ins Nirgendwo legst.\nWähle 1 Pokémon-Ausrüstung, die an ein beliebiges Pokémon angelegt ist, oder 1 beliebige Stadionkarte im Spiel und lege sie ins Nirgendwo."
	},

	trainerType: "Item",
	regulationMark: "F",


	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691854,
				tcgplayer: 478188
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691854,
				tcgplayer: 478188
			}
		},
	],
}

export default card
