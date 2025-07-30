import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Exp. Share",
		fr: "Multi Exp",
		es: "Repartir Exp",
		it: "Condividi Esperienza",
		pt: "Compart. Exp.",
		de: "EP-Teiler"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "When your Active Pokémon is Knocked Out by damage from an opponent's attack, you may move 1 basic Energy card that was attached to that Pokémon to the Pokémon this card is attached to.",
		fr: "Lorsque votre Pokémon Actif est mis K.O. par les dégâts d'une attaque de votre adversaire, vous pouvez déplacer 1 carte Énergie de base qui était attachée au Pokémon mis K.O. vers le Pokémon auquel cette carte est attachée.",
		es: "Si tu Pokémon Activo queda Fuera de Combate por el daño del ataque de tu rival, puedes mover 1 carta de Energía Básica que estuviera unida a ese Pokémon al Pokémon al que esté unida esta carta.",
		it: "Quando il tuo Pokémon attivo viene messo K.O. dai danni inflitti da un attacco del tuo avversario, puoi spostare una carta Energia base che gli era stata assegnata sul Pokémon a cui è assegnata questa carta.",
		pt: "Quando seu Pokémon Ativo for Nocauteado pelos danos causados por um ataque do oponente, você poderá mover 1 card de Energia básica que estava ligado àquele Pokémon para o Pokémon ao qual esse card está ligado.",
		de: "Wenn dein Aktives Pokémon durch den Schaden eines gegnerischen Angriffs kampfunfähig wird, kannst du 1 Basis-Energiekarte, die an dieses Pokémon angelegt war, auf das Pokémon verschieben, an das diese Karte angelegt ist."
	},

	trainerType: "Tool",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	illustrator: "Toyste Beach",
	regulationMark: "E",

	thirdParty: {
		cardmarket: 545861
	}
}

export default card
