import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		de: "Duokles",
		it: "Doublade",
		pt: "Doublade"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		680
	],
	hp: 100,
	types: [
		"Metal"
	],
	stage: "Stage1",
	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		de: "Gramokles",
		it: "Honedge",
		pt: "Honedge"
	},
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Weaponized Swords",
				fr: "Épées Armes",
				es: "Espadas Pertrechadas",
				de: "Kollektive Klingenkraft",
				it: "Spade Belliche",
				pt: "Espadas Armadas"
			},
			damage: "60×",
			effect: {
				en: "Reveal any number of Honedge, Doublade, and Aegislash from your hand, and this attack does 60 damage for each card you revealed in this way.",
				fr: "Montrez le nombre voulu de Monorpale, de Dimoclès et d'Exagide de votre main. Cette attaque inflige 60 dégâts pour chaque carte montrée de cette façon.",
				es: "Enseña cualquier cantidad de Honedge, Doublade y Aegislash de tu mano, y este ataque hace 60 puntos de daño por cada carta que hayas enseñado de esta manera.",
				de: "Zeige deinem Gegner beliebig viele Gramokles, Duokles und Durengard auf deiner Hand, und diese Attacke fügt für jede auf diese Weise gezeigte Karte 60 Schadenspunkte zu.",
				it: "Mostra un numero qualsiasi di Honedge, Doublade e Aegislash che hai in mano e questo attacco infligge 60 danni per ogni carta che hai mostrato in questo modo.",
				pt: "Revele qualquer número de Honedge, Doublade e Aegislash na sua mão, e este ataque causa 60 pontos de dano para cada carta revelada desta forma."
			}
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Kamome Shirahama",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684379,
		cardmarket: 877473
	}
}

export default card
