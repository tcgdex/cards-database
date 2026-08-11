import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Plastron de Galar",
		'en-us': "Galarian Chestplate",
		'es-es': "Coraza de Galar",
		'it-it': "Pettorale di Galar",
		'pt-br': "Peitoral de Galar",
		'de-de': "Galar-Brustpanzer"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Si le Pokémon auquel cette carte est attachée a \" de Galar \" dans son nom, il subit 30 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
		'en-us': "If the Pokémon this card is attached to has \"Galarian\" in its name, it takes 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
		'es-es': "Si el Pokémon al que está unida esta carta tiene \"de Galar\" en su nombre, los ataques de los Pokémon de tu rival le hacen 30 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
		'it-it': "Se il Pokémon a cui è assegnata questa carta ha \"di Galar\" nel nome, subisce 30 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
		'pt-br': "Se o Pokémon ao qual esta carta está ligada tiver \"de Galar\" em seu nome, ele receberá 30 pontos de dano a menos dos ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
		'de-de': "Wenn bei dem Pokémon, an das diese Karte angelegt ist, \"Galar\" zum Namen gehört, werden ihm durch Attacken der Pokémon deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	trainerType: "Tool",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567249,
				tcgplayer: 241837
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567249,
				tcgplayer: 241837
			}
		},
	],
}

export default card
