import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Antique Jaw Fossil",
		fr: "Fossile Mâchoire Ancien",
		es: "Fósil Mandíbula Antiguo",
		de: "Antikes Kieferfossil",
		it: "Vecchio Fossilmascella",
		pt: "Fóssil de Mandíbula Arcaico"
	},
	set: Set,
	rarity: "Common",
	category: "Trainer",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Intimidating Jaw",
				fr: "Mâchoire Intimidante",
				es: "Mandíbula Intimidatoria",
				de: "Bedrohlicher Kiefer",
				it: "Mascella Prepotente",
				pt: "Mandíbula Intimidadora"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do 30 less damage (before applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				es: "Mientras este Pokémon esté en el Puesto Activo, los ataques usados por el Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				de: "Solange dieses Pokémon in der Aktiven Position ist, fügen die vom Aktiven Pokémon deines Gegners eingesetzten Attacken 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
				it: "Fintanto che questo Pokémon è in posizione attiva, gli attacchi usati dal Pokémon attivo del tuo avversario infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
				pt: "Enquanto este Pokémon estiver no Campo Ativo, os ataques usados pelo Pokémon Ativo do seu oponente causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência)."
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
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684353,
		cardmarket: 877484
	}
}

export default card
