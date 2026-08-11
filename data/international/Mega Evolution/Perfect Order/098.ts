import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [680],

	name: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'es-mx': "Doublade",
		'de-de': "Duokles",
		'it-it': "Doublade",
		'pt-br': "Doublade"
	},

	evolveFrom: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'es-mx': "Honedge",
		'de-de': "Gramokles",
		'it-it': "Honedge",
		'pt-br': "Honedge",
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Weaponized Swords",
			'fr-fr': "Épées Armes",
			'es-es': "Espadas Pertrechadas",
			'es-mx': "Espadas Pertrechadas",
			'de-de': "Kollektive Klingenkraft",
			'it-it': "Spade Belliche",
			'pt-br': "Espadas Armadas"
		},

		effect: {
			'en-us': "Reveal any number of Honedge, Doublade, and Aegislash from your hand, and this attack does 60 damage for each card you revealed in this way.",
			'fr-fr': "Montrez le nombre voulu de Monorpale, de Dimoclès et d'Exagide de votre main. Cette attaque inflige 60 dégâts pour chaque carte montrée de cette façon.",
			'es-es': "Enseña cualquier cantidad de Honedge, Doublade y Aegislash de tu mano, y este ataque hace 60 puntos de daño por cada carta que hayas enseñado de esta manera.",
			'es-mx': "Muestra cualquier cantidad de Honedge, Doublade y Aegislash de tu mano, y este ataque hace 60 puntos de daño por cada carta que mostraste de esta manera.",
			'de-de': "Zeige deinem Gegner beliebig viele Gramokles, Duokles und Durengard auf deiner Hand, und diese Attacke fügt für jede auf diese Weise gezeigte Karte 60 Schadenspunkte zu.",
			'it-it': "Mostra un numero qualsiasi di Honedge, Doublade e Aegislash che hai in mano e questo attacco infligge 60 danni per ogni carta che hai mostrato in questo modo.",
			'pt-br': "Revele qualquer número de Honedge, Doublade e Aegislash na sua mão, e este ataque causa 60 pontos de dano para cada carta revelada desta forma."
		},

		damage: "60×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 684380,
				cardmarket: 877515
			}
		}
	],

}

export default card
