import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [121],
	set: Set,

	name: {
		en: "Starmie",
		fr: "Staross",
		es: "Starmie",
		it: "Starmie",
		pt: "Starmie",
		de: "Starmie"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		it: "Staryu",
		pt: "Staryu",
		de: "Sterndu"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Megumi Mizutani",

	description: {
		en: "It rotates its geometrically shaped body to swim through the water. It always seems to be sending out mysterious radio waves."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Multishot Star",
			fr: "Rafale Stellaire",
			de: "Multischussstern",
			es: "Estrella Multidisparo",
			pt: "Estrela de Disparos Múltiplos",
			it: "Stella Multicolpo"
		},

		effect: {
			en: "Discard any amount of {W} Energy from this Pokémon. Then, for each Energy card you discarded in this way, choose 1 of your opponent's Pokémon and do 30 damage to it. (You can choose the same Pokémon more than once.) This damage isn't affected by Weakness or Resistance.",
			fr: "Défaussez autant d'Énergies {W} que vous le voulez de ce Pokémon. Ensuite, pour chaque carte Énergie défaussée de cette façon, choisissez l'un des Pokémon de votre adversaire et infligez-lui 30 dégâts. (Vous pouvez choisir le même Pokémon plusieurs fois.) Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
			de: "Lege beliebig viele {W}-Energien von diesem Pokémon auf deinen Ablagestapel. Wähle anschließend für jede auf diese Weise abgelegte Energiekarte 1 Pokémon deines Gegners und füge jenem Pokémon 30 Schadenspunkte zu. (Du kannst dasselbe Pokémon mehr als einmal wählen.) Dieser Schaden wird durch Schwäche und Resistenz nicht verändert.",
			es: "Descarta cualquier cantidad de Energías {W} de este Pokémon. Después, por cada carta de Energía que hayas descartado de esta manera, elige 1 de los Pokémon de tu rival y hazle 30 puntos de daño. (Puedes elegir el mismo Pokémon más de una vez). Este daño no se ve afectado por Debilidad o Resistencia.",
			pt: "Descarte qualquer quantidade de Energia {W} deste Pokémon. Em seguida, para cada carta de Energia descartada desta forma, escolha 1 dos Pokémon do seu oponente e cause 30 pontos de dano a ele (você pode escolher o mesmo Pokémon mais de uma vez). Este dano não é afetado por Fraqueza ou Resistência.",
			it: "Scarta tutte le Energie {W} che vuoi da questo Pokémon. Poi scegli uno dei Pokémon del tuo avversario per ogni carta Energia che hai scartato in questo modo e infliggigli 30 danni. Puoi scegliere lo stesso Pokémon più di una volta. Questi danni non sono influenzati dalla debolezza o dalla resistenza."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582187,
		tcgplayer: 253184
	}
}

export default card
