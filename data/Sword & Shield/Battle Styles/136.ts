import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Tool Jammer",
		fr: "Bloqueur d'Outil",
		es: "Inhibidor de Herramientas",
		it: "Bloccoggetti",
		pt: "Bloqueador de Ferramentas",
		de: "Ausrüstungsstörer"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "As long as the Pokémon this card is attached to is in the Active Spot, Pokémon Tools attached to your opponent's Active Pokémon have no effect, except for Tool Jammer.",
		fr: "Tant que le Pokémon auquel cette carte est attachée est sur le Poste Actif, les Outils Pokémon attachés au Pokémon Actif de votre adversaire n'ont aucun effet, à l'exception de Bloqueur d'Outil.",
		es: "Mientras el Pokémon al que esté unida esta carta esté en el Puesto Activo, las Herramientas Pokémon unidas al Pokémon Activo de tu rival no tienen efecto, excepto Inhibidor de Herramientas.",
		it: "Fintanto che il Pokémon a cui è assegnata questa carta è in posizione attiva, le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario non hanno effetto, a eccezione di Bloccoggetti.",
		pt: "Enquanto o Pokémon ao qual esta carta está ligada estiver no Campo Ativo, Ferramentas Pokémon ligadas ao Pokémon Ativo do seu oponente não têm efeito, exceto por Bloqueador de Ferramentas.",
		de: "Solange das Pokémon, an das diese Karte angelegt ist, in der Aktiven Position ist, haben an das Aktive Pokémon deines Gegners angelegte Pokémon-Ausrüstungen keinen Effekt, außer Ausrüstungsstörer."
	},

	trainerType: "Tool",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 546006
	}
}

export default card
