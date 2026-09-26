import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	dexId: [6],

	name: {
		en: "Charizard",
		fr: "Dracaufeu",
		de: "Glurak",
		es: "Charizard",
		it: "Charizard",
		pt: "Charizard",
		'es-mx': "Charizard"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [{
		type: "Pokemon Power",

		name: {
			en: "Energy Burn",
			fr: "Combustion d'Énergie",
			de: "Energie verbrennen",
			es: "Quema de Energía",
			it: "Brucia energia",
			pt: "Queima de Energia",
			'es-mx': "Quema de Energía"
		},

		effect: {
			en: "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
			fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez transformer toutes les Énergies attachées à Dracaufeu en Énergies Fire jusqu'à la fin du tour. Ce pouvoir ne peut être utilisé si Dracaufeu est Endormi, Confus ou Paralysé.",
			de: "Bist Du am Zug, kannst Du (vor Deinem Angriff) beliebig oft alle auf Glurak abgelegte Energie in Fire Energie für den Rest des Zugs verwandeln. Diese Fähigkeit kann nicht eingesetzt werden, falls Glurak schlafend, verwirrt oder gelähmt ist.",
			es: "Tantas veces como quieras durante tu turno (antes de tu ataque), puedes transformar toda la Energía unida a Charizard en Energía Fire por el resto de tu turno. Este poder no puede ser usado si Charizard está Confundido, Dormido o Paralizado.",
			it: "Quante volte vuoi durante il tuo turno (prima di attaccare), puoi trasformare tutte le carte Energia assegnate a Charizard in carte Energia Fire per il resto del turno. Questo potere non può essere usato se Charizard è Addormentato, Confuso o Paralizzato.",
			pt: "No seu turno (antes do seu ataque) e o quanto você desejar, você pode transformar todas as Energias ligadas ao Charizard em Energia Fire pelo restante do turno. Este poder não pode ser usado se o Charizard estiver Adormecido, Confuso ou Paralisado.",
			'es-mx': "Cuantas veces quieras durante tu turno (antes de tu ataque), puedes transformar toda la Energía unida a Charizard en Energía Fire por el resto de tu turno. Este poder no puede ser usado si Charizard está Dormido, Confundido o Paralizado."
		}
	}],

	attacks: [{
		name: {
			en: "Fire Spin",
			fr: "Danseflamme",
			de: "Feuerwirbel",
			es: "Giro Fuego",
			it: "Turbofuoco",
			pt: "Chama Furacão",
			'es-mx': "Giro Fuego"
		},

		effect: {
			en: "Discard 2 Energy cards attached to Charizard in order to use this attack.",
			fr: "Défaussez 2 cartes Énergies attachées à Dracaufeu pour pouvoir utiliser cette attaque.",
			de: "Entferne 2 auf Glurak abgelegte Energiekarten, um diesen Angriff auszuführen.",
			es: "Descarta 2 cartas de Energía unidas a Charizard para poder usar este ataque.",
			it: "Scarta 2 carte Energia assegnate a Charizard per poter usare questo attacco.",
			pt: "Descarte 2 cartas de Energia ligadas ao Charizard para usar este ataque.",
			'es-mx': "Descarta 2 cartas de Energía unidas a Charizard para poder usar este ataque."
		},

		damage: 100,
		cost: ["Fire", "Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907940,
				tcgplayer: 714372
			}
		}
	],
}

export default card
