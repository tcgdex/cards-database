import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Imakuni?'s Doduo",
		fr: "Doduo d'Imakuni?",
		es: "Doduo de ¿Imakuni?",
		it: "Doduo di Imakuni?",
		pt: "Doduo de Imakuni?",
		de: "Imakuni?s Dodu"
	},

	illustrator: "Imakuni?",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		84,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Frenzied Escape",
				fr: "Sortie Précipitée",
				es: "Poder de Pokémon: Escapada Frenética",
				it: "Potere Pokémon: Fuga Frenetica",
				pt: "Poder Pokémon】Escapada Frenética",
				de: "Pokémon-Power: Fieberhafte Flucht"
			},
			effect: {
				en: "When this Doduo retreats, hold this card and throw it as hard as you can because Doduo is running away. Throw the card horizontally with a snap to get the farthest distance!",
				fr: "Lorsque ce Doduo bat en retraite, saisissez cette carte et jetez-la aussi fort que possible car Doduo s'enfuit. Jetez la carte horizontalement et fort pour qu'elle aille le plus loin possible !",
				es: "Cuando este Doduo se retire, agarra esta carta y lánzala tan fuerte como puedas, porque Doduo se está escapando. ¡Lanza la carta de forma horizontal con fuerza para llegar lo más lejos posible!",
				it: "Quando questo Doduo viene ritirato, prendi questa carta e lanciala più forte che puoi a indicare che Doduo sta scappando. Lanciala orizzontalmente con uno scatto per farla andare più lontano possibile!",
				pt: "Quando este Doduo recuar, pegue este card e o jogue o mais forte que puder, pois Doduo está fugindo. Arremesse o card horizontalmente para que voe bem longe!",
				de: "Locker aus dem Handgelenk: Wenn sich dieses Dodu zurückzieht, wirf diese Karte wie ein Frisbee so weit weg, wie du kannst, um dem flüchtenden Dodu den größtmöglichen Vorsprung zu verschaffen!"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Harmonize",
				fr: "Harmoniser",
				es: "Armonizar",
				it: "Armonia",
				pt: "Harmonizar",
				de: "Harmonisieren"
			},
			effect: {
				en: "From the moment you use this attack, you must begin to sing a song. (While the song is being sung, the game continues.) When the song is finished, this attack does 30 damage.",
				fr: "Dès que vous utilisez cette attaque, vous devez chanter une chanson. (Pendant ce temps, la partie continue.) Lorsque la chanson se termine, cette attaque inflige 30 dégâts.",
				es: "Desde el momento en que usas este ataque, debes empezar a cantar una canción. (Mientras se canta la canción, el juego continúa). Cuando se acaba la canción, este ataque hace 30 puntos de daño.",
				it: "Appena usi questo attacco, devi iniziare a cantare una canzone. Il gioco continua mentre canti. Quando la canzone finisce, questo attacco infligge 30 danni.",
				pt: "A partir do momento que usar este ataque, você deverá cantar uma música. (O jogo continua enquanto a música estiver sendo cantada.) Quando a música terminar, este ataque causará 30 de danos.",
				de: "Sobald du diese Attacke einsetzt, musst du anfangen, ein Lied zu singen. (Während du singst, geht das Spiel weiter.) Wenn das Lied zu Ende ist, fügt dieser Angriff 30 Schadenspunkte zu."
			},
			damage: 30,

		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 293474
	}
}

export default card
