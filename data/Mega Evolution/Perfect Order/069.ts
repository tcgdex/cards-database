import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Antique Sail Fossil",
		fr: "Fossile Nageoire Ancien",
		es: "Fósil Aleta Antiguo",
		de: "Antikes Flossenfossil",
		it: "Vecchio Fossilpinna",
		pt: "Fóssil de Vela Arcaico"
	},
	set: Set,
	rarity: "Common",
	category: "Trainer",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Protective Sail",
				fr: "Nageoire Protectrice",
				es: "Aleta Protectora",
				de: "Schützende Flosse",
				it: "Pinna Protettiva",
				pt: "Vela Protetora"
			},
			effect: {
				en: "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
				fr: "Chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte infligés à ce Pokémon.",
				es: "Cada vez que tu rival juegue una carta de Partidario de su mano, se evitan todos los efectos de esa carta infligidos a este Pokémon.",
				de: "Verhindere jedes Mal, wenn dein Gegner 1 Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden.",
				it: "Ogni volta che il tuo avversario gioca una carta Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
				pt: "Sempre que seu oponente jogar uma carta de Apoiador da mão dele, previna todos os efeitos daquela carta causados a este Pokémon."
			}
		}
	],
	trainerType: "Item",
	regulationMark: "J",
	illustrator: "AYUMI ODASHIMA",
	effect: {
		en: "Play this card as if it were a 60-HP Basic {C} Pokémon. This card can't be affected by any Special Conditions and can't retreat.",
		fr: "Jouez cette carte comme si c'était un Pokémon {C} de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial et ne peut pas battre en retraite.",
		es: "Juega esta carta como si fuera un Pokémon {C} Básico de 60 PS. Esta carta no puede verse afectada por ninguna Condición Especial y no puede retirarse.",
		de: "Spiele diese Karte, als ob sie ein Basis-{C}-Pokémon mit 60 KP wäre. Diese Karte kann von keinen Speziellen Zuständen betroffen werden und sich nicht zurückziehen.",
		it: "Gioca questa carta come se fosse un Pokémon Base {C} con 60 PS. Questa carta non può essere influenzata da condizioni speciali e non può ritirarsi.",
		pt: "Jogue esta carta como se fosse um Pokémon {C} Básico com PS 60. Esta carta não pode ser afetada por quaisquer Condições Especiais e não pode recuar."
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684354,
		cardmarket: 877485
	}
}

export default card
