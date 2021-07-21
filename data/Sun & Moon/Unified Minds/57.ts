import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Alolan Raichu",
		fr: "Raichu d’Alola",
		es: "Raichu de Alola",
		it: "Raichu di Alola",
		pt: "Raichu de Alola",
		de: "Alola-Raichu"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electro Rain",
				fr: "Électro-Pluie",
				es: "Lluvia Eléctrica",
				it: "Pioggia Elettrica",
				pt: "Chuva Elétrica",
				de: "Elektroregen"
			},
			effect: {
				en: "Discard any amount of Lightning Energy from this Pokémon. Then, for each Energy you discarded in this way, choose 1 of your opponent’s Pokémon and do 30 damage to it. (You can choose the same Pokémon more than once.) This damage isn’t affected by Weakness or Resistance.",
				fr: "Défaussez n’importe quel nombre d’Énergies Lightning de ce Pokémon. Ensuite, pour chaque Énergie défaussée de cette façon, choisissez l’un des Pokémon de votre adversaire et infligez-lui 30 dégâts. (Vous pouvez choisir le même Pokémon plusieurs fois.) Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "Descarta cualquier cantidad de Energías Lightning de este Pokémon. Después, por cada Energía que hayas descartado de esta manera, elige 1 de los Pokémon de tu rival y hazle 30 puntos de daño. (Puedes elegir el mismo Pokémon más de una vez). Este daño no se ve afectado por Debilidad o Resistencia.",
				it: "Scarta tutte le Energie Lightning che vuoi assegnate a questo Pokémon. Poi scegli uno dei Pokémon del tuo avversario per ogni Energia che hai scartato in questo modo e infliggigli 30 danni. Puoi scegliere lo stesso Pokémon più di una volta. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "Descarte qualquer quantidade de Energia Lightning deste Pokémon. Em seguida, para cada Energia descartada desta forma, escolha 1 dos Pokémon do seu oponente e cause 30 pontos de dano a ele (você pode escolher o mesmo Pokémon mais de uma vez). Este dano não é afetado por Fraqueza ou Resistência.",
				de: "Lege beliebig viele Lightning-Energien von diesem Pokémon auf deinen Ablagestapel. Wähle anschließend für jede auf diese Weise auf deinen Ablagestapel gelegte Energie 1 Pokémon deines Gegners und füge ihm 30 Schadenspunkte zu. (Du kannst dasselbe Pokémon mehr als einmal wählen.) Dieser Schaden wird durch Schwäche und Resistenz nicht verändert."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre",
				es: "Bola Eléctrica",
				it: "Lamposfera",
				pt: "Bola de Eletricidade",
				de: "Stromball"
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
