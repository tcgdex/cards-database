import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Bronzong BREAK",
		fr: "Archéodong TURBO",
		es: "Bronzong TURBO",
		it: "Bronzong TURBO",
		pt: "Bronzong TURBO",
		de: "Bronzong-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong",
		de: "Bronzong"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Rain",
				fr: "Pluie Dorée",
				es: "Lluvia Metálica",
				it: "Pioggia Metallica",
				pt: "Chuva Metálica",
				de: "Goldregen"
			},
			effect: {
				en: "Discard as many Metal Energy attached to this Pokémon as you like. For each Energy card discarded in this way, choose 1 of your opponent's Pokémon and do 30 damage to it. Don't apply Weakness and Resistance. (You may choose the same Pokémon more than once.)",
				fr: "Défaussez autant d'Énergies Metal attachées à ce Pokémon que vous voulez. Pour chaque carte Énergie défaussée de cette façon, choisissez l'un des Pokémon de votre adversaire et infligez-lui 30 dégâts. N'appliquez ni la Faiblesse ni la Résistance. (Vous pouvez choisir plusieurs fois le même Pokémon.)",
				es: "Descarta tantas Energías Metal unidas a este Pokémon como quieras. Por cada carta de Energía descartada de esta manera, elige 1 de los Pokémon de tu rival y hazle 30 puntos de daño. No apliques Debilidad y Resistencia. (Puedes elegir el mismo Pokémon más de una vez).",
				it: "Scarta a piacimento le Energie Metal assegnate a questo Pokémon. Per ogni carta Energia scartata in questo modo, scegli uno dei Pokémon del tuo avversario e infliggigli 30 danni. Non applicare debolezza e resistenza. Puoi scegliere più di una volta lo stesso Pokémon.",
				pt: "Descarte tantas Energias Metal ligadas a este Pokémon quanto desejar. Para cada Energia descartada desta forma, escolha 1 dos Pokémon do seu oponente e cause 30 de danos nele. Não aplique Fraqueza e Resistência (você poderá escolher o mesmo Pokémon mais de uma vez).",
				de: "Lege beliebig viele an dieses Pokémon angelegte Metal-Energien auf deinen Ablagestapel. Wähle für jede Energiekarte, die auf diese Weise auf den Ablagestapel gelegt wurde, 1 Pokémon deines Gegners aus und füge jedem dieser Pokémon 30 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an. (Du kannst dasselbe Pokémon mehrmals auswählen.)"
			},

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 289883
	}
}

export default card
