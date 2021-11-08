import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Rugged Helmet",
		fr: "Casque Costaud",
		es: "Casco Resistente",
		it: "Robustelmo",
		pt: "Elmo Robusto",
		de: "Robuster Helm"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "If the Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if it is Knocked Out), put an Energy attached to the Attacking Pokémon into your opponent's hand.",
		fr: "Si le Pokémon auquel cette carte est attachée est sur le Poste Actif et qu'il subit les dégâts d'une attaque d'un Pokémon de votre adversaire (même s'il est mis K.O.), ajoutez à la main de votre adversaire une Énergie attachée au Pokémon Attaquant.",
		es: "Si el Pokémon al que está unida esta carta está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival (incluso si queda Fuera de Combate), pon 1 Energía unida al Pokémon Atacante en la mano de tu rival.",
		it: "Se il Pokémon a cui è assegnata questa carta è in posizione attiva e viene danneggiato da un attacco di un Pokémon del tuo avversario, anche se viene messo KO, prendi un'Energia assegnata al Pokémon attaccante e aggiungila alla mano del tuo avversario.",
		pt: "Se o Pokémon ao qual esta carta está ligada estiver no Campo Ativo e for danificado por um ataque dos Pokémon do seu oponente (mesmo que ele seja Nocauteado), coloque 1 Energia ligada ao Pokémon Atacante na mão do seu oponente.",
		de: "Wenn das Pokémon, an das diese Karte angelegt ist, in der Aktiven Position ist und durch eine Attacke von Pokémon deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), gib deinem Gegner 1 an das Angreifende Pokémon angelegte Energie auf seine Hand."
	},

	trainerType: "Tool",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	illustrator: "sadaji",
	regulationMark: "E"
}

export default card
