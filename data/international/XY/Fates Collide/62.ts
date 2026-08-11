import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Bronzong BREAK",
		'fr-fr': "Archéodong TURBO",
		'es-es': "Bronzong TURBO",
		'it-it': "Bronzong TURBO",
		'pt-br': "Bronzong TURBO",
		'de-de': "Bronzong-TURBO"
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
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Metal Rain",
				'fr-fr': "Pluie Dorée",
				'es-es': "Lluvia Metálica",
				'it-it': "Pioggia Metallica",
				'pt-br': "Chuva Metálica",
				'de-de': "Goldregen"
			},
			effect: {
				'en-us': "Discard as many Metal Energy attached to this Pokémon as you like. For each Energy card discarded in this way, choose 1 of your opponent's Pokémon and do 30 damage to it. Don't apply Weakness and Resistance. (You may choose the same Pokémon more than once.)",
				'fr-fr': "Défaussez autant d'Énergies Metal attachées à ce Pokémon que vous voulez. Pour chaque carte Énergie défaussée de cette façon, choisissez l'un des Pokémon de votre adversaire et infligez-lui 30 dégâts. N'appliquez ni la Faiblesse ni la Résistance. (Vous pouvez choisir plusieurs fois le même Pokémon.)",
				'es-es': "Descarta tantas Energías Metal unidas a este Pokémon como quieras. Por cada carta de Energía descartada de esta manera, elige 1 de los Pokémon de tu rival y hazle 30 puntos de daño. No apliques Debilidad y Resistencia. (Puedes elegir el mismo Pokémon más de una vez).",
				'it-it': "Scarta a piacimento le Energie Metal assegnate a questo Pokémon. Per ogni carta Energia scartata in questo modo, scegli uno dei Pokémon del tuo avversario e infliggigli 30 danni. Non applicare debolezza e resistenza. Puoi scegliere più di una volta lo stesso Pokémon.",
				'pt-br': "Descarte tantas Energias Metal ligadas a este Pokémon quanto desejar. Para cada Energia descartada desta forma, escolha 1 dos Pokémon do seu oponente e cause 30 de danos nele. Não aplique Fraqueza e Resistência (você poderá escolher o mesmo Pokémon mais de uma vez).",
				'de-de': "Lege beliebig viele an dieses Pokémon angelegte Metal-Energien auf deinen Ablagestapel. Wähle für jede Energiekarte, die auf diese Weise auf den Ablagestapel gelegt wurde, 1 Pokémon deines Gegners aus und füge jedem dieser Pokémon 30 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an. (Du kannst dasselbe Pokémon mehrmals auswählen.)"
			},

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 289883,
		tcgplayer: 117837
	}
}

export default card
